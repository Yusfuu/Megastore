import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
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
