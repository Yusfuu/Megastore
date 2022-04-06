"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const schema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
    },
    products: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "product",
        },
    ],
    amount: {
        type: mongoose_1.Schema.Types.Number,
        default: 0,
    },
}, { timestamps: true });
// 3. Create a Model.
exports.Cart = (0, mongoose_1.model)("Cart", schema);
//# sourceMappingURL=Cart.js.map