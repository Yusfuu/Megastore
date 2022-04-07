"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../ts/enums");
// 2. Create a Schema corresponding to the document interface.
const schema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    cart: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Cart', autopopulate: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: Number, required: true },
    address: { type: String, required: true },
    delivery: {
        type: String,
        required: true,
        enum: enums_1.DeliveryType,
        default: enums_1.DeliveryType.STANDARD,
    },
    status: {
        type: String,
        required: true,
        enum: enums_1.DeliveryStatus,
        default: enums_1.DeliveryStatus.PENDING,
    },
    traking: { type: String },
    estimatedTime: Date,
}, { timestamps: true });
// 3. Create a Model.
exports.Order = (0, mongoose_1.model)('Order', schema);
//# sourceMappingURL=Order.js.map