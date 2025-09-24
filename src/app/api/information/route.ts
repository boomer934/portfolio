import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  waitForConnections: true,
  connectionLimit: 5,
  connectTimeout: 30000,      // 30 secondi per la connessione
});

export async function POST(request: Request) {
  try {
    console.log("📥 Ricevuta richiesta POST");
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
    
    // Test connessione
    const connection = await pool.getConnection();
    console.log("✅ Connessione ottenuta");
    
    const [result] = await connection.query(
      "INSERT INTO Information (email) VALUES (?)",
      [email]
    );
    
    connection.release();
    console.log("✅ Inserimento DB riuscito:", result);
    
    return new Response(
      JSON.stringify({ status: "success", email }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
    
  } catch (error: any) {
    console.error("❌ ERRORE:", error.message);
    console.error("Stack trace:", error.stack);
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}