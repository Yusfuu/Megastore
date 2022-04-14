import 'dotenv/config';
import { bootstrap } from '@config/apollo';
import { schema as gql, permissions } from '@schema/index';
import { applyMiddleware } from 'graphql-middleware';

const schema = applyMiddleware(gql, permissions);

bootstrap(schema);
