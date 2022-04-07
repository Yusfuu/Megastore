"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const upload_1 = require("../../lib/upload");
const index_1 = require("../../models/index");
const enums_1 = require("../../ts/enums");
const bcrypt_1 = require("bcrypt");
exports.resolvers = {
    Query: {
        getAll: async (_, __, {}) => {
            const superAdmins = await index_1.Super.find({});
            return superAdmins;
        },
        getUsersAccount: async (_, { role, isSeller }) => {
            const filter = {
                ...(role && { role }),
                ...(isSeller && { isSeller }),
            };
            const users = await index_1.User.find(filter);
            return users;
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
        confirmUserIsSeller: async (_, { id }) => {
            const user = await index_1.User.findByIdAndUpdate(id, {
                $set: {
                    isSeller: true,
                    typeAccount: enums_1.TypeAccount.STARTER,
                },
            }, { new: true });
            return user;
        },
        updateUserAccountStatus: async (_, { id, status }) => {
            const user = await index_1.User.findByIdAndUpdate(id, {
                $set: {
                    accountStatus: status,
                },
            }, { new: true });
            return user;
        },
        createAdmin: async (_, { input }) => {
            const { name, email, password } = input;
            // hash password
            const passwordHash = await (0, bcrypt_1.hash)(password, 10);
            // save user in database
            const admin = await index_1.Admin.create({
                name,
                email,
                password: passwordHash,
            });
            return admin;
        },
    },
};
//# sourceMappingURL=resolvers.js.map