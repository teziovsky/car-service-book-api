import { faker } from "@faker-js/faker";
import { Car, EngineType, GearboxType } from "@prisma/client";

export async function addCars(prisma: any) {
  await prisma.car.deleteMany({});

  const cars: Car[] = [];

  for (let i = 0; i < 100; i++) {
    const car: Car = {
      id: i + 1,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      type: "SUV",
      brand: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      productionYear: faker.date.past().getFullYear(),
      engineCapacity: faker.datatype.number({ min: 1000, max: 5000 }),
      enginePower: faker.datatype.number({ min: 50, max: 900 }),
      gearboxType: faker.helpers.arrayElement([
        "Manual",
        "Automatic",
      ] as GearboxType[]),
      generation: null,
      engineType: faker.helpers.arrayElement([
        "Gasoline",
        "Diesel",
        "Electric",
        "Hybrid",
        "Other",
      ] as EngineType[]),
      userId: faker.datatype.number({ min: 1, max: 10 }),
    };

    cars.push(car);
  }

  await prisma.car.createMany({ data: cars });
}
