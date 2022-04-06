"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paginate = async (limit = null, cursor = null, model) => {
    limit = ((limit || 10) + 1);
    // create cursor Option
    const cursorOption = {
        ...(cursor && { _id: { $lt: cursor } }),
    };
    // find products with cursor
    const collection = await model
        .find(cursorOption)
        .sort({ _id: -1 })
        .limit(limit);
    const len = collection.length;
    // check if there is a next page
    const hasNextPage = len === limit;
    // check next cursor
    const nextCursor = hasNextPage ? collection[len - 1].id : null;
    // remove last item from collection
    const data = hasNextPage ? collection.slice(0, -1) : collection;
    return { data, pageInfo: { nextCursor, hasNextPage } };
};
exports.default = paginate;
//# sourceMappingURL=pagination.js.map