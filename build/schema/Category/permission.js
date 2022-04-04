"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permission_1 = require("../../middlewares/permission");
const graphql_shield_1 = require("graphql-shield");
const permission = {
    Query: {},
    Mutation: {
        createCategory: (0, graphql_shield_1.and)(permission_1.isAuthenticated, permission_1.isAdmin),
        deleteCategory: (0, graphql_shield_1.and)(permission_1.isAuthenticated, permission_1.isAdmin),
    },
};
exports.default = permission;
//# sourceMappingURL=permission.js.map