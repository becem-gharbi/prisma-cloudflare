# Prisma Cloudflare

This project is a Nuxt starter app with auth and Naive UI using Prisma with D1 database deployed on Cloudflare pages.

Cloudflare offers a worlwide network to serve static content and run serverless code with native object storage and database binding.
Nuxt is a fullstack framework for building server-rendered Vue apps and runtime agnostic web services.
To get started building Nuxt apps on Cloudflare it's recommended to use [Nuxt Hub](https://hub.nuxt.com) platform.

Prisma is an ORM that supports edge deployment either via a proxy runnig on Prisma accelerate or via driver adapters. This project uses Cloudflare D1 driver which is introduced on version 5.12.0. The limitations are:

- This feature is in currently in preview.

- The query engine is bundled with currently 782kB which limits the app size for the free tier where the server bundle size cannot exceed 1mB.

- The database migration should be made with Wrangler instead of Prisma migrate command. This project handles the migration [workflows](https://www.prisma.io/docs/orm/overview/databases/cloudflare-d1#migration-workflows) via `migrate` scripts.

## Setup

To get started you will need to have a Cloudflare account.

- Install dependencies.

```bash
pnpm install
```

- Rename `.example.env` to `.env` and set env variables, check [@bg-dev/nuxt-auth](https://nuxt-auth.bg.tn).

- Deploy the project on Cloudflare Pages and add the env variables.

- Create a new D1 database and [bind](https://developers.cloudflare.com/pages/functions/bindings/#d1-databases) it to the Page project.

- Rename `ex.wrangler.toml` to `wrangler.toml` and set `database_name` and `database_id`. This will be used by Wrangler.

- Apply migration on local database.

```bash
pnpm migrate:apply
```

- Apply migration on remote database.

```bash
pnpm migrate:apply --remote
```

- Generate new migration file after updating Prisma schema.

```bash
pnpm migrate:generate
```
