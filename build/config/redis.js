"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisOptions = void 0;
const { REDIS_DOMAIN_NAME, REDIS_PORT_NUMBER, REDIS_PASSWORD } = process.env;
exports.RedisOptions = {
    host: REDIS_DOMAIN_NAME,
    port: REDIS_PORT_NUMBER,
    password: REDIS_PASSWORD,
};
//# sourceMappingURL=redis.js.map