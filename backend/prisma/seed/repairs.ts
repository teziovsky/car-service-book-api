import { faker } from "@faker-js/faker";
import { Repair } from "@prisma/client";

export async function addRepairs(prisma: any) {
  await prisma.repair.deleteMany({});

  const repairs: Repair[] = [];

  for (let i = 0; i < 3000; i++) {
    const repair: Repair = {
      id: i + 1,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      date: faker.date.past(),
      mileage: faker.datatype.number({ min: 10000, max: 100000 }),
      description: faker.lorem.paragraph(),
      price: faker.datatype.number({ min: 100, max: 10000 }),
      title: faker.lorem.sentence(),
      carId: faker.datatype.number({ min: 1, max: 100 }),
    };

    repairs.push(repair);
  }

  await prisma.repair.createMany({ data: repairs });
}
