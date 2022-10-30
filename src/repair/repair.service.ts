import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRepairDto, UpdateRepairDto } from "./dto";

@Injectable()
export class RepairService {
  constructor(private prisma: PrismaService) {}

  async create(carId: number, createRepairDto: CreateRepairDto) {
    return await this.prisma.repair.create({
      data: {
        carId,
        ...createRepairDto,
      },
    });
  }

  findAll(userId: number, carId: number) {
    return this.prisma.repair.findMany({
      where: {
        carId,
        AND: {
          car: {
            userId,
          },
        },
      },
    });
  }

  findOne(userId: number, carId: number, repairId: number) {
    return this.prisma.repair.findFirst({
      where: {
        id: repairId,
        carId,
        AND: {
          car: {
            userId,
          },
        },
      },
    });
  }

  async update(userId: number, carId: number, repairId: number, updateRepairDto: UpdateRepairDto) {
    const repair = await this.prisma.repair.findUnique({
      where: {
        id: repairId,
      },
      include: {
        car: true,
      },
    });

    if (!repair || repair.carId !== carId || repair.car.userId !== userId)
      throw new ForbiddenException("Access to resources denied");

    return this.prisma.repair.update({
      where: {
        id: repairId,
      },
      data: {
        ...updateRepairDto,
      },
    });
  }

  async remove(userId: number, carId: number, repairId: number) {
    const repair = await this.prisma.repair.findUnique({
      where: {
        id: repairId,
      },
      include: {
        car: true,
      },
    });

    if (!repair || repair.carId !== carId || repair.car.userId !== userId)
      throw new ForbiddenException("Access to resources denied");

    await this.prisma.repair.delete({
      where: {
        id: repairId,
      },
    });
  }
}
