import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    if (!productId) return res.status(400).json({ message: "productId is required" });

    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      cart = await Cart.create({
        user: req.user.id,
        items: [{ product: productId, quantity }]
      });
    } else {
      const existingItem = cart.items.find((item) => item.product.toString() === productId);
      if (existingItem) {
        existingItem.quantity += Number(quantity);
      } else {
        cart.items.push({ product: productId, quantity });
      }
      await cart.save();
    }

    const populatedCart = await Cart.findOne({ user: req.user.id }).populate("items.product");
    return res.status(201).json(populatedCart);
  } catch (error) {
    return res.status(500).json({ message: "Failed to update cart", error: error.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");
    if (!cart) return res.json({ user: req.user.id, items: [] });
    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch cart", error: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const cart = await Cart.findOne({ user: req.user.id });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter((item) => item.product.toString() !== productId);
    await cart.save();

    const updatedCart = await Cart.findOne({ user: req.user.id }).populate("items.product");
    return res.json(updatedCart);
  } catch (error) {
    return res.status(500).json({ message: "Failed to remove item", error: error.message });
  }
};
