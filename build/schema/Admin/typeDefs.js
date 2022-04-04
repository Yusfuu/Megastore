"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
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
//# sourceMappingURL=typeDefs.js.map