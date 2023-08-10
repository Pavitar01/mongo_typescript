/* eslint-disable prettier/prettier */
import * as mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
export const ProductSchema = new mongoose.Schema({
  //this is js type
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  // price: {
  //   type: Number,
  //   required: true,
  // },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
  },
});
//interface this is tyoescript type
export interface Product {
  user: Object;
  id: string;
  title: string;
  description: string;
  // price: number;
  image: string;
}
