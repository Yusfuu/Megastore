import { AccountStatus, Role, TypeAccount } from '@ts/enums';
import { Schema, model } from 'mongoose';
import { IStore } from './Store';

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  stores: IStore[];
  AccountStatus: AccountStatus;
  isSeller: boolean;
  typeAccount: TypeAccount | null;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: Role,
      default: Role.USER,
    },
    AccountStatus: {
      type: String,
      required: true,
      enum: AccountStatus,
      default: AccountStatus.ACTIVE,
    },
    isSeller: {
      type: Boolean,
      required: true,
      default: false,
    },
    typeAccount: {
      type: String,
      required: false,
      enum: TypeAccount,
      default: TypeAccount.BASIC,
    },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const User = model<IUser>('User', schema);
