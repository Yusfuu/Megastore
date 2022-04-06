import type { Resolvers } from '@generated/types';
import { IProduct, Product, ICart, IOrder, Order } from '@models/index';

export const resolvers: Resolvers = {
  Query: {
    orders: async (parent, args) => {
      const orders: Array<IOrder> = await Order.findOne({
        user: args.user,
      }).populate('cart');
      return orders;
    },
  },
  Mutation: {
    createOrder: async (_, { input }) => {
      const order: IOrder = await Order.create(input);
      return order;
    },
  },
};
