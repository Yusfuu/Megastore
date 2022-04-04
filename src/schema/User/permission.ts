import { isAuthenticated } from '@middlewares/permission';

const permission = {
  Query: {},
  Mutation: {
    updateRole: isAuthenticated,
    updatePassword: isAuthenticated,
  },
};

export default permission;
