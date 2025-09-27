import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function POST(request:Request) {
  const { email , message} = await request.json();
  try {
    const user = await prisma.user.create({
      data:{
        email:email,
        message:message
      }
    })
    return new Response(JSON.stringify({status:200,message:"utente aggiunto con successo"}))
  } catch (error) {
    console.error("Error:", error);
  }
  finally{
    prisma.$disconnect()
  }
}
