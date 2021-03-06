import { Router } from "express";
import { add, deleteOne, getAll, getById, update, seed, statistics } from "./controller";
import validator from "../../utils/joi-validator";
import authMiddleware from "../../utils/auth-middleware";
import { addSchema, updateSchema } from "./joi";

const router = Router();

router.get("/seed", seed);
router.get("/", authMiddleware, getAll);
router.get("/statistics", statistics)
router.get("/:id", authMiddleware, getById);
router.patch("/:id", authMiddleware, validator(updateSchema), update);
router.post("/", authMiddleware, validator(addSchema), add);
router.delete("/:id", authMiddleware, deleteOne)

export default router;