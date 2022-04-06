import type { Resolvers } from "@generated/types";
import { ICart, Cart, Product, IProduct } from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    carts: async (_, __, {}) => {
      const carts: Array<ICart> = await Cart.find();
      return carts;
    },
    cart: async (_, args) => {
      const cart = await Cart.findOne({ user: args.id });
      return cart;
    },
  },
  Mutation: {
    createCart: async (_, { input }) => {
      const cart = await Cart.create(input);
      return cart;
    },
  },
  Cart: {
    products: async (cart) => {
      const products = await Product.find({
        _id: { $in: cart.products },
      });
      return products;
    },
  },
};
