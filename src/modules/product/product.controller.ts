import { Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler } from "../../utils";
import { deleteSingleProductFromDB, getAllProductsFromDB, getSingleProductFromDB, insertProductIntoDB, updateSingleProductInDB } from "./product.service";
import ZProduct from "./product.validation";

export const createProduct = asyncHandler(async (req: Request, res: Response) => {
  const newProduct = req.body;
  const parsedNewProduct = ZProduct.parse(newProduct);

  const insertedProduct = await insertProductIntoDB(parsedNewProduct);

  return res.status(201).json(new ApiResponse(201, "Product created successfully!", insertedProduct));
});

export const getAllProducts = asyncHandler(async (req: Request, res: Response) => {
  const { searchTerm } = req.query;

  const getProducts = await getAllProductsFromDB(searchTerm as string | undefined);

  if (!getProducts || getProducts.length === 0) {
    throw new ApiError(404, "Products not found!");
  }

  return res.status(200).json(new ApiResponse(200, "Products fetched successfully!", getProducts));
});

export const getSingleProduct = asyncHandler(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const getProduct = await getSingleProductFromDB(productId);

  return res.status(200).json(new ApiResponse(200, "Product fetched successfully!", getProduct));
});

export const updateSingleProduct = asyncHandler(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const updateProduct = req.body;

  const updatedProduct = await updateSingleProductInDB(productId, updateProduct);

  return res.status(200).json(new ApiResponse(200, "Product updated successfully!", updatedProduct));
});

export const deleteSingleProduct = asyncHandler(async (req: Request, res: Response) => {
  const { productId } = req.params;

  const deletedProduct = await deleteSingleProductFromDB(productId);

  return res.status(200).json(new ApiResponse(200, "Product deleted successfully!", deletedProduct));
});