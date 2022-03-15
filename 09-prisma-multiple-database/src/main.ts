import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ref: https://towardsdev.com/multiple-database-connections-in-prisma-b252782b2646
  await app.listen(8000);
}
bootstrap();
