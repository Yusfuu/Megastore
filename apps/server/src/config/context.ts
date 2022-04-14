import { Request } from 'express';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { pubsub } from './pubsub';
import { dataloader } from '@middlewares/loader';
import { verifyJWT } from '@lib/jwt';
import { IUser } from '@models/User';

export interface Context {
  req: Request;
  pubsub: RedisPubSub;
  dataloader: typeof dataloader;
  user: IUser;
}

export const context = async ({ req }: { req: Request }): Promise<Context> => {
  // get the user token from the headers
  const bearer = req.headers.authorization || '';
  const token = bearer.split(' ')[1] || '';

  // // try to retrieve a user with the token
  const user = verifyJWT(token);
  return {
    req,
    pubsub,
    dataloader,
    //@ts-ignore
    user,
  };
};
