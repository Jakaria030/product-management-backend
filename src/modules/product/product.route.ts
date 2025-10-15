import { Router } from "express";
import { createProduct, getAllProducts } from "./product.controller";

const router = Router();

router.post("/products", createProduct);
router.get("/products", getAllProducts);

export default router;