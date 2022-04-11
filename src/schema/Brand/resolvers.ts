import type { Resolvers } from '@generated/types';
import { Brand, IBrand } from '@models/index';

export const resolvers: Resolvers = {
  Query: {
    brands: async () => {
      const brands: IBrand[] = await Brand.find();
      return brands;
    },
    brand: async (parent, { id }) => {
      const brand: IBrand | null = await Brand.findById(id);
      return brand;
    },
  },
  Mutation: {
    createBrand: async (_, { name, thumbnail }) => {
      const brand: IBrand = await Brand.create({
        name,
        thumbnail,
      });
      return brand;
    },
    deleteBrand: async (_, { id }) => {
      const brand: IBrand | null = await Brand.findByIdAndDelete(id);
      return brand;
    },
  },
};
