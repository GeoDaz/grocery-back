import { Module } from '@nestjs/common';
import { GroceryController } from './grocery.controller';
import { GroceryService } from './grocery.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [GroceryController],
  providers: [PrismaService, GroceryService],
})
export class GroceryModule {}
