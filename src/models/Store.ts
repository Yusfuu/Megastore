import { Schema, model } from 'mongoose';
import { IProduct, IUser } from '@models/index';
import { StoreStatus } from '@ts/enums';

// 1. Create an interface representing a document in MongoDB.
export interface IStore {
  id: string;
  name: string;
  thumbnail: string;
  products: IProduct[];
  owner: IUser;
  status: StoreStatus;
}

export interface PaginatedStore {
  data: Array<IStore>;
  pageInfo: {
    hasNextPage: boolean;
    nextCursor: string | null;
  };
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IStore>(
  {
    name: { type: String, required: true },
    thumbnail: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    status: {
      type: String,
      required: true,
      enum: StoreStatus,
      default: StoreStatus.INACTIVE,
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const Store = model<IStore>('Store', schema);
