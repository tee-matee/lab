import { Controller, Get, Req, Res } from '@nestjs/common'
import { AppService } from './app.service'
import { Request, Response } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('example')
  getExample(
    @Req() request: Request,
    @Res() response: Response) {
    return this.appService.example(request, response)
  }
}
