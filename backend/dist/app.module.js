"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootModule = void 0;
const common_1 = require("@nestjs/common");
const products_module_1 = require("./products/products.module");
const mongoose_1 = require("@nestjs/mongoose");
let RootModule = exports.RootModule = class RootModule {
};
exports.RootModule = RootModule = __decorate([
    (0, common_1.Module)({
        imports: [
            products_module_1.ProductsModule,
            mongoose_1.MongooseModule.forRoot('mongodb+srv://pavi:hello@cluster0.tp3sdhm.mongodb.net/Auth'),
        ],
        controllers: [],
        providers: [],
    })
], RootModule);
//# sourceMappingURL=app.module.js.map