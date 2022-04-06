import type { Resolvers } from '@generated/types';
import { multiFileUpload } from '@lib/upload';
import { Super, ISuper, User, IUser, Admin } from '@models/index';
import { TypeAccount } from '@ts/enums';
import { IFile } from '@ts/types';
import { hash } from 'bcrypt';

export const resolvers: Resolvers = {
  Query: {
    getAll: async (_, __, {}) => {
      const superAdmins: ISuper[] = await Super.find({});
      return superAdmins;
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
    addImage: async (_, { input }) => {
      const { files } = input!;
      let images = await multiFileUpload(files as IFile[]);
      return images;
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
      const admin: ISuper = await Admin.create({
        name,
        email,
        password: passwordHash,
      });

      return admin;
    },
  },
};
