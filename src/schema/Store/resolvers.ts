import type { Resolvers } from '@generated/types';
import { Store, IStore, IUser, IProduct } from '@models/index';

export const resolvers: Resolvers = {
  Query: {
    stores: async (parent, args) => {
      const status = args.status;
      const sort = args.sort || 'ascending';

      const filter = {
        ...(status && { status }),
      };

      const stores = await Store.find(filter).sort({ createdAt: sort });

      return stores;
    },
    store: async (_, { id }) => {
      const store: IStore | null = await Store.findById(id);
      return store;
    },
  },
  Mutation: {
    createStore: async (_, { name, thumbnail }, { user }) => {
      const store: IStore = await Store.create({
        name,
        thumbnail,
        owner: user.id,
      });
      return store;
    },
    deleteStore: async (_, { id }) => {
      const store: IStore | null = await Store.findByIdAndDelete(id);
      return store;
    },
  },
  Store: {
    owner: async ({ owner: id }, _, { dataloader }) => {
      const user: IUser = await dataloader.user.load(id);
      return user;
    },
    products: async ({ products: ids }, _, { dataloader }) => {
      const products: IProduct[] = await dataloader.product.loadMany(ids);
      return products;
    },
  },
};
