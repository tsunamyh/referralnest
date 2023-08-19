import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  // const configService = app.get(ConfigService)
  // const PORT = configService.get<number>('PORT');
  // console.log(PORT);
  console.log(process.env.PORT);
  
  
  await app.listen(3000);
}
bootstrap();
