"use strict";var _client = require('@prisma/client');

const prisma = new (0, _client.PrismaClient)()

async function main () {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
