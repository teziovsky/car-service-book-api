import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarEntity } from "./models/car.entity";
import { CarsService } from "./cars.service";
import { CarsController } from "./cars.controller";

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity])],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
