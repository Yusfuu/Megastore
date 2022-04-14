import { isAuthenticated, isSeller } from '@middlewares/permission';
import { and } from 'graphql-shield';

const permission = {
  Query: {},
  Mutation: {
    // createProduct: and(isAuthenticated, isSeller),
  },
};

export default permission;
