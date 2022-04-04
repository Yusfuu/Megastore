import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  # input StoreFilters {
  #   name: String
  #   status: StoreStatus
  # }

  # input StoreInput {
  #   filter: StoreFilters
  # }

  type Mutation {
    updateStoreStatus(id: ID!, status: StoreStatus!): Store
  }
`;
