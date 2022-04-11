import type { Resolvers } from '@generated/types';
import { Store } from '@models/Store';

// Provide resolver functions for your schema fields
export const resolvers: Resolvers = {
  Mutation: {
    updateStoreStatus: async (_, { id, status }) => {
      const store = await Store.findByIdAndUpdate(id, { status });
      return store;
    },
  },
};
