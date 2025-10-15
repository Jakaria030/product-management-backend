import { model, Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Product name is required."],
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, "Description is required."],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
      min: [0, "Price must be a positive number."],
    },
    category: {
      type: String,
      required: [true, "Product category is required."],
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    variants: [
      {
        _id: false,
        type: {
          type: String,
          required: [true, "Variant type is required."],
          trim: true
        },
        value: {
          type: String,
          required: [true, "Variant value is required."],
          trim: true,
        },
      },
    ],
    inventory: {
      quantity: {
        type: Number,
        required: [true, "Inventory quantity is required."],
        min: [0, "Quantity cannot be negative."],
      },
      inStock: {
        type: Boolean,
        default: true,
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product = model<IProduct>("Product", productSchema);