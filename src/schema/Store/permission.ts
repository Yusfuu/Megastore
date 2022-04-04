import { isAuthenticated, isSeller } from '@middlewares/permission';
import { and } from 'graphql-shield';

const permission = {
  Query: {},
  Mutation: {
    createStore: and(isAuthenticated, isSeller),
    deleteStore: and(isAuthenticated, isSeller),
  },
};

export default permission;
