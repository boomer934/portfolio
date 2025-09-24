// Crea questo file in src/app/api/test-db/route.ts
import mysql2 from "mysql2/promise";

export async function GET() {
  const configs = [
    {
      name: "Public Domain",
      config: {
        host: "mysql.up.railway.app",
        user: "root",
        password: "wjKRboUTFDdcqFVdVGKtfaTEvXESIEDn",
        database: "railway",
        port: 3306,
        connectTimeout: 10000,
      }
    },
    {
      name: "TCP Proxy",
      config: {
        host: "tramway.proxy.rlwy.net",
        user: "root", 
        password: "wjKRboUTFDdcqFVdVGKtfaTEvXESIEDn",
        database: "railway",
        port: 15051,
        connectTimeout: 10000,
      }
    }
  ];

  const results = [];

  for (const { name, config } of configs) {
    try {
      console.log(`🔧 Testing ${name}...`);
      
      const connection = await mysql2.createConnection(config);
      const [rows] = await connection.execute('SELECT 1 as test, NOW() as current_time');
      await connection.end();

      results.push({
        config: name,
        status: "SUCCESS",
        result: rows,
        host: config.host,
        port: config.port
      });

    } catch (error: any) {
      console.error(`❌ ${name} failed:`, error.message);
      
      results.push({
        config: name,
        status: "ERROR",
        error: error.message,
        code: error.code,
        errno: error.errno,
        host: config.host,
        port: config.port
      });
    }
  }

  // Test anche variabili d'ambiente
  const envTest = {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
    DB_PASSWORD_EXISTS: !!process.env.DB_PASSWORD,
    DB_PASSWORD_LENGTH: process.env.DB_PASSWORD?.length || 0
  };

  return Response.json({
    message: "Test connessioni Railway",
    environment_variables: envTest,
    connection_tests: results,
    recommendations: results.find(r => r.status === "SUCCESS") 
      ? "Usa la configurazione che ha avuto successo"
      : "Nessuna connessione riuscita - verifica credenziali"
  });
}