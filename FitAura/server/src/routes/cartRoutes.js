import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addToCart, clearCart, getCart, removeFromCart } from "../controllers/cartController.js";

const router = express.Router();

router.post("/", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);
router.delete("/", authMiddleware, clearCart);
router.delete("/:productId", authMiddleware, removeFromCart);

export default router;
