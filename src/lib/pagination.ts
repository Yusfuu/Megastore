import { Model } from 'mongoose';

const paginate = async (
  limit: number | null = null,
  cursor: string | null = null,
  model: Model<any>
) => {
  limit = ((limit || 10) + 1) as number;

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
  const data: Array<any> = hasNextPage ? collection.slice(0, -1) : collection;

  return { data, pageInfo: { nextCursor, hasNextPage } };
};

export default paginate;
