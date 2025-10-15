import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const insertProductIntoDB = async (newProduct: IProduct) => {
  try {
    const insertedProduct = await Product.create(newProduct);

    return insertedProduct;
  } catch (_error: any) {
    throw new Error("Failed to insert product into DB.");
  }
};

export const getAllProductsFromDB = async () => {
  try {
    const getProducts = await Product.find().select("-createdAt -updatedAt");

    return getProducts;
  } catch (_error: any) {
    throw new Error("Failed to get all products from DB.");
  }
};