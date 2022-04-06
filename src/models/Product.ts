import { Schema, model } from 'mongoose';
import { IStore, ICategory, IBrand, IMedia } from '@models/index';
// 1. Create an interface representing a document in MongoDB.
export interface IProduct {
  id: string;
  name: string;
  store: IStore;
  category: Array<ICategory>;
  brand: IBrand;
  price: number;
  discount: number;
  stock: number;
  description: string;
  thumbnails: IMedia[];
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IProduct>({
  name: { type: String, required: true },
  store: { type: Schema.Types.ObjectId, ref: 'Store' },
  category: [{ type: Schema.Types.ObjectId, ref: 'Category', required: true }],
  brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
  price: { type: Number, required: true },
  discount: { type: Number, required: true, default: 0 },
  stock: { type: Number, required: true, default: 0 },
  description: { type: String, required: true },
  thumbnails: [{ type: String, required: true }],
});

// 3. Create a Model.
export const Product = model<IProduct>('Product', schema);
