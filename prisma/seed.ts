import { PrismaClient } from "@prisma/client";
import { addCars } from "./seed/cars";
import { addRepairs } from "./seed/repairs";
import { addUsers } from "./seed/users";

const prisma = new PrismaClient();

async function main() {
  await addUsers(prisma);
  await addCars(prisma);
  await addRepairs(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
