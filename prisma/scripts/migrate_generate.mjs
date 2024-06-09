import { generateClient, generateMigration, getDatabaseInfo } from './utils.mjs'

async function start() {
  try {
    const database = getDatabaseInfo()
    console.log(`⌛ Generate new migration to ${database.migrationsDir} \n`)
    await generateMigration(database.migrationsDir)
    await generateClient()
  }
  catch (err) {
    console.error(`❌ ${err}`)
  }
}

start()
