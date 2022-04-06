"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
  scalar Upload

  type Media {
    id: ID!
    src: String!
    alt: String!
    type: String!
  }
`;
//# sourceMappingURL=typeDefs.js.map