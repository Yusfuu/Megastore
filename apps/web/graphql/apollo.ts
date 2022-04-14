import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  }),
});

export default apolloClient;
