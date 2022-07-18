import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCarDto {
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
  productionYear?: string;
}
