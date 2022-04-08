import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IAdmin {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IAdmin>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const Admin = model<IAdmin>('Admin', schema);
