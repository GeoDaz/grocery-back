import { Module } from '@nestjs/common';
import { GroceryListController } from '../controllers/groceryList.controller';
import { PrismaRepository } from '../../../prisma.repository';
import { GroceryListRepository } from '../repositories/groceryList.repository';

@Module({
  controllers: [GroceryListController],
  providers: [PrismaRepository, GroceryListRepository],
})
export class GroceryListModule {}
