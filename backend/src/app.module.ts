/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://pavi:hello@cluster0.tp3sdhm.mongodb.net/Auth',
    ), 
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
