import { Router } from "express";
import { createProduct, getAllProducts, getSingleProduct, updateSingleProduct } from "./product.controller";

const router = Router();

router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:productId", getSingleProduct);
router.put("/products/:productId", updateSingleProduct);

export default router;