import { createContext, useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { userAPI } from "../services/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return null;
    }
  });
  const [loading, setLoading] = useState(false);

  const saveAuth = ({ token, user: userInfo }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userInfo));
    setUser(userInfo);
  };

  const login = async (payload) => {
    setLoading(true);
    try {
      const data = await userAPI.login({
        email: payload.email.trim().toLowerCase(),
        password: payload.password.trim()
      });
      saveAuth(data);
      toast.success("Welcome back!");
      return true;
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Login failed"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (payload) => {
    setLoading(true);
    try {
      const data = await userAPI.register({
        name: payload.name.trim(),
        email: payload.email.trim().toLowerCase(),
        password: payload.password.trim()
      });
      saveAuth(data);
      toast.success("Account created");
      return true;
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Registration failed"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out");
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: Boolean(user),
      login,
      register,
      logout
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
