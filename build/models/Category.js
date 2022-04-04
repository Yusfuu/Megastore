"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
// Materialized Paths
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    path: { type: String, default: null },
    assets: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Asset' }],
    products: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Product' }],
});
// 3. Create a Model.
exports.Category = (0, mongoose_1.model)('Category', schema);
//# sourceMappingURL=Category.js.map