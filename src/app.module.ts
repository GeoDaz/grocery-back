import { Module } from '@nestjs/common';
import { GroceryModule } from './groceryList/adapters/modules/grocery.module';
import { GroceryController } from './groceryList/adapters/controllers/grocery.controller';
import { GroceryRepository } from './groceryList/adapters/repositories/grocery.repository';

@Module({
  imports: [GroceryModule],
  controllers: [GroceryController],
  providers: [GroceryRepository],
})
export class AppModule {}
