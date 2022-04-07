import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  # type PaginateStore implements PaginateEntity {
  #   data: [Store!]!
  #   pageInfo: PageInfo!
  # }

  # type Store implements Node {
  #   id: ID!
  #   name: String!
  #   thumbnail: String!
  #   products: [Product]!
  #   owner: User!
  #   status: StoreStatus!
  # }

  # input NumberQueryOperatorInput {
  #   eq: String
  #   ne: String
  #   gt: String
  #   gte: String
  #   lt: String
  #   lte: String
  #   in: [String]
  #   nin: [String]
  #   between: [String]
  # }

  # input StringQueryOperatorInput {
  #   eq: String
  #   ne: String
  #   in: [String]
  #   nin: [String]
  #   regex: String
  # }

  # input ArrayOperatorInput {
  #   contains: [String]
  # }

  # input StoreFilterInput {
  #   id: ID
  # }

  enum StoreStatus {
    ACTIVE
    INACTIVE
  }

  type Store {
    id: ID!
    name: String!
    thumbnail: [Media]!
    products: [Product]!
    owner: User!
    status: StoreStatus!
    limit_product: Int
    document_verification: Media
  }

  type Query {
    # stores(input: paginate): PaginateStore
    stores(status: StoreStatus, sort: Sort): [Store]
    store(id: String!): Store
  }

  type Mutation {
    createStore(
      name: String!
      thumbnail: [Upload]!
      document_verification: Upload
    ): Store!
    deleteStore(id: ID!): Store
  }
`;
