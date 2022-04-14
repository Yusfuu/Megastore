import type { Resolvers } from '@generated/types';
import { multiFileUpload } from '@lib/upload';
import { Store, IStore, IUser, IProduct, User } from '@models/index';
import { IFile } from '@ts/types';

export const resolvers: Resolvers = {
  Query: {
    stores: async (_, args) => {
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
    createStore: async (
      _,
      { name, thumbnail, document_verification },
      { user }
    ) => {
      // update user role if user create store
      if (user.role === 'USER') {
        await User.updateOne({ id: user.id }, { role: 'SELLER' });
      }

      const promises = [
        multiFileUpload(document_verification as IFile[]),
        multiFileUpload(thumbnail as IFile[]),
      ];

      const [document_verification_url, thumbnail_url] = await Promise.all(
        promises
      );

      const store: IStore = await Store.create({
        name,
        thumbnail: thumbnail_url,
        owner: user.id,
        document_verification: document_verification_url,
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
