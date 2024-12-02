import { Module } from '@nestjs/common';
import { GroceryModule } from './grocery/grocery.module';
import { GroceryController } from './grocery/grocery.controller';
import { GroceryService } from './grocery/grocery.service';

@Module({
  imports: [GroceryModule],
  controllers: [GroceryController],
  providers: [GroceryService],
})
export class AppModule {}
