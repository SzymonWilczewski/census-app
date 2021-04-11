import { Router } from "express";
import { add, getAll, getById, update } from "./controller";
import validator from "../../utils/joi-validator";
import authMiddleware from "../../utils/auth-middleware";
import { addSchema, updateSchema } from "./joi";

const router = Router();

router.get("/", authMiddleware, getAll);
router.get("/:id", authMiddleware, getById);
router.patch("/:id", authMiddleware, validator(updateSchema), update);
router.post("/", authMiddleware, validator(addSchema), add);

export default router;