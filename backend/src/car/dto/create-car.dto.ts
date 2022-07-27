import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCarDto {
  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  type?: string;

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
  @IsString()
  @IsOptional()
  engineType?: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  engineCapacity?: string;

  @ApiProperty({
    required: false,
  })
  @IsNumber()
  @IsOptional()
  enginePower?: number;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  gearboxType?: string;
}
