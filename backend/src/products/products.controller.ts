/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Post } from "@nestjs/common";
import { Body } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { Product } from "./product.model";

// const index = (req: Request, res: Response, next: NextFunction) => {};

@Controller("products")
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}
  @Post("add-product")
  async addProduct(
    @Body("title") prodTitle: string,
    @Body("description") prodDesc: string,
    @Body("user") prodUser: any,
    // @Body('price') prodPrice: number,
    @Body("image") prodImage: string
  ) {
    const generateId = await this.ProductsService.insertProduct(
      prodUser,
      prodTitle,
      prodDesc,
      // prodPrice,
      prodImage
    );
    return { data: generateId };
  }

  @Post("get-products/:page")
  async getAllProducts(@Param("page") page: number) {
    const products = await this.ProductsService.getProducts(page);
    return products ;
  }
  @Post("get-single-product/:id")
  async getSingleProducts(@Param("id") id: string) {
    const products = await this.ProductsService.getSingleProducts(id);
    return products;
  }
  @Post("delete-product/:id")
  async deleteProduct(@Param("id") id: string) {
    const products = await this.ProductsService.deleteProduct(id);
    return products;
  }
}
