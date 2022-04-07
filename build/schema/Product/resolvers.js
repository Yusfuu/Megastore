"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const upload_1 = require("../../lib/upload");
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        products: async (parent, args) => {
            const products = await index_1.Product.find();
            return products;
        },
        product: async (parent, args) => {
            const product = await index_1.Product.findById(args.id);
            return product;
        },
    },
    Mutation: {
        createProduct: async (_, { input }, { user }) => {
            // create product in Product model
            const images = await (0, upload_1.multiFileUpload)(input.thumbnails);
            const product = await index_1.Product.create({
                ...input,
                thumbnails: images,
            });
            // update product array in Store model
            // and decrease product limit by 1
            await index_1.Store.updateOne({ _id: user.store }, { $addToSet: { products: product.id }, $inc: { productLimit: -1 } });
            return product;
        },
        deleteProduct: async (_, { id }, { user }) => {
            // delete product in Product model
            const product = await index_1.Product.findByIdAndDelete(id);
            // update product array in Store model
            await index_1.Store.updateOne({ _id: user.store }, { $unset: { products: product?.id }, $inc: { productLimit: 1 } });
            return product;
        },
        updateProduct: async (_, { id, input }) => {
            const product = await index_1.Product.findByIdAndUpdate(id, input, { new: true });
            return product;
        },
    },
    Product: {
        category: async ({ category: ids }, args, { dataloader }) => {
            const categories = await dataloader.category.loadMany(ids);
            return categories;
        },
        store: async ({ store: id }, args, { dataloader }) => {
            const store = await dataloader.store.load(id);
            return store;
        },
        thumbnails: async ({ thumbnails: ids }, args, { dataloader }) => {
            const images = await dataloader.media.loadMany(ids);
            return images;
        },
    },
};
//# sourceMappingURL=resolvers.js.map