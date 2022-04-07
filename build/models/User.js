"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const enums_1 = require("@ts/enums");
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const schema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        required: true,
        enum: enums_1.Role,
        default: enums_1.Role.USER,
    },
    accountStatus: {
        type: String,
        required: true,
        enum: enums_1.AccountStatus,
        default: enums_1.AccountStatus.ACTIVE,
    },
    isSeller: {
        type: Boolean,
        required: true,
        default: false,
    },
    typeAccount: {
        type: String,
        required: false,
        enum: enums_1.TypeAccount,
        default: enums_1.TypeAccount.BASIC,
    },
    store: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Store',
    },
}, { timestamps: true });
// 3. Create a Model.
exports.User = (0, mongoose_1.model)('User', schema);
//# sourceMappingURL=User.js.map