import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class EditCarDto {
  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  brand?: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  model?: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  production_year?: string;
}
