import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  input ProductInput {
    name: String
    description: String
    price: Float
    discount: Float
    thumbnails: [Upload]
    brand: String
    category: [ID]
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    thumbnails: [Media]!
    discount: Float!
    brand: String!
    category: [Category]!
    store: Store!
    stock: Int!
  }

  type Query {
    products: [Product]
    product(id: String!): Product
  }

  type Mutation {
    createProduct(input: ProductInput!): Product!
    deleteProduct(id: String!): Product
    updateProduct(id: String!, input: ProductInput!): Product
  }
`;
