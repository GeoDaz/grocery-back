import {
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Controller,
} from '@nestjs/common';
import { GroceryListRepository } from '../repositories/groceryList.repository';
import { GroceryList } from '@prisma/client';

@Controller('api/groceryLists')
export class GroceryListController {
  constructor(private readonly repository: GroceryListRepository) {}

  @Get()
  async getAll(): Promise<GroceryList[]> {
    return this.repository.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<GroceryList | null> {
    return this.repository.getById(id);
  }

  @Post()
  async create(@Body() data: GroceryList): Promise<GroceryList> {
    return this.repository.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: GroceryList): Promise<GroceryList | null> {
    return this.repository.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<GroceryList | null> {
    return this.repository.delete(id);
  }
}
