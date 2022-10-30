import { HttpStatus, INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../src/app.module";
import { AuthDto } from "../src/auth/dto";
import { CreateCarDto, UpdateCarDto } from "../src/car/dto";
import { PrismaService } from "../src/prisma/prisma.service";
import { CreateRepairDto } from "../src/repair/dto/create-repair.dto";
import { UpdateRepairDto } from "../src/repair/dto/update-repair.dto";
import { UpdateUserDto } from "../src/user/dto";

describe("App e2e", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let accessToken: string;
  let carId: number;
  let repairId: number;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    app.setGlobalPrefix("api");

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    await app.init();

    prisma = app.get(PrismaService);

    await prisma.cleanDb();
  });

  describe("Auth", () => {
    const authDto: AuthDto = {
      email: "teziovsky@gmail.com",
      password: "password12345",
    };

    describe("Register", () => {
      it("should throw error when email is empty", () => {
        return request(app.getHttpServer())
          .post(`/api/auth/register`)
          .send({
            password: authDto.password,
          })
          .set("Accept", "application/json")
          .expect(HttpStatus.BAD_REQUEST);
      });

      it("should throw error when password is empty", () => {
        return request(app.getHttpServer())
          .post(`/api/auth/register`)
          .send({
            email: authDto.email,
          })
          .set("Accept", "application/json")
          .expect(HttpStatus.BAD_REQUEST);
      });

      it("should register", () => {
        return request(app.getHttpServer())
          .post(`/api/auth/register`)
          .send(authDto)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(HttpStatus.CREATED);
      });
    });

    describe("Login", () => {
      it("should throw error when email is empty", () => {
        return request(app.getHttpServer())
          .post(`/api/auth/login`)
          .send({
            password: authDto.password,
          })
          .set("Accept", "application/json")
          .expect(HttpStatus.BAD_REQUEST);
      });

      it("should throw error when password is empty", () => {
        return request(app.getHttpServer())
          .post(`/api/auth/login`)
          .send({
            email: authDto.email,
          })
          .set("Accept", "application/json")
          .expect(HttpStatus.BAD_REQUEST);
      });

      it("should login", () => {
        return request(app.getHttpServer())
          .post(`/api/auth/login`)
          .send(authDto)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(({ body }) => {
            accessToken = body.access_token;
          })
          .expect(HttpStatus.OK);
      });
    });
  });

  describe("User", () => {
    describe("Get Me", () => {
      it("should get current user", () => {
        return request(app.getHttpServer())
          .get(`/api/user`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .expect(HttpStatus.OK);
      });
    });

    describe("Update User", () => {
      it("should update user", () => {
        const updateUserDto: UpdateUserDto = {
          firstName: "Jakub",
          lastName: "Teziovsky",
        };

        return request(app.getHttpServer())
          .put(`/api/user`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .send(updateUserDto)
          .expect(HttpStatus.OK)
          .then((res) => {
            expect(res.body.firstName).toEqual(updateUserDto.firstName);
            expect(res.body.lastName).toEqual(updateUserDto.lastName);
          });
      });
    });
  });

  describe("Car", () => {
    describe("Get Empty Cars", () => {
      it("should get empty cars", () => {
        return request(app.getHttpServer())
          .get(`/api/cars`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .expect(HttpStatus.OK)
          .then((res) => {
            expect(res.body).toEqual([]);
          });
      });
    });

    describe("Create Car", () => {
      it("should create car", () => {
        const createCarDto: CreateCarDto = {
          type: "Hatchback",
          brand: "Honda",
          model: "Civic",
          generation: "X",
          productionYear: 2021,
        };

        return request(app.getHttpServer())
          .post(`/api/cars`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .send(createCarDto)
          .expect(HttpStatus.CREATED)
          .then((res) => {
            expect(res.body.brand).toEqual(createCarDto.brand);
            expect(res.body.model).toEqual(createCarDto.model);
            expect(res.body.productionYear).toEqual(
              createCarDto.productionYear,
            );
          });
      });
    });

    describe("Get Cars", () => {
      it("should get cars", () => {
        return request(app.getHttpServer())
          .get(`/api/cars`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .expect(HttpStatus.OK)
          .then((res) => {
            carId = res.body[0].id;
            expect(res.body.length).toEqual(1);
          });
      });
    });

    describe("Get Car by ID", () => {
      it("should get a car", () => {
        return request(app.getHttpServer())
          .get(`/api/cars/${carId}`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .expect(HttpStatus.OK)
          .then((res) => {
            expect(res.body.id).toEqual(carId);
          });
      });
    });

    describe("Update Car by ID", () => {
      it("should update car", () => {
        const updateCarDto: UpdateCarDto = {
          brand: "BMW",
          model: "330ci",
          productionYear: 2021,
          engineType: "Benzynowy",
          engineCapacity: "3.0",
          enginePower: 250,
          gearboxType: "Automatic",
        };

        return request(app.getHttpServer())
          .put(`/api/cars/${carId}`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .send(updateCarDto)
          .expect(HttpStatus.OK)
          .then((res) => {
            expect(res.body.id).toEqual(carId);
            expect(res.body.brand).toEqual(updateCarDto.brand);
            expect(res.body.model).toEqual(updateCarDto.model);
          });
      });
    });

    describe("Delete Car by ID", () => {
      it("should delete a car", () => {
        return request(app.getHttpServer())
          .delete(`/api/cars/${carId}`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .expect(HttpStatus.NO_CONTENT);
      });

      it("should get empty cars", () => {
        return request(app.getHttpServer())
          .get(`/api/cars`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .expect(HttpStatus.OK)
          .then((res) => {
            expect(res.body).toEqual([]);
          });
      });

      it("should create another car", () => {
        const createCarDto: CreateCarDto = {
          type: "Sedan",
          brand: "Lexus",
          model: "is300h",
          generation: "III",
          productionYear: 2020,
          engineType: "Hybrydowy",
          engineCapacity: "2494",
          enginePower: 223,
          gearboxType: "Automatyczna",
        };

        return request(app.getHttpServer())
          .post(`/api/cars`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .send(createCarDto)
          .expect(HttpStatus.CREATED)
          .then((res) => {
            carId = res.body.id;
            expect(res.body.brand).toEqual(createCarDto.brand);
            expect(res.body.model).toEqual(createCarDto.model);
            expect(res.body.productionYear).toEqual(
              createCarDto.productionYear,
            );
          });
      });
    });
  });

  describe("Repair", () => {
    describe("Get Empty Repairs", () => {
      it("should get empty repairs", () => {
        return request(app.getHttpServer())
          .get(`/api/cars/${carId}/repairs`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .expect(HttpStatus.OK)
          .then((res) => {
            expect(res.body).toEqual([]);
          });
      });
    });

    describe("Create Repair", () => {
      it("should create repair", () => {
        const createRepairDto: CreateRepairDto = {
          title: "Kupno samochodu Lexus is300h",
          description: "W cenę zakupu wliczono wykonanie przeglądu 0.",
          price: 81900,
          date: "2022-05-19",
          mileage: 49000,
        };

        return request(app.getHttpServer())
          .post(`/api/cars/${carId}/repairs`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .send(createRepairDto)
          .expect(HttpStatus.CREATED)
          .then((res) => {
            expect(res.body.title).toEqual(createRepairDto.title);
            expect(res.body.description).toEqual(createRepairDto.description);
            expect(res.body.price).toEqual(createRepairDto.price);
            expect(res.body.date).toEqual(createRepairDto.date);
            expect(res.body.mileage).toEqual(createRepairDto.mileage);
          });
      });
    });

    describe("Get Repairs", () => {
      it("should get repairs", () => {
        return request(app.getHttpServer())
          .get(`/api/cars/${carId}/repairs`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .expect(HttpStatus.OK)
          .then((res) => {
            repairId = res.body[0].id;
            expect(res.body.length).toEqual(1);
          });
      });
    });

    describe("Get Repair by ID", () => {
      it("should get a repair", () => {
        return request(app.getHttpServer())
          .get(`/api/cars/${carId}/repairs/${repairId}`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .expect(HttpStatus.OK)
          .then((res) => {
            expect(res.body.id).toEqual(repairId);
          });
      });
    });

    describe("Update Repair by ID", () => {
      it("should update repair", () => {
        const updateRepairDto: UpdateRepairDto = {
          title: "Kupno samochodu Lexus is200t",
          description:
            "W cenę zakupu wliczono wykonanie przeglądu 0 oraz kupno nowego kompletu opon.",
          price: 85900,
          date: "2022-07-10",
          mileage: 31210,
        };

        return request(app.getHttpServer())
          .put(`/api/cars/${carId}/repairs/${repairId}`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .send(updateRepairDto)
          .expect(HttpStatus.OK)
          .then((res) => {
            expect(res.body.id).toEqual(repairId);
            expect(res.body.title).toEqual(updateRepairDto.title);
            expect(res.body.description).toEqual(updateRepairDto.description);
            expect(res.body.price).toEqual(updateRepairDto.price);
            expect(res.body.date).toEqual(updateRepairDto.date);
            expect(res.body.mileage).toEqual(updateRepairDto.mileage);
          });
      });
    });

    describe("Delete Repair by ID", () => {
      it("should delete a repair", () => {
        return request(app.getHttpServer())
          .delete(`/api/cars/${carId}/repairs/${repairId}`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .expect(HttpStatus.NO_CONTENT);
      });

      it("should get empty repairs", () => {
        return request(app.getHttpServer())
          .get(`/api/cars/${carId}/repairs`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .expect(HttpStatus.OK)
          .then((res) => {
            expect(res.body).toEqual([]);
          });
      });
    });

    it("should create another repair", () => {
      const createRepairDto: CreateRepairDto = {
        title: "Wymiana oleju w Lexus is300h",
        description: "Wlano olej Castrol Magnatec",
        price: 500,
        date: "2022-07-19",
        mileage: 49500,
      };

      return request(app.getHttpServer())
        .post(`/api/cars/${carId}/repairs`)
        .set("Accept", "application/json")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(createRepairDto)
        .expect(HttpStatus.CREATED)
        .then((res) => {
          expect(res.body.title).toEqual(createRepairDto.title);
          expect(res.body.description).toEqual(createRepairDto.description);
          expect(res.body.price).toEqual(createRepairDto.price);
          expect(res.body.date).toEqual(createRepairDto.date);
          expect(res.body.mileage).toEqual(createRepairDto.mileage);
        });
    });
  });

  afterAll(() => {
    app.close();
  });
});
