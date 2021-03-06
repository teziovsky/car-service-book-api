import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateUserDto } from "./dto";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async update(userId: number, editUserDto: UpdateUserDto) {
    const { hash, ...user } = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...editUserDto,
      },
    });

    return user;
  }
}
