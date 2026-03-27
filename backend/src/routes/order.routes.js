import { Router } from "express"
import { getOrders, createOrder, updateOrder, deleteOrder } from "../controllers/orderController.js"
import { verifyToken } from "../middleware/auth.js";

const router = Router()

router.get("/", verifyToken, getOrders)
router.post("/", verifyToken, createOrder)
router.put("/:id", verifyToken, updateOrder)
router.delete("/:id", verifyToken, deleteOrder)

export default router

