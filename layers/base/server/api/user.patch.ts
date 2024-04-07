export default defineEventHandler(async (event) => {
  const { userId } = checkAuth(event)

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
