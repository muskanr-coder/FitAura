import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://fitaura-pv1i.onrender.com/api"; // 👈 /api add kiya

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Products
export const productAPI = {
  getProducts: async (params) => {
    const { data } = await api.get("/products", { params });
    return data;
  },
  getProductById: async (id) => {
    const { data } = await api.get(`/products/${id}`);
    return data;
  }
};

// Users (Auth)
export const userAPI = {
  register: async (payload) => {
    const { data } = await api.post("/users/register", payload);
    return data;
  },
  login: async (payload) => {
    const { data } = await api.post("/users/login", payload);
    return data;
  }
};

// Cart
export const cartAPI = {
  getCart: async () => {
    const { data } = await api.get("/cart");
    return data;
  },
  addToCart: async (payload) => {
    const { data } = await api.post("/cart", payload);
    return data;
  },
  removeFromCart: async (productId) => {
    const { data } = await api.delete(`/cart/${productId}`);
    return data;
  },
  clearCart: async () => {
    const { data } = await api.delete("/cart");
    return data;
  }
};

// Wishlist
export const wishlistAPI = {
  getWishlist: async () => {
    const { data } = await api.get("/wishlist");
    return data;
  },
  addToWishlist: async (payload) => {
    const { data } = await api.post("/wishlist", payload);
    return data;
  },
  removeFromWishlist: async (productId) => {
    const { data } = await api.delete(`/wishlist/${productId}`);
    return data;
  }
};

export default api;