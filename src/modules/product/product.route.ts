import { Router } from "express";
import { createProduct, deleteSingleProduct, getAllProducts, getSingleProduct, updateSingleProduct } from "./product.controller";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:productId", getSingleProduct);
router.put("/:productId", updateSingleProduct);
router.delete("/:productId", deleteSingleProduct);

export default router;