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

  @Get(":id")
  findOne(
    @Param("car_id", ParseIntPipe) carId: number,
    @Param("id", ParseIntPipe) repairId: number,
  ) {
    return this.repairService.findOne(carId, repairId);
  }

  @Put(":id")
  update(
    @Param("car_id", ParseIntPipe) carId: number,
    @Param("id", ParseIntPipe) repairId: number,
    @Body() updateRepairDto: UpdateRepairDto,
  ) {
    return this.repairService.update(carId, repairId, updateRepairDto);
  }

  // @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  remove(
    @Param("car_id", ParseIntPipe) carId: number,
    @Param("id", ParseIntPipe) repairId: number,
  ) {
    return this.repairService.remove(carId, repairId);
  }
}
