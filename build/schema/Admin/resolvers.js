"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const Store_1 = require("@models/Store");
// Provide resolver functions for your schema fields
exports.resolvers = {
    Mutation: {
        updateStoreStatus: async (_, { id, status }) => {
            const store = await Store_1.Store.findByIdAndUpdate(id, { status });
            return store;
        },
    },
};
//# sourceMappingURL=resolvers.js.map