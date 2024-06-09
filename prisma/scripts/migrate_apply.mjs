import { applyMigration, getDatabaseInfo } from './utils.mjs'

async function start() {
  try {
    const database = getDatabaseInfo()

    const flags = process.argv.slice(2)
    const environment = flags.includes('--remote') ? 'remote' : 'local'

    flags.forEach((flag) => {
      const name = flag.split('--db=')[1]
      if (name) {
        database.name = name
      }
    })

    console.log(`⌛ Apply migrations to ${environment} <${database.name}> database \n`)
    await applyMigration(database.name, environment)
  }
  catch (err) {
    console.error(`❌ ${err}`)
  }
}

start()
