import type { ModuleOptions } from 'nuxt-s3'

export const s3: Partial<ModuleOptions> = {
  server: false,
  driver: 's3',
  region: 'auto',
  accept: '^image/(png|jpeg|png|gif)',
  maxSizeMb: 5,
  accessKeyId: process.env.NUXT_S3_ACCESS_KEY_ID,
  bucket: process.env.NUXT_S3_BUCKET,
  endpoint: process.env.NUXT_S3_ENDPOINT,
  secretAccessKey: process.env.NUXT_S3_SECRET_ACCESS_KEY
}
