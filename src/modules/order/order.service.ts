import { ApiError } from "../../utils";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

export const createOrderIntoDB = async (newOrder: IOrder) => {
  try {
    const insertedOrder = await Order.create(newOrder);

    return insertedOrder;
  } catch (_error: any) {
    throw new ApiError(500, "Failed to insert order into DB.")
  }
};