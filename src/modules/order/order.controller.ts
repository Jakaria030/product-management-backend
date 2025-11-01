import { Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler } from "../../utils";
import { createOrderIntoDB, getAllOrdersFromDB } from "./order.service";
import ZOrder from "./order.validation";

export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const newOrder = req.body;

  const parsedNewOrder = ZOrder.parse(newOrder);

  const insertedOrder = await createOrderIntoDB(parsedNewOrder);

  return res.status(201).json(new ApiResponse(201, "Order created successfully!", insertedOrder));
});

export const getAllOrders = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.query;

  const getOrders = await getAllOrdersFromDB(email as string | undefined);

  if (!getOrders || getOrders.length === 0) {
    throw new ApiError(404, "Orders not found!");
  }

  return res.status(200).json(new ApiResponse(200, "Orders fetched successfully!", getOrders));

})