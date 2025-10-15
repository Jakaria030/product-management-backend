import { Request, Response } from "express";
import { getAllProductsFromDB, insertProductIntoDB } from "./product.service";
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

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const getProducts = await getAllProductsFromDB();

    res.status(200).json({ success: true, message: "Products fetched successfully!", data: getProducts });
  } catch (error: any) {
    throw new Error(error.message);
  }
};