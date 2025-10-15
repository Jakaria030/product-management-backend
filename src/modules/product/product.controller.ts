import { Request, Response } from "express";
import { insertProductIntoDB } from "./product.service";
import ZProduct from "./product.validation";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = req.body;
    const parsedNewProduct = ZProduct.parse(newProduct);

    const insertedProduct = await insertProductIntoDB(parsedNewProduct);

    res.status(201).json({ success: true, message: "Product created successfully!", data: insertedProduct })
  } catch (error: any) {
    throw new Error(error.message);
  }
};