import { Router } from "express"
import { getOrders, createOrder, updateOrder, deleteOrder } from "../controllers/orderController.js"
import { authMiddleware } from "../middleware/auth.js";

const router = Router()

router.get("/", authMiddleware, getOrders)
router.post("/", authMiddleware, createOrder)
router.put("/:id", authMiddleware, updateOrder)
router.delete("/:id", authMiddleware, deleteOrder)

export default router

