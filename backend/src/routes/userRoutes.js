import { Router } from "express";
const router = Router();
import {
  signup,
  login,
  getUserProfile,
  updateProfile,
} from "../controllers/userController";

router.post("/signup", signup);
router.post("/login", login);
router.get("/:id", getUserProfile);
router.put("/profile/:id", updateProfile);

export default router;
