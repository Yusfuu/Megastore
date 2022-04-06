"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const MediaSchema = new mongoose_1.Schema({
    src: { type: String, required: true },
    alt: { type: String, required: true },
    type: { type: String, required: true },
}, { timestamps: true });
exports.Media = (0, mongoose_1.model)('Media', MediaSchema);
//# sourceMappingURL=Media.js.map