import { PrismaClient } from "@prisma/client";

declare global {
  // Aggiungiamo `prisma` a globalThis per TypeScript
  var prisma: PrismaClient | undefined;
}

if (!global.prisma) {
  prisma = new PrismaClient();
  // @ts-ignore
  global.prisma = prisma;
} else {
  // @ts-ignore
  prisma = global.prisma;
}


export default prisma;
