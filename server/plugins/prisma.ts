import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'

export default defineNitroPlugin((nitroApp) => {
  let prisma: any = null

  nitroApp.hooks.hook('request', (event) => {
    if (!prisma) {
      prisma = new PrismaClient({
        adapter: new PrismaD1(event.context.cloudflare.env.DB as any)
      })
    }
    event.context.prisma = prisma
  })
})
