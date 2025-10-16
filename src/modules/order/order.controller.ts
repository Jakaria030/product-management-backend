import { NextFunction, Request, Response } from "express";
import { createOrderIntoDB } from "./order.service";
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