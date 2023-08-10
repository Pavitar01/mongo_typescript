import * as mongoose from "mongoose";
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    image: string;
    description?: string;
    user?: any;
}, mongoose.Document<unknown, {}, {
    title: string;
    image: string;
    description?: string;
    user?: any;
}> & {
    title: string;
    image: string;
    description?: string;
    user?: any;
} & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Product {
    user: Object;
    id: string;
    title: string;
    description: string;
    image: string;
}
