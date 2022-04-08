import type { Resolvers } from '@generated/types';
import { Super, ISuper, User, IUser, Admin, IAdmin } from '@models/index';
import { TypeAccount } from '@ts/enums';
import { hash } from 'bcrypt';

export const resolvers: Resolvers = {
  Query: {
    getAll: async (_, __, {}) => {
      const superAdmins: ISuper[] = await Super.find({});
      return superAdmins;
    },
    getUsersAccount: async (_, { role, isSeller }) => {
      const filter = {
        ...(role && { role }),
        ...(isSeller && { isSeller }),
      };

      const users: IUser[] = await User.find(filter);
      return users;
    },
    getAdminsAccount: async (_, __, {}) => {
      const admins: IAdmin[] = await Admin.find();
      return admins;
    },
  },
  Mutation: {
    addSuper: async (_, { input }) => {
      const { name, email, password } = input!;

      // hash password
      const passwordHash = await hash(password, 10);

      // save user in database
      const superAdmin: ISuper = await Super.create({
        name,
        email,
        password: passwordHash,
      });

      return superAdmin;
    },
    confirmUserIsSeller: async (_, { id }) => {
      const user: IUser | null = await User.findByIdAndUpdate(
        id,
        {
          $set: {
            isSeller: true,
            typeAccount: TypeAccount.STARTER,
          },
        },
        { new: true }
      );
      return user;
    },
    deleteUserAccount: async (_, { id }) => {
      const user: IUser | null = await User.findByIdAndDelete(id);
      return user;
    },
    deleteAdminAccount: async (_, { id }) => {
      const admin: IAdmin | null = await Admin.findByIdAndDelete(id);
      return admin;
    },
    updateUserAccountStatus: async (_, { id, status }) => {
      const user: IUser | null = await User.findByIdAndUpdate(
        id,
        {
          $set: {
            accountStatus: status,
          },
        },
        { new: true }
      );
      return user;
    },
    createAdmin: async (_, { input }) => {
      const { name, email, password } = input!;

      // hash password
      const passwordHash = await hash(password, 10);

      // save user in database
      const admin: IAdmin = await Admin.create({
        name,
        email,
        password: passwordHash,
      });

      return admin;
    },
  },
};
