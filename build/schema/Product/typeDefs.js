"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
  type Dimensions {
    color: String
    size: String
  }

  type Variants {
    sku: String!
    price: Float!
    stock: Int!
    dimensions: [Dimensions]!
  }

  input DimensionsInput {
    color: String
    size: String
  }

  input VariantsInput {
    sku: String!
    price: Float!
    stock: Int!
    dimensions: [DimensionsInput]!
  }

  input ProductInput {
    name: String!
    description: String!
    price: Float!
    discount: Float!
    thumbnails: [String]!
    store: ID!
    brand: ID!
    category: [ID]!
    variants: [VariantsInput]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    thumbnails: [String]!
    discount: Float!
    brand: Brand
    category: [Category]!
    store: Store!
    stock: Int!
    variants: [Variants]!
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
//# sourceMappingURL=typeDefs.js.map