import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  input CartInput {
    user: String!
    products: [ID!]!
    amount: Float!
  }

  type Cart {
    id: ID!
    user: String!
    products: [Product]
    amount: Float!
  }

  type Cart {
    id: ID!
    user: String!
    products: [Product]
    amount: Float
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    discount: Float!
  }

  type Query {
    carts: [Cart]
    cart(id: String!): Cart
  }

  type Mutation {
    createCart(input: CartInput!): Cart!
  }
`;
