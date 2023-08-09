/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { RootModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.enableCors();

  // Increase the limit to handle larger payloads
  app.use(bodyParser.json({ limit: '50mb' })); // Adjust the limit as needed
  await app.listen(3000);
}
bootstrap();
