import nitroCloudflareBindings from 'nitro-cloudflare-dev'
import { auth, naiveui, tailwindcss } from './config'

export default defineNuxtConfig({
  nitro: {
    modules: [nitroCloudflareBindings],
    experimental: {
      database: true,
      wasm: true
    }
  },

  modules: [
    '@bg-dev/nuxt-auth',
    '@bg-dev/nuxt-naiveui',
    '@nuxtjs/tailwindcss'
  ],

  auth,
  naiveui,
  tailwindcss
})
