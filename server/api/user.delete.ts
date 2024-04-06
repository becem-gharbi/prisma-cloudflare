export default defineEventHandler(async (event) => {
  const { userId } = checkAuth(event)

  const config = useRuntimeConfig()

  await event.context.prisma.user.delete({
    where: {
      id: userId
    }
  })

  deleteCookie(event, config.auth.refreshToken.cookieName)

  return { status: 'ok' }
})
