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
import { CarService } from "./car.service";
import { CreateCarDto, UpdateCarDto } from "./dto";

@ApiTags("cars")
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller("cars")
export class CarController {
  constructor(private carService: CarService) {}

  @Post()
  create(@GetUser("id") userId: number, @Body() createCarDto: CreateCarDto) {
    return this.carService.create(userId, createCarDto);
  }

  @Get()
  findAll(@GetUser("id") userId: number) {
    return this.carService.findAll(userId);
  }

  @Get(":car_id")
  findOne(@GetUser("id") userId: number, @Param("car_id", ParseIntPipe) carId: number) {
    return this.carService.findOne(userId, carId);
  }

  @Put(":car_id")
  update(
    @GetUser("id") userId: number,
    @Param("car_id", ParseIntPipe) carId: number,
    @Body() updateCarDto: UpdateCarDto
  ) {
    return this.carService.update(userId, carId, updateCarDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":car_id")
  remove(@GetUser("id") userId: number, @Param("car_id", ParseIntPipe) carId: number) {
    return this.carService.remove(userId, carId);
  }
}
