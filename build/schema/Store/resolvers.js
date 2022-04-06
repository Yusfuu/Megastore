"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const upload_1 = require("../../lib/upload");
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        stores: async (parent, args) => {
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
        createStore: async (_, { name, thumbnail, document_verification }, { user }) => {
            // update user role if user create store
            if (user.role === 'USER') {
                const updatedUser = await index_1.User.findOneAndUpdate({ _id: user.id }, { role: 'SELLER' }, { new: true });
            }
            const promises = [
                (0, upload_1.multiFileUpload)(document_verification),
                (0, upload_1.multiFileUpload)(thumbnail),
            ];
            const [document_verification_url, thumbnail_url] = await Promise.all(promises);
            const store = await index_1.Store.create({
                name,
                thumbnail: thumbnail_url,
                owner: user.id,
                document_verification: document_verification_url,
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
        thumbnail: async ({ thumbnail: ids }, _, { dataloader }) => {
            const images = await dataloader.media.loadMany(ids);
            return images;
        },
    },
};
//# sourceMappingURL=resolvers.js.map