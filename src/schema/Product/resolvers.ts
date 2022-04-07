import type { Resolvers } from '@generated/types';
import { multiFileUpload } from '@lib/upload';
import {
  IProduct,
  Product,
  IBrand,
  ICategory,
  IStore,
  Store,
} from '@models/index';
import { IFile } from '@ts/types';

export const resolvers: Resolvers = {
  Query: {
    products: async (parent, args) => {
      const products: IProduct[] = await Product.find();
      return products;
    },
    product: async (parent, args) => {
      const product: IProduct | null = await Product.findById(args.id);
      return product;
    },
  },
  Mutation: {
    createProduct: async (_, { input }, { user }) => {
      const store = await Store.findOne({ id: user.store });

      if (store?.limit_product === 0) {
        throw new Error('Store limit product is 0');
      }

      // create product in Product model
      const images = await multiFileUpload(input.thumbnails as IFile[]);

      const product: IProduct = await Product.create({
        ...input,
        thumbnails: images,
      });
      // update product array in Store model
      // and decrease product limit by 1

      // check if produc limit is not exceeded
      await Store.updateOne(
        { _id: user.store },
        { $addToSet: { products: product.id }, $inc: { productLimit: -1 } }
      );

      return product;
    },
    deleteProduct: async (_, { id }, { user }) => {
      // delete product in Product model
      const product: IProduct | null = await Product.findByIdAndDelete(id);

      if (!product) {
        throw new Error('Product not found');
      }

      // update product array in Store model
      await Store.updateOne(
        { _id: user.store },
        { $unset: { products: product?.id }, $inc: { productLimit: 1 } }
      );

      return product;
    },
    updateProduct: async (_, { id, input }) => {
      const product: IProduct | null = await Product.findByIdAndUpdate(
        id,
        input,
        { new: true }
      );
      return product;
    },
  },
  Product: {
    category: async ({ category: ids }, args, { dataloader }) => {
      const categories: ICategory[] = await dataloader.category.loadMany(ids);
      return categories;
    },
    store: async ({ store: id }, args, { dataloader }) => {
      const store: IStore = await dataloader.store.load(id);
      return store;
    },
    thumbnails: async ({ thumbnails: ids }, args, { dataloader }) => {
      const images = await dataloader.media.loadMany(ids);
      return images;
    },
  },
};
