"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
  input OrderInput {
    user: String!
    cart: ID!
    country: String!
    city: String!
    zipCode: Int!
    address: String!
    delivery: String!
    status: String!
    traking: String!
    estimatedTime: String!
  }

  type Order {
    id: ID!
    user: String!
    cart: Cart
    country: String!
    city: String!
    zipCode: Int!
    address: String!
    delivery: String!
    status: String!
    traking: String!
    estimatedTime: String!
  }

  type Query {
    orders(user: String!): Order
  }

  type Mutation {
    createOrder(input: OrderInput!): Order!
  }
`;
//# sourceMappingURL=typeDefs.js.map