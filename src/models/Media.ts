import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IMedia {
  id: string;
  src: string;
  alt: string;
  type: string;
}

// 2. Create a Schema corresponding to the document interface.
const MediaSchema = new Schema<IMedia>(
  {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

export const Media = model<IMedia>('Media', MediaSchema);
