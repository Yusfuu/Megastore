"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocket = void 0;
const ws_1 = require("graphql-ws/lib/use/ws");
const ws_2 = require("ws");
const pubsub_1 = require("./pubsub");
const WebSocket = (httpServer, schema) => {
    // Create our WebSocket server using the HTTP server we just set up.
    const wsServer = new ws_2.WebSocketServer({
        server: httpServer,
        path: '/gql',
    });
    // Save the returned server's info so we can shutdown this server later
    const serverCleanup = (0, ws_1.useServer)({
        schema,
        context: () => {
            return {
                pubsub: pubsub_1.pubsub,
            };
        },
    }, wsServer);
    return serverCleanup;
};
exports.WebSocket = WebSocket;
//# sourceMappingURL=WebSocketServer.js.map