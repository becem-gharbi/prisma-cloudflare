export default defineEventHandler(async (event) => {
  const { userId } = checkAuth(event)

  const { name } = await readBody(event)

  const user = await event.context.auth.adapter.source.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
    },
  })

  return user
})
