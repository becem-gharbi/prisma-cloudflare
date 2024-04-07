import { readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { exec } from 'node:child_process'
import { parse as parseToml } from 'toml'

export function getDatabaseInfo () {
  let wranglerStr = ''
  try {
    wranglerStr = readFileSync(resolve('wrangler.toml'), 'utf-8')
  } catch (err) {
    throw new Error('Make sure to add wrangler.toml')
  }
  const wranglerObj = parseToml(wranglerStr)
  const database = wranglerObj?.d1_databases[0]
  const name = database?.database_name
  if (!name) {
    throw new Error('Make sure to set database_name')
  }
  return {
    name,
    migrationsDir: database.migrations_dir ?? './migrations'
  }
}

function isInitialMigration (migrationsDir) {
  try {
    return readdirSync(resolve(migrationsDir)).length === 0
  } catch (error) {
    return true
  }
}

function runScript (script) {
  return new Promise((resolve, reject) => {
    const child = exec(script)

    // eslint-disable-next-line no-console
    child.stdout.on('data', data => console.log(data))

    child.on('error', reject)
    child.on('close', resolve)
  })
}

export async function generateMigration (migrationsDir) {
  const isInitial = isInitialMigration(migrationsDir)

  if (isInitial) {
    await runScript(`npx prisma migrate diff --script --from-empty \
     --to-schema-datamodel ./prisma/schema.prisma \
     --output ${migrationsDir}/${new Date().getTime()}.sql`
    )
  } else {
    await runScript(`npx prisma migrate diff --script --from-local-d1 \
     --to-schema-datamodel ./prisma/schema.prisma \
     --output ${migrationsDir}/${new Date().getTime()}.sql`
    )
  }
}

export function applyMigration (databaseName, environment) {
  if (['local', 'remote'].includes(environment)) {
    return runScript(`npx wrangler d1 migrations apply ${databaseName} --${environment}`)
  }
}

export function generateClient () {
  return runScript('npx prisma generate')
}
