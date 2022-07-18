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
import { CreateCarDto, UpdateCarDto } from "./dto";

@UseGuards(JwtGuard)
@ApiTags("cars")
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

  @Get(":id")
  findOne(
    @GetUser("id") userId: number,
    @Param("id", ParseIntPipe) carId: number,
  ) {
    return this.carService.findOne(userId, carId);
  }

  @Put(":id")
  update(
    @GetUser("id") userId: number,
    @Param("id", ParseIntPipe) carId: number,
    @Body() editCarDto: UpdateCarDto,
  ) {
    return this.carService.update(userId, carId, editCarDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  remove(
    @GetUser("id") userId: number,
    @Param("id", ParseIntPipe) carId: number,
  ) {
    return this.carService.remove(userId, carId);
  }
}
