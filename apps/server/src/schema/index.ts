import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { allow, IRules, shield } from 'graphql-shield';

const typesPath = join(__dirname, './**/typeDefs.*');
const resolversPath = join(__dirname, './**/resolvers.*');
const permissionPath = join(__dirname, './**/permission.*');

const typesArray = loadFilesSync(typesPath);
const resolversArray = loadFilesSync(resolversPath);
const permissionArray = loadFilesSync(permissionPath);

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolversArray);

export const permissions = shield(mergeResolvers(permissionArray) as IRules, {
  fallbackRule: allow,
  allowExternalErrors: true,
});

export const schema = makeExecutableSchema({ typeDefs, resolvers });
