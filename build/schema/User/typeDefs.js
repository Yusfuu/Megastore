"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  enum Role {
    USER
    SELLER
    ADMIN
  }

  enum AccountStatus {
    ACTIVE
    INACTIVE
  }

  enum TypeAccount {
    BASIC
    STARTER
    PRO
    EXPERT
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Role!
    isSeller: Boolean!
    accountStatus: AccountStatus
    store: Store
    typeAccount: TypeAccount
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  union AuthResult = AuthPayload | User

  type Mutation {
    register(input: UserInput): AuthPayload
    login(email: String!, password: String!): AuthPayload
    updatePassword(oldPassword: String!, newPassword: String!): User
  }
`;
//# sourceMappingURL=typeDefs.js.map