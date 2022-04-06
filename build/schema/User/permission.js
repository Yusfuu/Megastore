"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permission_1 = require("../../middlewares/permission");
const permission = {
    Query: {},
    Mutation: {
        updatePassword: permission_1.isAuthenticated,
    },
};
exports.default = permission;
//# sourceMappingURL=permission.js.map