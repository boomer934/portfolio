import mysql2 from "mysql2/promise";

// Pool globale (Vercel riusa i moduli tra le richieste)
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
    const { email, message } = await request.json();

    const [result] = await pool.query(
      "INSERT INTO Information (email, message) VALUES (?, ?)",
      [email, message]
    );

    return new Response(
      JSON.stringify({ status: "success", email, message }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("ERRORE DB:", error.message);
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
