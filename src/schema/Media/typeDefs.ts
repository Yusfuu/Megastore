import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  scalar Upload

  type Media {
    id: ID!
    src: String!
    alt: String!
    type: String!
  }
`;
