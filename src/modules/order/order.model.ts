import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
    },
    productId: {
      type: String,
      required: [true, "Product id is required."],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
      min: [0, "Price must be >= 0."],
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required."],
      min: [1, "Product quantity must be >= 1"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Order = model<IOrder>("Order", orderSchema);