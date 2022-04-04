"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = exports.generateJWT = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;
const generateJWT = (payload) => {
    return (0, jsonwebtoken_1.sign)(payload, JWT_SECRET_KEY, {
        expiresIn: '1d',
    });
};
exports.generateJWT = generateJWT;
const verifyJWT = (token) => {
    try {
        return (0, jsonwebtoken_1.verify)(token, JWT_SECRET_KEY);
    }
    catch (error) {
        return { error: true };
    }
};
exports.verifyJWT = verifyJWT;
//# sourceMappingURL=jwt.js.map