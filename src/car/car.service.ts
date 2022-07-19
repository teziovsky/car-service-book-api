import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateCarDto, CreateCarDto } from "./dto";

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, createCarDto: CreateCarDto) {
    return await this.prisma.car.create({
      data: {
        userId,
        ...createCarDto,
      },
    });
  }

  findAll(userId: number) {
    return this.prisma.car.findMany({
      where: {
        userId,
      },
    });
  }

  findOne(userId: number, carId: number) {
    return this.prisma.car.findFirst({
      where: {
        id: carId,
        userId,
      },
    });
  }

  async update(userId: number, carId: number, updateCarDto: UpdateCarDto) {
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
        ...updateCarDto,
      },
    });
  }

  async remove(userId: number, carId: number) {
    const car = await this.prisma.car.findUnique({
      where: {
        id: carId,
      },
    });

    if (!car || car.userId !== userId)
      throw new ForbiddenException("Access to resources denied");

    await this.prisma.car.delete({
      where: {
        id: carId,
      },
    });
  }
}
