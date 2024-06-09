export default defineNuxtConfig({
  extends: ['./layers/base'],
  modules: ['@nuxt/eslint'],

  devtools: {
    enabled: false,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  app: {
    head: {
      title: 'Prisma Cloudflare',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Nuxt starter on Cloudflare with auth, prisma & Naive UI' },
        { name: 'theme-color', content: '#18181B' },
      ],
    },
  },
})
