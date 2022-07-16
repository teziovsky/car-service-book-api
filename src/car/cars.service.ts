import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

import { CarEntity } from "./models/car.entity";
import { Car } from "./models/car.interface";

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(CarEntity)
    private readonly carsRepository: Repository<CarEntity>,
  ) {}

  findAllCars(): Observable<Car[]> {
    return from(this.carsRepository.find());
  }

  findOneCar(id: number): Observable<Car> {
    return from(
      this.carsRepository.findOne({
        where: {
          id: id,
        },
      }),
    );
  }

  createCar(car: Car): Observable<Car> {
    return from(this.carsRepository.save(car));
  }

  updateCar(id: number, car: Car): Observable<UpdateResult> {
    return from(this.carsRepository.update(id, car));
  }

  deleteCar(id: number): Observable<DeleteResult> {
    return from(this.carsRepository.delete(id));
  }
}
