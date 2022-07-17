import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsOptional()
  production_year?: string;
}
