import { ApiError } from "../../utils";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const insertProductIntoDB = async (newProduct: IProduct) => {
  try {
    const insertedProduct = await Product.create(newProduct);

    return insertedProduct;
  } catch (_error: any) {
    throw new ApiError(500, "Failed to insert product into DB.");
  }
};

export const getAllProductsFromDB = async (searchTerm?: string) => {
  try {
    const filter = searchTerm ? { name: { $regex: searchTerm, $options: "i" } } : {};
    const getProducts = await Product.find(filter).select("-createdAt -updatedAt");

    return getProducts;
  } catch (_error: any) {
    throw new ApiError(500, "Failed to get all products from DB.");
  }
};

export const getSingleProductFromDB = async (productId: string) => {
  try {
    const getProduct = await Product.findById(productId).select("-createdAt -updatedAt");

    return getProduct;
  } catch (_error: any) {
    throw new ApiError(500, "Failed to get single product from DB.");
  }
};

export const updateSingleProductInDB = async (productId: string, updateProduct: IProduct) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, updateProduct, { new: true, runValidators: true });

    return updatedProduct;
  } catch (_error: any) {
    throw new ApiError(500, "Failed to update product information in DB.");
  }
};

export const deleteSingleProductFromDB = async (productId: string) => {
  try {
    await Product.deleteOne({ _id: productId });

    return null;
  } catch (_error: any) {
    throw new ApiError(500, "Failed to delete product from DB.");
  }
};