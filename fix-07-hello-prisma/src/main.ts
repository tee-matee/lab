import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';
// import { PrismaService } from './services/prisma/prisma.service';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app)
  app.use(bodyParser.json({limit: '50mb'}))
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
  app.enableCors()
  await app.listen(8000);
}
bootstrap();
