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

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Role!
    AccountStatus: AccountStatus!
    Store: Store
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  union AuthResult = AuthPayload | User

  type Mutation {
    register(input: UserInput): AuthPayload
    login(email: String!, password: String!): AuthPayload
    updateRole(status: Role!): AuthResult
    updatePassword(oldPassword: String!, newPassword: String!): User
  }
`;
//# sourceMappingURL=typeDefs.js.map