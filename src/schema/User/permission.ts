import { isAuthenticated } from '@middlewares/permission';

const permission = {
  Query: {},
  Mutation: {
    updatePassword: isAuthenticated,
  },
};

export default permission;
