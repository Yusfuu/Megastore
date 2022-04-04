"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    thumbnail: { type: String, required: true },
});
// 3. Create a Model.
exports.Brand = (0, mongoose_1.model)('Brand', schema);
//# sourceMappingURL=Brand.js.map