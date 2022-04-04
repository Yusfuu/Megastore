import { Schema, model } from 'mongoose';
import { IProduct } from './Product';

// 1. Create an interface representing a document in MongoDB.
export interface ICategory {
  id: string;
  name: string;
  path: string | null;
  assets: Array<string>;
  products: Array<IProduct>;
}

// 2. Create a Schema corresponding to the document interface.

// Materialized Paths
const schema = new Schema<ICategory>({
  name: { type: String, required: true },
  path: { type: String, default: null },
  assets: [{ type: Schema.Types.ObjectId, ref: 'Asset' }],
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

// 3. Create a Model.
export const Category = model<ICategory>('Category', schema);
