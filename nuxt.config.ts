import nitroCloudflareBindings from 'nitro-cloudflare-dev'
import { auth, naiveui, tailwindcss } from './config'

export default defineNuxtConfig({
  ssr: false,

  spaLoadingTemplate: true,

  devtools: {
    enabled: true
  },

  nitro: {
    preset: 'cloudflare-pages',
    modules: [nitroCloudflareBindings],
    experimental: {
      database: true,
      wasm: true
    }
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
  },

  css: ['~/assets/styles/main.css'],

  modules: [
    '@bg-dev/nuxt-auth',
    '@bg-dev/nuxt-naiveui',
    '@nuxtjs/tailwindcss'
  ],

  auth,
  naiveui,
  tailwindcss
})
