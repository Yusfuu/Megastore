"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataloader = exports.createLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const index_1 = require("../models/index");
// create a dataloader for the given model
const createLoader = (Model) => {
    // init the dataloader
    const loader = new dataloader_1.default(async (keys) => {
        const data = await Model.find({ _id: { $in: keys } });
        return keys.map((key) => data.find(({ id }) => id == key));
    });
    // return the dataloader loader function
    return {
        load: async (id) => loader.load(id),
        loadMany: async (ids) => loader.loadMany(ids),
    };
};
exports.createLoader = createLoader;
exports.dataloader = {
    store: (0, exports.createLoader)(index_1.Store),
    brand: (0, exports.createLoader)(index_1.Brand),
    category: (0, exports.createLoader)(index_1.Category),
    product: (0, exports.createLoader)(index_1.Product),
    user: (0, exports.createLoader)(index_1.User),
};
//# sourceMappingURL=loader.js.map