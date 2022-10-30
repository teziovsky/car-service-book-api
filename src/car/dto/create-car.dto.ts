import { ApiProperty } from "@nestjs/swagger";
import { CarType, EngineType, GearboxType } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCarDto {
  @ApiProperty({
    required: false,
  })
  @IsEnum(CarType)
  @IsOptional()
  type?: CarType;

  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  generation?: string;

  @ApiProperty({
    required: false,
  })
  @IsNumber()
  @IsOptional()
  productionYear?: number;

  @ApiProperty({
    required: false,
  })
  @IsEnum(EngineType)
  @IsOptional()
  engineType?: EngineType;

  @ApiProperty({
    required: false,
  })
  @IsNumber()
  @IsOptional()
  engineCapacity?: number;

  @ApiProperty({
    required: false,
  })
  @IsNumber()
  @IsOptional()
  enginePower?: number;

  @ApiProperty({
    required: false,
  })
  @IsEnum(GearboxType)
  @IsOptional()
  gearboxType?: GearboxType;
}
