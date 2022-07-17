import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class AuthDto {
  @ApiProperty({
    required: true,
    default: "mail@example.com",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    required: true,
    default: "password12345",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  password: string;
}
