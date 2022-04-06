import { Schema, model } from 'mongoose';
import { IProduct } from './Product';

// 1. Create an interface representing a document in MongoDB.
export interface ICategory {
  id: string;
  name: string;
  media: Array<string>;
  products: Array<IProduct>;
}

// 2. Create a Schema corresponding to the document interface.

const schema = new Schema<ICategory>({
  name: { type: String, required: true },
  media: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

// 3. Create a Model.
export const Category = model<ICategory>('Category', schema);
