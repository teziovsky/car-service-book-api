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
import { GetUser } from "../auth/decorator";
import { JwtGuard } from "../auth/guard";
import { CarService } from "./car.service";
import { EditCarDto } from "./dto";
import { CreateCarDto } from "./dto/create-car.dto";

@UseGuards(JwtGuard)
@Controller("cars")
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  getCars(@GetUser("id") userId: number) {
    return this.carService.getCars(userId);
  }

  @Get(":id")
  getCarById(
    @GetUser("id") userId: number,
    @Param("id", ParseIntPipe) bookmarkId: number,
  ) {
    return this.carService.getCarById(userId, bookmarkId);
  }

  @Post()
  createCar(@GetUser("id") userId: number, @Body() dto: CreateCarDto) {
    return this.carService.createCar(userId, dto);
  }

  @Put(":id")
  editCarById(
    @GetUser("id") userId: number,
    @Param("id", ParseIntPipe) bookmarkId: number,
    @Body() dto: EditCarDto,
  ) {
    return this.carService.editCarById(userId, bookmarkId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  deleteCarById(
    @GetUser("id") userId: number,
    @Param("id", ParseIntPipe) bookmarkId: number,
  ) {
    return this.carService.deleteCarById(userId, bookmarkId);
  }
}
