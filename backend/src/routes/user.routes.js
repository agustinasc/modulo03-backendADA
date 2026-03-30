import { Router } from "express";
import {registerUser, loginUser} from "../controllers/userController.js"
import { validateUser } from "../middleware/validate.js";

const router = Router()

router.post("/register",  registerUser)
router.post("/login", validateUser(["email", "password"]), loginUser)

export default router;