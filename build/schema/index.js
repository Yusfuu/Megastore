"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.permissions = void 0;
const path_1 = require("path");
const load_files_1 = require("@graphql-tools/load-files");
const merge_1 = require("@graphql-tools/merge");
const schema_1 = require("@graphql-tools/schema");
const graphql_shield_1 = require("graphql-shield");
const typesPath = (0, path_1.join)(__dirname, './**/typeDefs.*');
const resolversPath = (0, path_1.join)(__dirname, './**/resolvers.*');
const permissionPath = (0, path_1.join)(__dirname, './**/permission.*');
const typesArray = (0, load_files_1.loadFilesSync)(typesPath);
const resolversArray = (0, load_files_1.loadFilesSync)(resolversPath);
const permissionArray = (0, load_files_1.loadFilesSync)(permissionPath);
const typeDefs = (0, merge_1.mergeTypeDefs)(typesArray);
const resolvers = (0, merge_1.mergeResolvers)(resolversArray);
exports.permissions = (0, graphql_shield_1.shield)((0, merge_1.mergeResolvers)(permissionArray), {
    fallbackRule: graphql_shield_1.allow,
    allowExternalErrors: true,
});
exports.schema = (0, schema_1.makeExecutableSchema)({ typeDefs, resolvers });
//# sourceMappingURL=index.js.map