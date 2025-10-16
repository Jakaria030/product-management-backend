import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../utils";
import { createOrderIntoDB, getAllOrdersFromDB } from "./order.service";
import ZOrder from "./order.validation";

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newOrder = req.body;

    const parsedNewOrder = ZOrder.parse(newOrder);

    const insertedOrder = await createOrderIntoDB(parsedNewOrder);

    return res.status(201).json({ success: true, message: "Order created successfully!", data: insertedOrder });
  } catch (error: any) {
    next(error);
  }
};

export const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.query;

    const getOrders = await getAllOrdersFromDB(email as string | undefined);

    if (!getOrders || getOrders.length === 0) {
      throw new ApiError(404, "Orders not found!");
    }

    return res.status(200).json({ success: true, message: "Orders fetched successfully!", data: getOrders });
  } catch (error: any) {
    next(error);
  }
};