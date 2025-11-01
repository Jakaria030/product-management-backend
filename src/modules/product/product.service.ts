import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const insertProductIntoDB = async (newProduct: IProduct) => {
  const insertedProduct = await Product.create(newProduct);

  return insertedProduct;
};

export const getAllProductsFromDB = async (searchTerm?: string) => {
  const filter = searchTerm ? { name: { $regex: searchTerm, $options: "i" } } : {};
  const getProducts = await Product.find(filter).select("-createdAt -updatedAt");

  return getProducts;
};

export const getSingleProductFromDB = async (productId: string) => {
  const getProduct = await Product.findById(productId).select("-createdAt -updatedAt");

  return getProduct;
};

export const updateSingleProductInDB = async (productId: string, updateProduct: IProduct) => {
  const updatedProduct = await Product.findByIdAndUpdate(productId, updateProduct, { new: true, runValidators: true });

  return updatedProduct;
};

export const deleteSingleProductFromDB = async (productId: string) => {
  await Product.deleteOne({ _id: productId });

  return null;
};