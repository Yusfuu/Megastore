"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pubsub = void 0;
const graphql_redis_subscriptions_1 = require("graphql-redis-subscriptions");
const ioredis_1 = __importDefault(require("ioredis"));
const { REDIS_DOMAIN_NAME, REDIS_PORT_NUMBER, REDIS_PASSWORD } = process.env;
const options = {
    host: REDIS_DOMAIN_NAME,
    port: REDIS_PORT_NUMBER,
    password: REDIS_PASSWORD,
};
const publisher = new ioredis_1.default(options);
const subscriber = new ioredis_1.default(options);
exports.pubsub = new graphql_redis_subscriptions_1.RedisPubSub({ publisher, subscriber });
//# sourceMappingURL=pubsub.js.map