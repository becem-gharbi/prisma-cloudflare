import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'
import { usePrismaAdapter, setEventContext } from '#auth_utils'
import type { Adapter } from '#auth_adapter'

let adapter: Adapter | null = null

declare module '#auth_adapter' {
    type Source = PrismaClient
}

export default defineEventHandler(async (event) => {
  if (!adapter) {
    const prisma = new PrismaClient({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      adapter: new PrismaD1(event.context.cloudflare.env.DB as any),
    })

    adapter = usePrismaAdapter(prisma)
  }
  await setEventContext(event, adapter)
})
