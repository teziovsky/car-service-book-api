import { HttpStatus, INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../src/app.module";
import { AuthDto } from "../src/auth/dto";
import { CreateCarDto, EditCarDto } from "../src/car/dto";
import { PrismaService } from "../src/prisma/prisma.service";
import { EditUserDto } from "../src/user/dto";

describe("App e2e", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let accessToken: string;

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

    describe("Edit User", () => {
      it("should edit user", () => {
        const editUserDto: EditUserDto = {
          firstName: "Jakub",
          lastName: "Teziovsky",
        };

        return request(app.getHttpServer())
          .put(`/api/user`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .send(editUserDto)
          .expect(HttpStatus.OK)
          .then((res) => {
            expect(res.body.firstName).toEqual(editUserDto.firstName);
            expect(res.body.lastName).toEqual(editUserDto.lastName);
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

    let carId: number;

    describe("Create Car", () => {
      it("should create car", () => {
        const createCarDto: CreateCarDto = {
          brand: "Honda",
          model: "Civic",
          productionYear: "2021",
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

    describe("Edit Car by ID", () => {
      it("should edit car", () => {
        const editCarDto: EditCarDto = {
          brand: "BMW",
          model: "330ci",
          productionYear: "2021",
        };

        return request(app.getHttpServer())
          .put(`/api/cars/${carId}`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${accessToken}`)
          .send(editCarDto)
          .expect(HttpStatus.OK)
          .then((res) => {
            expect(res.body.id).toEqual(carId);
            expect(res.body.brand).toEqual(editCarDto.brand);
            expect(res.body.model).toEqual(editCarDto.model);
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
    });
  });

  afterAll(() => {
    app.close();
  });
});
