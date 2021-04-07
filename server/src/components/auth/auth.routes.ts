import { Router } from "express";
import { login, register, logout, isAuth } from "./auth.controller";
import authMiddleware from "../../auth-middleware";

const router = Router();

router.get("/", authMiddleware, isAuth);
router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);

export default router;