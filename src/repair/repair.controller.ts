import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtGuard } from "../auth/guard";
import { CreateRepairDto } from "./dto/create-repair.dto";
import { UpdateRepairDto } from "./dto/update-repair.dto";
import { RepairService } from "./repair.service";

@UseGuards(JwtGuard)
@ApiTags("repairs")
@Controller("/cars/:car_id/repairs")
export class RepairController {
  constructor(private readonly repairService: RepairService) {}

  @Post()
  create(
    @Param("car_id", ParseIntPipe) carId: number,
    @Body() createRepairDto: CreateRepairDto,
  ) {
    return this.repairService.create(carId, createRepairDto);
  }

  @Get()
  findAll(@Param("car_id", ParseIntPipe) carId: number) {
    return this.repairService.findAll(carId);
  }

  @Get(":repair_id")
  findOne(
    @Param("car_id", ParseIntPipe) carId: number,
    @Param("repair_id", ParseIntPipe) repairId: number,
  ) {
    return this.repairService.findOne(carId, repairId);
  }

  @Put(":repair_id")
  update(
    @Param("car_id", ParseIntPipe) carId: number,
    @Param("repair_id", ParseIntPipe) repairId: number,
    @Body() updateRepairDto: UpdateRepairDto,
  ) {
    return this.repairService.update(carId, repairId, updateRepairDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":repair_id")
  remove(
    @Param("car_id", ParseIntPipe) carId: number,
    @Param("repair_id", ParseIntPipe) repairId: number,
  ) {
    return this.repairService.remove(carId, repairId);
  }
}
