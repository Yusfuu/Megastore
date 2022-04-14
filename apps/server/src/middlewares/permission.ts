import { Role } from '@ts/enums';
import { rule } from 'graphql-shield';

export const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx) => {
    return ctx.user !== null;
  }
);

export const isUser = rule({ cache: 'contextual' })(
  async (parent, args, ctx) => {
    return ctx.user.role === Role.USER;
  }
);

export const isSeller = rule({ cache: 'contextual' })(
  async (parent, args, ctx) => {
    return ctx.user.role === Role.SELLER;
  }
);

export const isAdmin = rule({ cache: 'contextual' })(
  async (parent, args, ctx) => {
    return ctx.user.role === Role.ADMIN;
  }
);

// export const isSuperAdmin = rule({ cache: 'contextual' })(
//   async (parent, args, ctx) => {
//     return ctx.user.role === Role.SUPER_ADMIN;
//   }
// );
