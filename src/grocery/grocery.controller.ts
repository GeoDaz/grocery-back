import {
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Controller,
} from '@nestjs/common';
import { GroceryService } from './grocery.service';
import { Grocery } from '@prisma/client';

@Controller('api/groceries')
export class GroceryController {
  constructor(private readonly groceryService: GroceryService) {}

  @Get()
  async getAllGroceries(): Promise<Grocery[]> {
    return this.groceryService.getAllGroceries();
  }

  @Get(':id')
  async getGroceryById(@Param('id') id: string): Promise<Grocery | null> {
    return this.groceryService.getGroceryById(id);
  }

  @Post()
  async createGrocery(@Body() data: Grocery): Promise<Grocery> {
    return this.groceryService.createGrocery(data);
  }

  @Put(':id')
  async updateGrocery(
    @Param('id') id: string,
    @Body() data: Grocery,
  ): Promise<Grocery | null> {
    return this.groceryService.updateGrocery(id, data);
  }

  @Delete(':id')
  async deleteGrocery(@Param('id') id: string): Promise<Grocery | null> {
    return this.groceryService.deleteGrocery(id);
  }
}
