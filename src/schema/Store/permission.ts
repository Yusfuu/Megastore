import { isAuthenticated, isSeller } from '@middlewares/permission';
import { and } from 'graphql-shield';

const permission = {
  Query: {},
  Mutation: {
    createStore: and(isAuthenticated),
    deleteStore: and(isAuthenticated, isSeller),
  },
};

export default permission;
