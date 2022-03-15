import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaService as PrismaService2 } from './prisma2.service';
import { Account } from '@prisma/client';
import { Challenge } from '@internal/prisma/client';

@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prisma2: PrismaService2
  ) { }

  async getAccounts(): Promise<Account[]> {
    return this.prisma.account.findMany();
  }

  async getChallenges(): Promise<Challenge[]> {
    return this.prisma2.challenge.findMany()
  }

  async getAll(): Promise<any> {
    const account: Account[] = await this.prisma.account.findMany()
    return {
      "account": account,
      "challenge": await this.prisma2.challenge.findMany()
    }
  }
}
