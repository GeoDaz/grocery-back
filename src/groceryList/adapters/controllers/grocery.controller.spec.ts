import { Test, TestingModule } from '@nestjs/testing';
import { GroceryController } from './grocery.controller';
import { GroceryModule } from '../modules/grocery.module';
import { GroceryRepository } from '../repositories/grocery.repository';

describe('GroceryController', () => {
  let groceryController: GroceryController;

  beforeEach(async () => {
    const grocery: TestingModule = await Test.createTestingModule({
      imports: [GroceryModule],
      controllers: [GroceryController],
      providers: [GroceryRepository],
    }).compile();

    groceryController = grocery.get<GroceryController>(GroceryController);
  });

  describe('getAll', () => {
    it('should return a void array', () => {
      expect(groceryController.getAll()).toBe([]);
    });
  });

  describe('getById', () => {
    it('should return null', () => {
      expect(groceryController.getById('1')).toBe(null);
    });
  });
});
