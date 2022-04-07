"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSuperAdmin = exports.isAdmin = exports.isSeller = exports.isUser = exports.isAuthenticated = void 0;
const enums_1 = require("../ts/enums");
const graphql_shield_1 = require("graphql-shield");
exports.isAuthenticated = (0, graphql_shield_1.rule)({ cache: 'contextual' })(async (parent, args, ctx) => {
    return ctx.user !== null;
});
exports.isUser = (0, graphql_shield_1.rule)({ cache: 'contextual' })(async (parent, args, ctx) => {
    return ctx.user.role === enums_1.Role.USER;
});
exports.isSeller = (0, graphql_shield_1.rule)({ cache: 'contextual' })(async (parent, args, ctx) => {
    return ctx.user.role === enums_1.Role.SELLER;
});
exports.isAdmin = (0, graphql_shield_1.rule)({ cache: 'contextual' })(async (parent, args, ctx) => {
    return ctx.user.role === enums_1.Role.ADMIN;
});
exports.isSuperAdmin = (0, graphql_shield_1.rule)({ cache: 'contextual' })(async (parent, args, ctx) => {
    return ctx.user.role === enums_1.Role.SUPER_ADMIN;
});
//# sourceMappingURL=permission.js.map