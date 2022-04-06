"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../ts/enums");
// 2. Create a Schema corresponding to the document interface.
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    thumbnail: [{ type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Media' }],
    products: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Product' }],
    status: {
        type: String,
        required: true,
        enum: enums_1.StoreStatus,
        default: enums_1.StoreStatus.INACTIVE,
    },
    owner: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    document_verification: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Media',
    },
}, { timestamps: true });
// 3. Create a Model.
exports.Store = (0, mongoose_1.model)('Store', schema);
//# sourceMappingURL=Store.js.map