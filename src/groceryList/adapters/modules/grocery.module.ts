import { Module } from '@nestjs/common';
import { GroceryController } from '../controllers/grocery.controller';
import { GroceryRepository } from '../repositories/grocery.repository';
import { PrismaRepository } from '../../../prisma.repository';

@Module({
  controllers: [GroceryController],
  providers: [PrismaRepository, GroceryRepository],
})
export class GroceryModule {}
