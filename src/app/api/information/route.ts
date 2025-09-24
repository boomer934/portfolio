import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  waitForConnections: true,
  connectionLimit: 5,
});

export async function POST(request: Request) {
  try {
    console.log("📥 Ricevuta richiesta POST");

    const body = await request.json();
    console.log("📄 Body ricevuto:", body);

    const { email, message } = body;

    if (!email || !message) {
      console.warn("⚠️ Mancano email o message");
      return new Response(
        JSON.stringify({ status: "error", message: "Email o message mancanti" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("🔗 Tentativo di connessione al DB...");

    const [result] = await pool.query(
      "INSERT INTO Information (email, message) VALUES (?, ?)",
      [email, message]
    );

    console.log("✅ Inserimento DB riuscito:", result);

    return new Response(
      JSON.stringify({ status: "success", email, message }),
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
