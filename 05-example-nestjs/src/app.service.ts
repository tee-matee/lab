import { Injectable, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  example = async (request: Request, response: Response) => {
    console.log('request', request)
    response.status(HttpStatus.OK).send("")
  }
}
