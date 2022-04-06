import { Schema, model } from "mongoose";
import { IProduct, IUser } from "@models/index";

// 1. Create an interface representing a document in MongoDB.
export interface ICart {
  id: string;
  user: IUser;
  products: IProduct[];
  amount: number;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
    ],
    amount: {
      type: Schema.Types.Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const Cart = model<ICart>("Cart", schema);
