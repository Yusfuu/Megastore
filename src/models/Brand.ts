import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IBrand {
  id: string;
  name: string;
  thumbnail: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IBrand>({
  name: { type: String, required: true },
  thumbnail: { type: String, required: true },
});

// 3. Create a Model.
export const Brand = model<IBrand>('Brand', schema);
