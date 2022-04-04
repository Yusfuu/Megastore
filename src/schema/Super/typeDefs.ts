import { gql } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  input SuperInput {
    name: String!
    email: String!
    password: String!
  }

  input FileInput {
    files: [Upload!]
  }

  # type Image : [string]

  type Super {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getAll: [Super!]
  }

  type Mutation {
    addSuper(input: SuperInput): Super!
    addImage(input: FileInput): [String!]
  }
`;
