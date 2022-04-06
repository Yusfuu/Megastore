"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        orders: async (parent, args) => {
            const orders = await index_1.Order.findOne({
                user: args.user,
            }).populate('cart');
            return orders;
        },
    },
    Mutation: {
        createOrder: async (_, { input }) => {
            const order = await index_1.Order.create(input);
            return order;
        },
    },
};
//# sourceMappingURL=resolvers.js.map