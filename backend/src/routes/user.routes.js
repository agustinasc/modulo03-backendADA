import { Router } from "express";
import {registerUser, loginUser} from "../controllers/userController.js"
import { validateUser } from "../middleware/validate.js";

const router = Router()

router.post("/register", validateUser, registerUser)
router.post("/login", loginUser)

export default router;