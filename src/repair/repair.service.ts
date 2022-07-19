import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRepairDto } from "./dto/create-repair.dto";
import { UpdateRepairDto } from "./dto/update-repair.dto";

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

  findAll(carId: number) {
    return this.prisma.repair.findMany({
      where: {
        carId,
      },
    });
  }

  findOne(carId: number, repairId: number) {
    return this.prisma.repair.findFirst({
      where: {
        id: repairId,
        carId,
      },
    });
  }

  async update(
    carId: number,
    repairId: number,
    updateRepairDto: UpdateRepairDto,
  ) {
    const repair = await this.prisma.repair.findUnique({
      where: {
        id: repairId,
      },
    });

    if (!repair || repair.carId !== carId)
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

  async remove(carId: number, repairId: number) {
    const repair = await this.prisma.repair.findUnique({
      where: {
        id: repairId,
      },
    });

    if (!repair || repair.carId !== carId)
      throw new ForbiddenException("Access to resources denied");

    await this.prisma.repair.delete({
      where: {
        id: repairId,
      },
    });
  }
}
