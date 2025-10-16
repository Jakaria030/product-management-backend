import { ApiError } from "../../utils";
import { Product } from "../product/product.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

export const createOrderIntoDB = async (newOrder: IOrder) => {
  try {
    const product = await Product.findById(newOrder.productId);

    if (!product) {
      throw new ApiError(404, "Product not found!");
    }

    const isAvailable = product.inventory.quantity >= newOrder.quantity;

    if (!isAvailable) {
      throw new ApiError(404, "Insuficient qunatity!");
    }

    const insertedOrder = await Order.create(newOrder);

    product.inventory.quantity -= newOrder.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;

    await product.save();

    return insertedOrder;
  } catch (error: any) {
    const status = error.status || 500;
    const message = error.message || "Failed to insert order into DB.";
    throw new ApiError(status, message);
  }
};

export const getAllOrdersFromDB = async (email?: string) => {
  try {
    const filter = email ? { email } : {};
    const getOrders = await Order.find(filter).select("-createdAt -updatedAt");

    return getOrders;
  } catch (_error: any) {
    throw new ApiError(500, "Failed to get all orders from DB.")
  }
};