"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const upload_1 = require("../../lib/upload");
const index_1 = require("../../models/index");
const bcrypt_1 = require("bcrypt");
exports.resolvers = {
    Query: {
        getAll: async (_, __, {}) => {
            const superAdmins = await index_1.Super.find({});
            return superAdmins;
        },
    },
    Mutation: {
        addSuper: async (_, { input }) => {
            const { name, email, password } = input;
            // hash password
            const passwordHash = await (0, bcrypt_1.hash)(password, 10);
            // save user in database
            const superAdmin = await index_1.Super.create({
                name,
                email,
                password: passwordHash,
            });
            return superAdmin;
        },
        addImage: async (_, { input }) => {
            const { files } = input;
            let images = await (0, upload_1.multiFileUpload)(files);
            return images;
        },
    },
};
//# sourceMappingURL=resolvers.js.map