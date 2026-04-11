import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist
} from "../controllers/wishlistController.js";

const router = express.Router();

router.post("/", authMiddleware, addToWishlist);
router.get("/", authMiddleware, getWishlist);
router.delete("/:productId", authMiddleware, removeFromWishlist);

export default router;
