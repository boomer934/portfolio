import mysql2 from "mysql2/promise";

export async function GET() {
  try {
    const connection = await mysql2.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
      connectTimeout: 5000, // timeout breve per test
    });

    // Test semplice: chiediamo la versione del DB
    const [rows] = await connection.query("SELECT VERSION() AS version");
    await connection.end();

    return new Response(
      JSON.stringify({ status: "ok", version: rows }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Errore connessione DB:", err.message);
    return new Response(
      JSON.stringify({ status: "error", message: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
