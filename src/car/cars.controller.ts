import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { DeleteResult, UpdateResult } from "typeorm";
import { Car } from "./models/car.interface";
import { CarsService } from "./cars.service";

@Controller("cars")
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  findAll(): Observable<Car[]> {
    return this.carsService.findAllCars();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Observable<Car> {
    return this.carsService.findOneCar(id);
  }

  @Post()
  create(@Body() car: Car): Observable<Car> {
    return this.carsService.createCar(car);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() car: Car): Observable<UpdateResult> {
    return this.carsService.updateCar(id, car);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Observable<DeleteResult> {
    return this.carsService.deleteCar(id);
  }
}
