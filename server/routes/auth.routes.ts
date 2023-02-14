import { Router } from "express";
import { loginHandler, profileHandler, test } from "../controllers/auth.controller";
import { requireaAuth } from "../middlewares/requireAuth";

const router = Router()

router.post("/login", loginHandler)
router.get("/profile", requireaAuth, profileHandler)
router.get("/test", test)

export default router