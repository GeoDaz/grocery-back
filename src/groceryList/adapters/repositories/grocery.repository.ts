import { PrismaRepository } from '../../../prisma.repository';
import { Grocery } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GroceryRepository {
  constructor(private prisma: PrismaRepository) {}

  async getAll(): Promise<Grocery[]> {
    return this.prisma.grocery.findMany();
  }

  async getById(id: string): Promise<Grocery | null> {
    return this.prisma.grocery.findUnique({ where: { id } });
  }

  async create(data: Grocery): Promise<Grocery> {
    return this.prisma.grocery.create({ data });
  }

  async update(id: string, data: Grocery): Promise<Grocery | null> {
    return this.prisma.grocery.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Grocery | null> {
    return this.prisma.grocery.delete({ where: { id } });
  }
}
