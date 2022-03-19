import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Account } from '@prisma/client';
// import { Challenge } from '@internal/prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get('account')
  // getAccounts(): Promise<Account[]> {
  //   return this.appService.getAccounts()
  // }

  // @Get('challenge')
  // getChallenges(): Promise<Challenge[]> {
  //   return this.appService.getChallenges()
  // }

  // @Get('all')
  // getAll(): Promise<any> {
  //   return this.appService.getAll()
  // }

  @Get('init-serverkey')
  setInitServerKey(): Promise<any> {
    return this.appService.setInitServerKey()
  }
}
