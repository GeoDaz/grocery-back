import {
  Get,
  // Post,
  // Put,
  // Delete,
  // Body,
  Param,
  Controller,
} from '@nestjs/common';
import { GroceryRepository } from '../repositories/grocery.repository';
import { Grocery } from '@prisma/client';

@Controller('api/groceries')
export class GroceryController {
  constructor(private readonly repository: GroceryRepository) {}

  @Get()
  async getAll(): Promise<Grocery[]> {
    return this.repository.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Grocery | null> {
    return this.repository.getById(id);
  }

  // @Post()
  // async create(@Body() data: Grocery): Promise<Grocery> {
  //   return this.repository.create(data);
  // }

  // @Put(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() data: Grocery,
  // ): Promise<Grocery | null> {
  //   return this.repository.update(id, data);
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: string): Promise<Grocery | null> {
  //   return this.repository.delete(id);
  // }
}
