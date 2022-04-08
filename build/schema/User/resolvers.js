"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const jwt_1 = require("@lib/jwt");
const index_1 = require("@models/index");
const apollo_server_core_1 = require("apollo-server-core");
const bcrypt_1 = require("bcrypt");
exports.resolvers = {
    Mutation: {
        register: async (_, { input }) => {
            const { email, firstName, lastName, password } = input;
            // hash password
            const passwordHash = await (0, bcrypt_1.hash)(password, 10);
            // save user in database
            const user = await index_1.User.create({
                firstName,
                lastName,
                email,
                password: passwordHash,
            }).catch((err) => (err.code === 11000 ? null : undefined));
            if (user === undefined) {
                throw new apollo_server_core_1.AuthenticationError('something went wrong');
            }
            if (user === null) {
                throw new apollo_server_core_1.AuthenticationError('account already exists');
            }
            // generate token
            const token = (0, jwt_1.generateJWT)({
                id: user.id,
                email: user.email,
                role: user.role,
            });
            const auth = {
                token,
                user,
            };
            return auth;
        },
        login: async (_, { email, password }) => {
            // find user by email
            const user = await index_1.User.findOne({ email });
            console.log(user);
            // check if user exists
            if (!user) {
                throw new apollo_server_core_1.AuthenticationError('Sorry, we could not find your account.');
            }
            // check if password is correct
            const isValid = await (0, bcrypt_1.compare)(password, user.password);
            if (!isValid) {
                throw new apollo_server_core_1.AuthenticationError('Wrong password!');
            }
            // generate token
            const token = (0, jwt_1.generateJWT)({
                id: user.id,
                email: user.email,
                role: user.role,
            });
            const auth = {
                token,
                user,
            };
            return auth;
        },
        updatePassword: async (_, { oldPassword, newPassword }, { user }) => {
            const currentUser = await index_1.User.findOne({ id: user.id });
            if (!currentUser) {
                throw new apollo_server_core_1.AuthenticationError('Sorry, we could not find your account.');
            }
            // compare old password
            const isValid = await (0, bcrypt_1.compare)(oldPassword, currentUser.password);
            if (!isValid) {
                throw new apollo_server_core_1.AuthenticationError('Wrong password!');
            }
            // hash new password
            const password = await (0, bcrypt_1.hash)(newPassword, 10);
            // update password
            const newUser = await index_1.User.findOneAndUpdate({ _id: user.id }, { password }, { new: true });
            return newUser;
        },
    },
    AuthResult: {
        __resolveType(obj) {
            return obj.token ? 'AuthPayload' : 'User';
        },
    },
    User: {
        store: async ({ store: id, isSeller }, _, { dataloader }) => {
            if (!isSeller)
                return null;
            const store = await dataloader.store.load(id);
            return store;
        },
    },
};
//# sourceMappingURL=resolvers.js.map