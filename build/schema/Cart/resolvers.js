"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        carts: async (_, __, {}) => {
            const carts = await index_1.Cart.find();
            return carts;
        },
        cart: async (_, args) => {
            const cart = await index_1.Cart.findOne({ user: args.id });
            return cart;
        },
    },
    Mutation: {
        createCart: async (_, { input }) => {
            const cart = await index_1.Cart.create(input);
            return cart;
        },
    },
    Cart: {
        products: async (cart) => {
            const products = await index_1.Product.find({
                _id: { $in: cart.products },
            });
            return products;
        },
    },
};
//# sourceMappingURL=resolvers.js.map