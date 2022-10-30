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
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { GetUser } from "../auth/decorator";
import { JwtGuard } from "../auth/guard";
import { RepairService } from "./repair.service";
import { CreateRepairDto, UpdateRepairDto } from "./dto";

@ApiTags("repairs")
@ApiBearerAuth()
@UseGuards(JwtGuard)
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
  findAll(
    @GetUser("id") userId: number,
    @Param("car_id", ParseIntPipe) carId: number,
  ) {
    return this.repairService.findAll(userId, carId);
  }

  @Get(":repair_id")
  findOne(
    @GetUser("id") userId: number,
    @Param("car_id", ParseIntPipe) carId: number,
    @Param("repair_id", ParseIntPipe) repairId: number,
  ) {
    return this.repairService.findOne(userId, carId, repairId);
  }

  @Put(":repair_id")
  update(
    @GetUser("id") userId: number,
    @Param("car_id", ParseIntPipe) carId: number,
    @Param("repair_id", ParseIntPipe) repairId: number,
    @Body() updateRepairDto: UpdateRepairDto,
  ) {
    return this.repairService.update(userId, carId, repairId, updateRepairDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":repair_id")
  remove(
    @GetUser("id") userId: number,
    @Param("car_id", ParseIntPipe) carId: number,
    @Param("repair_id", ParseIntPipe) repairId: number,
  ) {
    return this.repairService.remove(userId, carId, repairId);
  }
}
