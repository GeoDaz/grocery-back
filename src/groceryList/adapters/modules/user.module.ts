import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { UserRepository } from '../repositories/user.repository';
import { PrismaRepository } from '../../../prisma.repository';

@Module({
  controllers: [UserController],
  providers: [PrismaRepository, UserRepository],
})
export class UserModule {}
