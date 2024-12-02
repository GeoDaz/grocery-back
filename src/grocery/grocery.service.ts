import { PrismaService } from '../prisma.service';
import { Grocery } from './grocery.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GroceryService {
  constructor(private prisma: PrismaService) {}

  async getAllGroceries(): Promise<Grocery[]> {
    return this.prisma.grocery.findMany();
  }

  async getGroceryById(id: string): Promise<Grocery | null> {
    return this.prisma.grocery.findUnique({ where: { id } });
  }

  async createGrocery(data: Grocery): Promise<Grocery> {
    return this.prisma.grocery.create({ data });
  }

  async updateGrocery(id: string, data: Grocery): Promise<Grocery | null> {
    return this.prisma.grocery.update({ where: { id }, data });
  }

  async deleteGrocery(id: string): Promise<Grocery | null> {
    return this.prisma.grocery.delete({ where: { id } });
  }
}
