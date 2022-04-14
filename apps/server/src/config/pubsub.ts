import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis, { RedisOptions } from 'ioredis';

const { REDIS_DOMAIN_NAME, REDIS_PORT_NUMBER, REDIS_PASSWORD } = process.env;

const options: RedisOptions = {
  host: REDIS_DOMAIN_NAME,
  port: REDIS_PORT_NUMBER as undefined,
  password: REDIS_PASSWORD,
};

const publisher = new Redis(options);
const subscriber = new Redis(options);

export const pubsub = new RedisPubSub({ publisher, subscriber });
