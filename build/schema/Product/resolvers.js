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
        createProduct: async (_, { input }) => {
            // create product in Product model
            const images = await (0, upload_1.multiFileUpload)(input.thumbnails);
            input.thumbnails = images;
            const product = await index_1.Product.create(input);
            // update product array in Store model
            const store = await index_1.Store.updateOne({ _id: input.store }, { $addToSet: { products: product.id } });
            return product;
        },
        deleteProduct: async (_, { id }) => {
            const product = await index_1.Product.findByIdAndDelete(id);
            return product;
        },
        updateProduct: async (_, { id, input }) => {
            const product = await index_1.Product.findByIdAndUpdate(id, input, { new: true });
            return product;
        },
    },
    Product: {
        brand: async ({ brand: id }, args, { dataloader }) => {
            const brand = await dataloader.brand.load(id);
            return brand;
        },
        category: async ({ category: ids }, args, { dataloader }) => {
            const categories = await dataloader.category.loadMany(ids);
            return categories;
        },
        store: async ({ store: id }, args, { dataloader }) => {
            const store = await dataloader.store.load(id);
            return store;
        },
    },
};
//# sourceMappingURL=resolvers.js.map