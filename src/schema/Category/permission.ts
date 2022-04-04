import { isAdmin, isAuthenticated } from '@middlewares/permission';
import { and } from 'graphql-shield';

const permission = {
  Query: {},
  Mutation: {
    createCategory: and(isAuthenticated, isAdmin),
    deleteCategory: and(isAuthenticated, isAdmin),
  },
};

export default permission;
