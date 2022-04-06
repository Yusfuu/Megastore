import type { Resolvers } from '@generated/types';
import { multiFileUpload } from '@lib/upload';
import { Store, IStore, IUser, IProduct, User } from '@models/index';
import { IFile } from '@ts/types';

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
      // update user role if user create store
      if (user.role === 'USER') {
        const updatedUser: IUser | null = await User.findOneAndUpdate(
          { _id: user.id },
          { role: 'SELLER' },
          { new: true }
        );
      }

      const images = await multiFileUpload(thumbnail as IFile[]);

      const store: IStore = await Store.create({
        name,
        thumbnail: images,
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
    thumbnail: async ({ thumbnail: ids }, _, { dataloader }) => {
      const images = await dataloader.media.loadMany(ids);
      return images;
    },
  },
};
