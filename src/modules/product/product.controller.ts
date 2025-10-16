import { Request, Response } from "express";
import { deleteSingleProductFromDB, getAllProductsFromDB, getSingleProductFromDB, insertProductIntoDB, updateSingleProductInDB } from "./product.service";
import ZProduct from "./product.validation";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = req.body;
    const parsedNewProduct = ZProduct.parse(newProduct);

    const insertedProduct = await insertProductIntoDB(parsedNewProduct);

    return res.status(201).json({ success: true, message: "Product created successfully!", data: insertedProduct })
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    const getProducts = await getAllProductsFromDB(searchTerm as string | undefined);

    if (!getProducts || getProducts.length === 0) {
      return res.status(400).json({ success: false, message: "Products not found!" });
    }

    return res.status(200).json({ success: true, message: "Products fetched successfully!", data: getProducts });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const getProduct = await getSingleProductFromDB(productId);

    return res.status(200).json({ success: true, message: "Product fetched successfully!", data: getProduct });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateProduct = req.body;

    const updatedProduct = await updateSingleProductInDB(productId, updateProduct);

    return res.status(200).json({ success: true, message: "Product updated successfully!", data: updatedProduct });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const deletedProduct = await deleteSingleProductFromDB(productId);

    return res.status(200).json({ success: true, message: "Product deleted successfully!", data: deletedProduct });
  } catch (error: any) {
    throw new Error(error.message);
  }
};