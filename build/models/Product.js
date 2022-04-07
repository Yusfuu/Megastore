"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    store: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Store' },
    category: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Category', required: true }],
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true, default: 0 },
    stock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    thumbnails: [{ type: String, required: true }],
});
// 3. Create a Model.
exports.Product = (0, mongoose_1.model)('Product', schema);
//# sourceMappingURL=Product.js.map