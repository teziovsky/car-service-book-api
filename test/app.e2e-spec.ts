import { Test, TestingModule } from "@nestjs/testing";
import { HttpStatus, INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { log } from "util";
import { AppModule } from "../src/app.module";
import { AuthDto } from "../src/auth/dto";
import { PrismaService } from "../src/prisma/prisma.service";
import { EditUserDto } from "../src/user/dto";

describe("App e2e", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let access_token: string;

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
            access_token = body.access_token;
          })
          .expect(HttpStatus.OK);
      });
    });
  });

  describe("User", () => {
    describe("Get Me", () => {
      it("should get current user", () => {
        return request(app.getHttpServer())
          .get(`/api/users/me`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${access_token}`)
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
          .put(`/api/users/me`)
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${access_token}`)
          .send(editUserDto)
          .expect(HttpStatus.OK)
          .expect((res) => {
            res.body.firstName = editUserDto.firstName;
            res.body.lastName = editUserDto.lastName;
          });
      });
    });
  });

  describe("Car", () => {
    describe("Create Car", () => {});

    describe("Get Cars", () => {});

    describe("Get Car by ID", () => {});

    describe("Edit Car by ID", () => {});

    describe("Delete Car by ID", () => {});
  });

  afterAll(() => {
    app.close();
  });
});
