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
    createProduct: async (_, { input }) => {
      // create product in Product model
      const images = await multiFileUpload(input.thumbnails as IFile[]);

      input.thumbnails = images;

      const product: IProduct = await Product.create(input);

      // update product array in Store model
      const store = await Store.updateOne(
        { _id: input.store },
        { $addToSet: { products: product.id } }
      );

      return product;
    },
    deleteProduct: async (_, { id }) => {
      const product: IProduct | null = await Product.findByIdAndDelete(id);
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
    brand: async ({ brand: id }, args, { dataloader }) => {
      const brand: IBrand | null = await dataloader.brand.load(id);
      return brand;
    },
    category: async ({ category: ids }, args, { dataloader }) => {
      const categories: ICategory[] = await dataloader.category.loadMany(ids);
      return categories;
    },
    store: async ({ store: id }, args, { dataloader }) => {
      const store: IStore = await dataloader.store.load(id);
      return store;
    },
  },
};
