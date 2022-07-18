import { Body, Controller, Get, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { User } from "@prisma/client";
import { GetUser } from "../auth/decorator";
import { JwtGuard } from "../auth/guard";
import { EditUserDto } from "./dto";
import { UserService } from "./user.service";

@UseGuards(JwtGuard)
@ApiTags("user")
@ApiBearerAuth()
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findOne(@GetUser() user: User) {
    return user;
  }

  @Put()
  update(@GetUser("id") userId: number, @Body() editUserDto: EditUserDto) {
    return this.userService.update(userId, editUserDto);
  }
}
