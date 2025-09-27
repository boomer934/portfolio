import prisma from "@/lib/prisma/prisma";
export async function POST(request:Request) {
  const body = request.body
  try {
    const { email, message } = await request.json();

    const user = await prisma?.user.create({
      data:{
        email,
        message
      }
    })

    return new Response(JSON.stringify({ status: 200, message: "Utente aggiunto con successo" }), { status: 200 });
  } catch (error: any) {
    console.error("Errore Prisma:", error);
    return new Response(JSON.stringify({ status: 500, error: error.message || error }), { status: 500 });
  }
  finally{
    prisma?.$disconnect()
  }
}
