import { PrismaRepository } from '../../../prisma.repository';
import { User } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaRepository) {}

  async getAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(data: User): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async update(id: string, data: User): Promise<User | null> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<User | null> {
    return this.prisma.user.delete({ where: { id } });
  }
}
