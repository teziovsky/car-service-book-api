import { faker } from "@faker-js/faker";
import { User } from "@prisma/client";
import * as argon from "argon2";

export async function addUsers(prisma: any) {
  await prisma.user.deleteMany({});

  const users: User[] = [];

  for (let i = 0; i < 10; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const user: User = {
      id: i + 1,
      email:
        i === 0
          ? "teziovsky@gmail.com"
          : faker.internet.email(firstName, lastName),
      hash: await argon.hash("Password123"),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      firstName: i === 0 ? "Jakub" : firstName,
      lastName: i === 0 ? "Soboczyński" : lastName,
    };

    users.push(user);
  }

  await prisma.user.createMany({ data: users });
}
