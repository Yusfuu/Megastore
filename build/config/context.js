"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const pubsub_1 = require("./pubsub");
const loader_1 = require("@middlewares/loader");
const jwt_1 = require("@lib/jwt");
const context = async ({ req }) => {
    // get the user token from the headers
    const bearer = req.headers.authorization || '';
    const token = bearer.split(' ')[1] || '';
    // // try to retrieve a user with the token
    const user = (0, jwt_1.verifyJWT)(token);
    return {
        req,
        pubsub: pubsub_1.pubsub,
        dataloader: loader_1.dataloader,
        //@ts-ignore
        user,
    };
};
exports.context = context;
//# sourceMappingURL=context.js.map