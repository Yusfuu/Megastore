import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Category {
    id: ID!
    name: String!
    products: [Product]!
  }

  type Query {
    categories: [Category]!
  }

  type Mutation {
    createCategory(name: String!): Category!
    deleteCategory(id: ID!): Category
  }
`;
