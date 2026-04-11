import Wishlist from "../models/Wishlist.js";

export const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) return res.status(400).json({ message: "productId is required" });

    let wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) {
      wishlist = await Wishlist.create({ user: req.user.id, products: [productId] });
    } else if (!wishlist.products.find((id) => id.toString() === productId)) {
      wishlist.products.push(productId);
      await wishlist.save();
    }

    const populated = await Wishlist.findOne({ user: req.user.id }).populate("products");
    return res.status(201).json(populated);
  } catch (error) {
    return res.status(500).json({ message: "Failed to update wishlist", error: error.message });
  }
};

export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id }).populate("products");
    if (!wishlist) return res.json({ user: req.user.id, products: [] });
    return res.json(wishlist);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch wishlist", error: error.message });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const { productId } = req.params;
    const wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) return res.status(404).json({ message: "Wishlist not found" });

    wishlist.products = wishlist.products.filter((id) => id.toString() !== productId);
    await wishlist.save();

    const updated = await Wishlist.findOne({ user: req.user.id }).populate("products");
    return res.json(updated);
  } catch (error) {
    return res.status(500).json({ message: "Failed to remove item", error: error.message });
  }
};
