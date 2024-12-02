import { Test, TestingModule } from '@nestjs/testing';
import { GroceryController } from './grocery.controller';
import { GroceryModule } from './grocery.module';
import { GroceryService } from './grocery.service';

describe('GroceryController', () => {
  let groceryController: GroceryController;

  beforeEach(async () => {
    const grocery: TestingModule = await Test.createTestingModule({
      imports: [GroceryModule],
      controllers: [GroceryController],
      providers: [GroceryService],
    }).compile();

    groceryController = grocery.get<GroceryController>(GroceryController);
  });

  describe('getAllGroceries', () => {
    it('should return a void array', () => {
      expect(groceryController.getAllGroceries()).toBe([]);
    });
  });
});
