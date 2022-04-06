"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Super = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });
// 3. Create a Model.
exports.Super = (0, mongoose_1.model)("Super", schema);
//# sourceMappingURL=Super.js.map