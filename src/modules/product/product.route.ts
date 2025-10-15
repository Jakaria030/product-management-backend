import { Router } from "express";
import { createProduct, deleteSingleProduct, getAllProducts, getSingleProduct, updateSingleProduct } from "./product.controller";

const router = Router();

router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:productId", getSingleProduct);
router.put("/products/:productId", updateSingleProduct);
router.delete("/products/:productId", deleteSingleProduct);

export default router;