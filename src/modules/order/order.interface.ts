import { ObjectId } from "mongoose";

export interface IOrder {
  email: string;
  productId: string;
  price: number;
  quantity: number;
};