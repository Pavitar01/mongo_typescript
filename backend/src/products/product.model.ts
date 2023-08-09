/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
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
});

//interface this is tyoescript type
export interface Product {
  id: string;
  title: string;
  description: string;
  // price: number;
  image: string;
}
