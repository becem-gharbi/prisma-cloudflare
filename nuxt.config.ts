import nitroCloudflareBindings from 'nitro-cloudflare-dev'
import { auth, naiveui, tailwindcss } from './config'

export default defineNuxtConfig({
  ssr: false,

  devtools: {
    enabled: false
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
      title: 'Nuxt starter',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: 'Edge compatible Nuxt starter' },
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
