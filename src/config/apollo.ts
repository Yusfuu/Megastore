import express from 'express';
import cors from 'cors';
import depthLimit from 'graphql-depth-limit';
import compression from 'compression';
import Redis from 'ioredis';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { context } from './context';
import { GraphQLSchema } from 'graphql';
import { db } from './db';
import { graphqlUploadExpress } from 'graphql-upload';
import { WebSocket } from './WebSocketServer';
import { BaseRedisCache } from 'apollo-server-cache-redis';
import { RedisOptions } from './redis';

const port = process.env.PORT || 4000;

export const bootstrap = async (schema: GraphQLSchema) => {
  // Create an Express app and HTTP server; we will attach both the WebSocket
  // server and the ApolloServer to this HTTP server.
  const app = express();
  const httpServer = createServer(app);

  app.use(cors());
  app.use(compression());

  app.use(
    graphqlUploadExpress({
      maxFileSize: 10000000,
      maxFiles: 10,
    })
  );

  // Create the Web Socket instance, using the schema we created earlier
  const serverCleanup = WebSocket(httpServer, schema);

  // Set up ApolloServer.
  const server = new ApolloServer({
    introspection: true,
    context,
    schema,
    cache: new BaseRedisCache({
      client: new Redis(RedisOptions),
    }),
    plugins: [
      responseCachePlugin(),
      ApolloServerPluginDrainHttpServer({ httpServer }),
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
    validationRules: [depthLimit(7)],
    formatError: (error: any) => {
      // Remove the internal database error message
      return error;
    },
  });

  await server.start();
  server.applyMiddleware({ app, path: '/gql', cors: { origin: '*' } });

  // Now that our HTTP server is fully set up, we can listen to it.
  httpServer.listen(port, async () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
    const { connection } = await db();
    // connect to database
    console.log(`👋 Connected to database successfully: ${connection.name}`);
  });
};

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
