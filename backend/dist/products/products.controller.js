"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
let ProductsController = exports.ProductsController = class ProductsController {
    constructor(ProductsService) {
        this.ProductsService = ProductsService;
    }
    async addProduct(prodTitle, prodDesc, prodUser, prodImage) {
        const generateId = await this.ProductsService.insertProduct(prodUser, prodTitle, prodDesc, prodImage);
        return { data: generateId };
    }
    async getAllProducts(page) {
        const products = await this.ProductsService.getProducts(page);
        return products;
    }
    async getSingleProducts(id) {
        const products = await this.ProductsService.getSingleProducts(id);
        return products;
    }
    async deleteProduct(id) {
        const products = await this.ProductsService.deleteProduct(id);
        return products;
    }
};
__decorate([
    (0, common_2.Post)("add-product"),
    __param(0, (0, common_3.Body)("title")),
    __param(1, (0, common_3.Body)("description")),
    __param(2, (0, common_3.Body)("user")),
    __param(3, (0, common_3.Body)("image")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "addProduct", null);
__decorate([
    (0, common_2.Post)("get-products/:page"),
    __param(0, (0, common_1.Param)("page")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllProducts", null);
__decorate([
    (0, common_2.Post)("get-single-product/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getSingleProducts", null);
__decorate([
    (0, common_2.Post)("delete-product/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)("products"),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map