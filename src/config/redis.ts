import { RedisOptions as Options } from 'ioredis';

const { REDIS_DOMAIN_NAME, REDIS_PORT_NUMBER, REDIS_PASSWORD } = process.env;

export const RedisOptions: Options = {
  host: REDIS_DOMAIN_NAME,
  port: REDIS_PORT_NUMBER as undefined,
  password: REDIS_PASSWORD,
};
