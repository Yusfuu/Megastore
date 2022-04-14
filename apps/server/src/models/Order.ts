import { Schema, model } from 'mongoose';
import { IUser, ICart } from '@models/index';
import { DeliveryType, DeliveryStatus } from '@ts/enums';

// 1. Create an interface representing a document in MongoDB.
export interface IOrder {
  id: string;
  user: IUser;
  cart: ICart;
  country: string;
  city: string;
  zipCode: number;
  address: string;
  delivery: DeliveryType;
  status: DeliveryStatus;
  traking: string;
  estimatedTime: Date;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    cart: { type: Schema.Types.ObjectId, ref: 'Cart', autopopulate: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: Number, required: true },
    address: { type: String, required: true },
    delivery: {
      type: String,
      required: true,
      enum: DeliveryType,
      default: DeliveryType.STANDARD,
    },
    status: {
      type: String,
      required: true,
      enum: DeliveryStatus,
      default: DeliveryStatus.PENDING,
    },
    traking: { type: String },
    estimatedTime: Date,
  },
  { timestamps: true }
);

// 3. Create a Model.
export const Order = model<IOrder>('Order', schema);
