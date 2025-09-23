import 'dotenv/config';
import mysql2 from "mysql2/promise";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, message } = body;

  try {
    // Connetti al DB
    const db = await mysql2.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT)
    });

    const query = "INSERT INTO Information (email, message) VALUES (?, ?)";

    // Esegui la query
    await db.query(query, [email, message]);

    // Chiudi la connessione
    await db.end();

    return new Response(JSON.stringify({ status: "success", email, message }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ status: "error", error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
