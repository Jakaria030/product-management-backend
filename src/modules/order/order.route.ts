import { Router } from "express";
import { createOrder, getAllOrders } from "./order.controller";

const router = Router();

router.post("/", createOrder);
router.get("/", getAllOrders);

export default router;