import {
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Controller,
} from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '@prisma/client';

@Controller('api/groceries')
export class UserController {
  constructor(private readonly repository: UserRepository) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.repository.getAll();
  }

  // TODO auth
  @Get(':id')
  async getById(@Param('id') id: string): Promise<User | null> {
    return this.repository.getById(id);
  }

  @Post()
  async create(@Body() data: User): Promise<User> {
    return this.repository.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: User,
  ): Promise<User | null> {
    return this.repository.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User | null> {
    return this.repository.delete(id);
  }
}
