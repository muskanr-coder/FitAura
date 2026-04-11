import { createContext, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { wishlistAPI } from "../services/api";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [wishlist, setWishlist] = useState({ products: [] });

  const refreshWishlist = async () => {
    if (!isAuthenticated) {
      setWishlist({ products: [] });
      return;
    }
    try {
      const data = await wishlistAPI.getWishlist();
      setWishlist(data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Could not load wishlist");
    }
  };

  useEffect(() => {
    refreshWishlist();
  }, [isAuthenticated]);

  const addItem = async (productId) => {
    try {
      const data = await wishlistAPI.addToWishlist({ productId });
      setWishlist(data);
      toast.success("Added to wishlist");
    } catch (error) {
      toast.error(error.response?.data?.message || "Wishlist update failed");
    }
  };

  const removeItem = async (productId) => {
    try {
      const data = await wishlistAPI.removeFromWishlist(productId);
      setWishlist(data);
      toast.success("Removed from wishlist");
    } catch (error) {
      toast.error(error.response?.data?.message || "Remove failed");
    }
  };

  const ids = useMemo(
    () => new Set((wishlist.products || []).map((item) => item._id || item.toString())),
    [wishlist.products]
  );

  const value = useMemo(
    () => ({ wishlist, ids, addItem, removeItem, refreshWishlist }),
    [wishlist, ids]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within WishlistProvider");
  return context;
};
