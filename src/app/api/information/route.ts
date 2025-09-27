import prisma from "@/lib/prisma/prisma";

export async function POST(request: Request) {
  try {
    const {email,message} = await request.json()
    const user = await prisma?.user.create({
      data:{
        email,
        message
      }
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({error:error}))
  } finally{
    prisma?.$disconnect()
  }
}
