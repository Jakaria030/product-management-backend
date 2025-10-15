import { Router } from "express";
import { createProduct, getAllProducts, getSingleProduct } from "./product.controller";

const router = Router();

router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:productId", getSingleProduct);

export default router;