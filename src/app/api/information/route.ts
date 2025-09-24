import mysql2 from "mysql2/promise";

// Configurazione ottimizzata per Railway TCP Proxy
const createConnection = async () => {
  return await mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    connectTimeout: 15000,  // 15 secondi
  });
};

export async function POST(request: Request) {
  let connection;
  
  try {
    console.log("📥 Ricevuta richiesta POST");
    
    // Verifica variabili d'ambiente
    if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD) {
      console.error("❌ Variabili d'ambiente mancanti");
      return new Response(
        JSON.stringify({ 
          status: "error", 
          message: "Configurazione database mancante" 
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    
    const body = await request.json();
    console.log("📄 Body ricevuto:", body);
    
    const { email } = body;
    
    if (!email) {
      console.warn("⚠️ Manca email");
      return new Response(
        JSON.stringify({ status: "error", message: "Email mancante" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    
    console.log("🔗 Tentativo di connessione al DB...");
    connection = await createConnection();
    console.log("✅ Connessione stabilita");
    
    const [result] = await connection.execute(
      "INSERT INTO Information (email) VALUES (?)",
      [email]
    ) as any[];
    
    console.log("✅ Inserimento DB riuscito:", result);
    
    return new Response(
      JSON.stringify({ status: "success", email }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
    
  } catch (error: any) {
    console.error("❌ ERRORE:", error.message);
    console.error("❌ Codice errore:", error.code);
    
    let errorMessage = error.message;
    
    // Errori specifici più chiari
    if (error.code === 'ETIMEDOUT') {
      errorMessage = "Timeout connessione database";
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = "Host database non trovato";
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      errorMessage = "Credenziali database non valide";
    }
    
    return new Response(
      JSON.stringify({ status: "error", message: errorMessage, code: error.code }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
    
  } finally {
    if (connection) {
      await connection.end();
      console.log("🔐 Connessione chiusa");
    }
  }
}