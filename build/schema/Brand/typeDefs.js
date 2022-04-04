"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
  type Brand {
    id: ID!
    name: String!
    thumbnail: String!
  }

  type Query {
    brands: [Brand]!
    brand(id: ID!): Brand
  }

  type Mutation {
    createBrand(name: String!, thumbnail: String!): Brand!
    deleteBrand(id: ID!): Brand
  }
`;
//# sourceMappingURL=typeDefs.js.map