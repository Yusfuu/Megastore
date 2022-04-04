"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
  # Enums
  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  enum Sort {
    ascending
    descending
  }

  # directives
  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION

  type PageInfo {
    hasNextPage: Boolean!
    nextCursor: String
  }

  # The \`PaginateEntity\` interface is used to define the common fields
  interface Node {
    id: ID!
  }

  interface PaginateEntity {
    data: [Node!]!
    pageInfo: PageInfo!
  }

  # input paginate for pagination
  input paginate {
    cursor: String
    limit: Float
  }
`;
//# sourceMappingURL=typeDefs.js.map