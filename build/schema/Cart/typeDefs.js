"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
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
//# sourceMappingURL=typeDefs.js.map