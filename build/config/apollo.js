"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const compression_1 = __importDefault(require("compression"));
const ioredis_1 = __importDefault(require("ioredis"));
const apollo_server_plugin_response_cache_1 = __importDefault(require("apollo-server-plugin-response-cache"));
const http_1 = require("http");
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const context_1 = require("./context");
const db_1 = require("./db");
const graphql_upload_1 = require("graphql-upload");
const WebSocketServer_1 = require("./WebSocketServer");
const apollo_server_cache_redis_1 = require("apollo-server-cache-redis");
const redis_1 = require("./redis");
const port = process.env.PORT || 4000;
const bootstrap = async (schema) => {
    // Create an Express app and HTTP server; we will attach both the WebSocket
    // server and the ApolloServer to this HTTP server.
    const app = (0, express_1.default)();
    const httpServer = (0, http_1.createServer)(app);
    app.use((0, cors_1.default)());
    app.use((0, compression_1.default)());
    app.use((0, graphql_upload_1.graphqlUploadExpress)({
        maxFileSize: 10000000,
        maxFiles: 10,
    }));
    // Create the Web Socket instance, using the schema we created earlier
    const serverCleanup = (0, WebSocketServer_1.WebSocket)(httpServer, schema);
    // Set up ApolloServer.
    const server = new apollo_server_express_1.ApolloServer({
        introspection: true,
        context: context_1.context,
        schema,
        cache: new apollo_server_cache_redis_1.BaseRedisCache({
            client: new ioredis_1.default(redis_1.RedisOptions),
        }),
        plugins: [
            (0, apollo_server_plugin_response_cache_1.default)(),
            (0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer }),
            {
                async serverWillStart() {
                    return {
                        async drainServer() {
                            await serverCleanup.dispose();
                        },
                    };
                },
            },
        ],
        validationRules: [(0, graphql_depth_limit_1.default)(7)],
        formatError: (error) => {
            // Remove the internal database error message
            return error;
        },
    });
    await server.start();
    server.applyMiddleware({ app, path: '/gql', cors: { origin: '*' } });
    // Now that our HTTP server is fully set up, we can listen to it.
    httpServer.listen(port, async () => {
        console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
        const { connection } = await (0, db_1.db)();
        // connect to database
        console.log(`👋 Connected to database successfully: ${connection.name}`);
    });
};
exports.bootstrap = bootstrap;
//Files Stream to Azure for now
// app.use(
//   "/media/:key",
//   catchAsync(async (req: Request, res: Response, nex: NextFunction) => {
//     const { key } = req.params;
//     const url = await getFileStreamAzure(key);
//     res.json({ url });
//     // (await getFileStreamAzure(key))?.pipe(res);
//   })
// );
//# sourceMappingURL=apollo.js.map