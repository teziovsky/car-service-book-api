import { IsOptional, IsString } from "class-validator";

export class EditCarDto {
  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  model?: string;

  @IsString()
  @IsOptional()
  production_year?: string;
}
