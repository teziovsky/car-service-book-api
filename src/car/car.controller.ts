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
import { GetUser } from "../auth/decorator";
import { JwtGuard } from "../auth/guard";
import { CarService } from "./car.service";
import { EditCarDto, CreateCarDto } from "./dto";

@UseGuards(JwtGuard)
@ApiTags("cars")
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
  createCar(@GetUser("id") userId: number, @Body() createCarDto: CreateCarDto) {
    return this.carService.createCar(userId, createCarDto);
  }

  @Put(":id")
  editCarById(
    @GetUser("id") userId: number,
    @Param("id", ParseIntPipe) bookmarkId: number,
    @Body() editCarDto: EditCarDto,
  ) {
    return this.carService.editCarById(userId, bookmarkId, editCarDto);
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
