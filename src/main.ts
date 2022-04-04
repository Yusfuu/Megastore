import 'dotenv/config';
import { bootstrap } from '@config/apollo';
import { schema as gql, permissions } from '@schema/index';
import { applyMiddleware } from 'graphql-middleware';
import mongoose from 'mongoose';

const schema = applyMiddleware(gql, permissions);

bootstrap(schema);

// for debug purpose

// mongoose.set('debug', (collectionName, method, query, doc) => {
//   console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
// });
