import { createContext, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { cartAPI } from "../services/api";
import { useAuth } from "./AuthContext";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(false);

  const refreshCart = async () => {
    if (!isAuthenticated) {
      setCart({ items: [] });
      return;
    }

    try {
      const data = await cartAPI.getCart();
      setCart(data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Could not load cart");
    }
  };

  useEffect(() => {
    refreshCart();
  }, [isAuthenticated]);

  const addItem = async (productId) => {
    setLoading(true);
    try {
      const data = await cartAPI.addToCart({ productId, quantity: 1 });
      setCart(data);
      toast.success("Added to cart");
    } catch (error) {
      toast.error(error.response?.data?.message || "Add to cart failed");
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (productId) => {
    try {
      const data = await cartAPI.removeFromCart(productId);
      setCart(data);
      toast.success("Removed from cart");
    } catch (error) {
      toast.error(error.response?.data?.message || "Remove failed");
    }
  };

  const clearCart = async () => {
    setLoading(true);
    try {
      const data = await cartAPI.clearCart();
      setCart(data);
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Could not clear cart");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const subtotal = cart.items?.reduce((sum, item) => {
    const unit = item.product?.discountPrice || item.product?.price || 0;
    return sum + unit * item.quantity;
  }, 0);

  const value = useMemo(
    () => ({
      cart,
      loading,
      itemCount: cart.items?.length || 0,
      subtotal,
      addItem,
      removeItem,
      clearCart,
      refreshCart
    }),
    [cart, loading, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
