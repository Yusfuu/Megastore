import type { Resolvers } from '@generated/types';
import { generateJWT } from '@lib/jwt';
import { User, IUser } from '@models/index';
import { AuthenticationError } from 'apollo-server-core';
import { hash, compare } from 'bcrypt';

export const resolvers: Resolvers = {
  Mutation: {
    register: async (_, { input }) => {
      const { email, firstName, lastName } = input!;

      // hash password
      const password = await hash(input?.password!, 10);

      // save user in database
      const user: IUser | null | undefined = await User.create({
        firstName,
        lastName,
        email,
        password,
      }).catch((err) => (err.code === 11000 ? null : undefined));

      if (user === undefined) {
        throw new AuthenticationError('something went wrong');
      }

      if (user === null) {
        throw new AuthenticationError('account already exists');
      }

      // generate token
      const token = generateJWT({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      const auth = {
        token,
        user,
      };

      return auth;
    },
    login: async (_, { email, password }) => {
      // find user by email
      const user = await User.findOne({ where: { email } });

      // check if user exists
      if (!user) {
        throw new AuthenticationError('Sorry, we could not find your account.');
      }

      // check if password is correct
      const isValid = await compare(password, user.password);

      if (!isValid) {
        throw new AuthenticationError('Wrong password!');
      }

      // generate token
      const token = generateJWT({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      const auth = {
        token,
        user,
      };

      return auth;
    },

    updateRole: async (_, { status }, { user }) => {
      if (!['USER', 'SELLER'].includes(status)) {
        throw new AuthenticationError(
          'You are not allowed to change your role'
        );
      }
      console.log('init');

      if (user.role === status) {
        return user;
      }

      const updatedUser: IUser | null = await User.findOneAndUpdate(
        { _id: user.id },
        { role: status },
        { new: true }
      );

      if (!updatedUser) {
        throw new AuthenticationError('something went wrong');
      }

      const auth = {
        token: generateJWT({
          id: updatedUser.id,
          email: updatedUser.email,
          role: updatedUser.role,
        }),
        user: updatedUser,
      };

      return auth;
    },
    updatePassword: async (_, { oldPassword, newPassword }, { user }) => {
      const currentUser = await User.findOne({ id: user.id });

      if (!currentUser) {
        throw new AuthenticationError('Sorry, we could not find your account.');
      }

      // compare old password
      const isValid = await compare(oldPassword, currentUser.password);

      if (!isValid) {
        throw new AuthenticationError('Wrong password!');
      }

      // hash new password
      const password = await hash(newPassword, 10);

      // update password
      const newUser: IUser | null = await User.findOneAndUpdate(
        { _id: user.id },
        { password },
        { new: true }
      );

      return newUser;
    },
  },
  AuthResult: {
    __resolveType(obj, context, info) {
      //@ts-ignore
      return obj.token ? 'AuthPayload' : 'User';
    },
  },
};
