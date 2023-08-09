/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly ProductsService;
    constructor(ProductsService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodImage: string): Promise<{
        data: {
            result: import("mongoose").Document<unknown, {}, import("./product.model").Product> & import("./product.model").Product & {
                _id: import("mongoose").Types.ObjectId;
            };
            success: boolean;
            text: string;
        };
    }>;
    getAllProducts(): Promise<import("./product.model").Product[]>;
    getSingleProducts(id: string): Promise<{
        text: string;
        result?: undefined;
    } | {
        result: import("mongoose").Document<unknown, {}, import("./product.model").Product> & import("./product.model").Product & {
            _id: import("mongoose").Types.ObjectId;
        };
        text: string;
    }>;
}
