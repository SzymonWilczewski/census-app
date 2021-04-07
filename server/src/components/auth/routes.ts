import { Router } from "express";
import { login, register, logout, isAuth } from "./controller";
import { loginSchema, registerSchema } from "./joi";
import authMiddleware from "../../utils/auth-middleware";
import validator from "../../utils/joi-validator";

const router = Router();

router.get("/", authMiddleware, isAuth);
router.post("/login", validator(loginSchema), login);
router.post("/register", validator(registerSchema), register);
router.get("/logout", logout);

export default router;