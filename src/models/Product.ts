import { Schema, model } from 'mongoose';
import { IStore, ICategory, IBrand } from '@models/index';

// 1. Create an interface representing a document in MongoDB.

interface Options {
  colors?: Array<string>;
  sizes?: Array<string>;
}

interface Dimensions {
  color?: string;
  size?: string;
}

interface Variants {
  sku: string;
  price: number;
  stock: number;
  dimensions: Array<Dimensions>;
}

export interface IProduct {
  id: string;
  name: string;
  stock: number;
  discount: number;
  price: number;
  description: string;
  thumbnails: Array<string>;
  variants: Array<Variants>;
  store: IStore;
  brand: IBrand;
  category: Array<ICategory>;
  options: Options;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IProduct>({
  name: { type: String, required: true },
  store: { type: Schema.Types.ObjectId, ref: 'Store' },
  category: [{ type: Schema.Types.ObjectId, ref: 'Category', required: true }],
  brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
  price: { type: Number, required: true },
  discount: { type: Number, required: true, default: 0 },
  stock: { type: Number },
  description: { type: String, required: true },
  thumbnails: [{ type: String, required: true }],
  options: {
    _id: false,
    colors: [{ type: String }],
    sizes: [{ type: String }],
  },
  variants: [
    {
      _id: false,
      sku: { type: String },
      price: { type: Number },
      stock: { type: Number },
      dimensions: [
        {
          _id: false,
          size: { type: String },
          color: { type: String },
        },
      ],
    },
  ],
});

// 3. Create a Model.
export const Product = model<IProduct>('Product', schema);
