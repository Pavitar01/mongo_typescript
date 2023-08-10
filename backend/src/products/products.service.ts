/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(
    @InjectModel("Product") private readonly ProductsModel: Model<Product>
  ) {}
  async insertProduct(
    user: object,

    title: string,
    description: string,
    // price: number,
    image: string
  ) {
    // const productId = Math.random().toString();
    const newProduct = new this.ProductsModel({
      user,

      title,
      description,
      // price,
      image: `data:image/jpeg;base64,${image}`,
    });
    const result = await newProduct.save();
    return {
      result,
      success: true,
      text: "Added SuccessFully",
    };
  }
  async getProducts(pageNo: number) {
    //exec is used when there is promise
    const resPerPage = 5;
    const currPage = pageNo || 1;
    const skip = resPerPage * (currPage - 1);

    const result = await this.ProductsModel.find().skip(skip).limit(resPerPage);
    return result;
  }
  async getSingleProducts(prodId: string) {
    //exec is used when there is promise
    if (!prodId) {
      return {
        text: "Not found",
      };
    }
    const result = await this.ProductsModel.findById(prodId).exec();
    return {
      result,
      text: "Not found",
    };
  }
  async deleteProduct(prodId: string) {
    //exec is used when there is promise
    if (!prodId) {
      return {
        text: "Not found",
      };
    }
    const result = await this.ProductsModel.findByIdAndDelete(prodId).exec();
    return {
      result,
      text: "Deleted !",
    };
  }
}
