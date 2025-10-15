import { Router } from "express";
import { createProduct } from "./product.controller";

const router = Router();

router.post("/products", createProduct);

export default router;