"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        stores: async (parent, args) => {
            // const { limit, cursor } = input!;
            // const stores: PaginatedStore = await paginate(limit, cursor, Store);
            const status = args.status;
            const sort = args.sort || 'ascending';
            const filter = {
                ...(status && { status }),
            };
            const stores = await index_1.Store.find(filter).sort({ createdAt: sort });
            return stores;
        },
        store: async (_, { id }) => {
            const store = await index_1.Store.findById(id);
            return store;
        },
    },
    Mutation: {
        createStore: async (_, { name, thumbnail }, { user }) => {
            const store = await index_1.Store.create({
                name,
                thumbnail,
                owner: user.id,
            });
            return store;
        },
        deleteStore: async (_, { id }) => {
            const store = await index_1.Store.findByIdAndDelete(id);
            return store;
        },
    },
    Store: {
        owner: async ({ owner: id }, _, { dataloader }) => {
            const user = await dataloader.user.load(id);
            return user;
        },
        products: async ({ products: ids }, _, { dataloader }) => {
            const products = await dataloader.product.loadMany(ids);
            return products;
        },
    },
};
//# sourceMappingURL=resolvers.js.map