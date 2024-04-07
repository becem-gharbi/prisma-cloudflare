import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'

let prisma: PrismaClient | null = null

export default defineEventHandler((event) => {
  if (!prisma) {
    prisma = new PrismaClient({
      adapter: new PrismaD1(event.context.cloudflare.env.DB as any)
    })
  }
  event.context.prisma = prisma
})
