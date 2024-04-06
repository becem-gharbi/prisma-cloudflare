export default defineEventHandler(async (event) => {
  const userId = event.context.auth?.userId

  if (!userId) {
    throw createError({ message: 'unauthorized', statusCode: 401 })
  }

  const { name } = await readBody(event)

  const user = await event.context.prisma.user.update({
    where: {
      id: userId
    },
    data: {
      name
    }
  })

  return user
})
