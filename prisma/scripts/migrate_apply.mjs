/* eslint-disable no-console */
import { applyMigration, getDatabaseInfo } from './utils.mjs'

async function start () {
  try {
    const database = getDatabaseInfo()
    const flags = process.argv.slice(2)
    const environment = flags.includes('--remote') ? 'remote' : 'local'
    console.log(`⌛ Apply migrations to ${environment} database \n`)
    await applyMigration(database.name, environment)
  } catch (err) {
    console.error(`❌ ${err}`)
  }
}

start()
