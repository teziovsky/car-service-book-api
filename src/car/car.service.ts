import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EditCarDto, CreateCarDto } from "./dto";

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  getCars(userId: number) {
    return this.prisma.car.findMany({
      where: {
        userId,
      },
    });
  }

  getCarById(userId: number, carId: number) {
    return this.prisma.car.findFirst({
      where: {
        id: carId,
        userId,
      },
    });
  }

  async createCar(userId: number, createCarDto: CreateCarDto) {
    return await this.prisma.car.create({
      data: {
        userId,
        ...createCarDto,
      },
    });
  }

  async editCarById(userId: number, carId: number, editCarDto: EditCarDto) {
    const car = await this.prisma.car.findUnique({
      where: {
        id: carId,
      },
    });

    if (!car || car.userId !== userId)
      throw new ForbiddenException("Access to resources denied");

    return this.prisma.car.update({
      where: {
        id: carId,
      },
      data: {
        ...editCarDto,
      },
    });
  }

  async deleteCarById(userId: number, carId: number) {
    const car = await this.prisma.car.findUnique({
      where: {
        id: carId,
      },
    });

    // check if user owns the car
    if (!car || car.userId !== userId)
      throw new ForbiddenException("Access to resources denied");

    await this.prisma.car.delete({
      where: {
        id: carId,
      },
    });
  }
}
