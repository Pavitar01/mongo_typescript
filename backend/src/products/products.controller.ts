/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}
  @Post('addproducts')
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    // @Body('price') prodPrice: number,
    @Body('image') prodImage: string,
  ) {
    const generateId = await this.ProductsService.insertProduct(
      prodTitle,
      prodDesc,
      // prodPrice,
      prodImage,
    );
    return { data: generateId };
  }

  @Get('getproduct')
  async getAllProducts() {
    const products = await this.ProductsService.getProducts();
    return products;
  }
  @Post('getsingleproduct/:id')
  async getSingleProducts(@Param('id') id: string) {
    const products = await this.ProductsService.getSingleProducts(id);
    return products;
  }
}
