import DataLoader from 'dataloader';
import { Model } from 'mongoose';
import { Store, Brand, Product, Category, User, Media } from '@models/index';

// create a dataloader for the given model
export const createLoader = (Model: Model<any>) => {
  // init the dataloader
  const loader = new DataLoader(async (keys) => {
    const data = await Model.find({ _id: { $in: keys } });
    return keys.map((key) => data.find(({ id }) => id == key));
  });

  // return the dataloader loader function
  return {
    load: async (id: unknown) => loader.load(id),
    loadMany: async (ids: ArrayLike<unknown>) => loader.loadMany(ids),
  };
};

export const dataloader = {
  store: createLoader(Store),
  brand: createLoader(Brand),
  category: createLoader(Category),
  product: createLoader(Product),
  user: createLoader(User),
  media: createLoader(Media),
};
