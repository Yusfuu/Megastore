"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const apollo_1 = require("./config/apollo");
const index_1 = require("./schema/index");
const graphql_middleware_1 = require("graphql-middleware");
const schema = (0, graphql_middleware_1.applyMiddleware)(index_1.schema, index_1.permissions);
(0, apollo_1.bootstrap)(schema);
//# sourceMappingURL=main.js.map