import * as mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    image: string;
    description?: string;
}, mongoose.Document<unknown, {}, {
    title: string;
    image: string;
    description?: string;
}> & {
    title: string;
    image: string;
    description?: string;
} & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Product {
    id: string;
    title: string;
    description: string;
    image: string;
}
