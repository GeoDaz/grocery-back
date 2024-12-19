import { PrismaRepository } from '../../../prisma.repository';
import { GroceryList } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GroceryListRepository {
  constructor(private prisma: PrismaRepository) {}

  async getAll(): Promise<GroceryList[]> {
    return this.prisma.groceryList.findMany();
  }

  async getById(id: string): Promise<GroceryList | null> {
    return this.prisma.groceryList.findUnique({ where: { id } });
  }

  async create(data: GroceryList): Promise<GroceryList> {
    return this.prisma.groceryList.create({ data });
  }

  async update(
    id: string,
    data: GroceryList,
  ): Promise<GroceryList | null> {
    return this.prisma.groceryList.update({ where: { id }, data });
  }

  async delete(id: string): Promise<GroceryList | null> {
    return this.prisma.groceryList.delete({ where: { id } });
  }
}
