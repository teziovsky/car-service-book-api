import { Injectable } from "@nestjs/common";
import { CreateRepairDto } from "./dto/create-repair.dto";
import { UpdateRepairDto } from "./dto/update-repair.dto";

@Injectable()
export class RepairService {
  create(carId: number, createRepairDto: CreateRepairDto) {
    return createRepairDto;
  }

  findAll(carId: number) {
    return `This action returns all repair in car #${carId}`;
  }

  findOne(carId: number, repairId: number) {
    return `This action returns a #${repairId} repair in car #${carId}`;
  }

  update(carId: number, repairId: number, updateRepairDto: UpdateRepairDto) {
    return `This action updates a #${repairId} repair in car #${carId}`;
  }

  remove(carId: number, repairId: number) {
    return `This action removes a #${repairId} repair in car #${carId}`;
  }
}
