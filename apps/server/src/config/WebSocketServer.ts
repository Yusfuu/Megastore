import { GraphQLSchema } from 'graphql';
import { useServer } from 'graphql-ws/lib/use/ws';
import { Server } from 'http';
import { WebSocketServer } from 'ws';
import { pubsub } from './pubsub';

export const WebSocket = (httpServer: Server, schema: GraphQLSchema) => {
  // Create our WebSocket server using the HTTP server we just set up.
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/gql',
  });

  // Save the returned server's info so we can shutdown this server later
  const serverCleanup = useServer(
    {
      schema,
      context: () => {
        return {
          pubsub,
        };
      },
    },
    wsServer
  );

  return serverCleanup;
};
