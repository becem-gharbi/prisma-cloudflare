export default defineNuxtConfig({
  extends: ['./layers/base'],

  devtools: {
    enabled: false
  },

  app: {
    head: {
      title: 'Prisma Cloudflare',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: 'Nuxt starter on Cloudflare with auth, prisma & Naive UI' },
        { name: 'theme-color', content: '#18181B' }
      ]
    }
  }
})
