import { Heart, Moon, ShoppingBag, Sun, User } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Shop" },
  { to: "/products?category=Women", label: "Women" },
  { to: "/products?category=Men", label: "Men" }
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  const logoutAndGoHome = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/85">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-display text-2xl tracking-wide text-ink dark:text-white">
          FitAura
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? "text-ink dark:text-white font-semibold" : "text-zinc-600 hover:text-ink dark:text-zinc-300 dark:hover:text-white"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleDarkMode}
            className="rounded-full p-2 text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link to="/wishlist" className="relative rounded-full p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Heart size={18} />
            <span className="absolute -right-0.5 -top-0.5 rounded-full bg-ink px-1.5 text-[10px] text-white dark:bg-white dark:text-ink">
              {wishlist?.products?.length || 0}
            </span>
          </Link>

          <Link to="/cart" className="relative rounded-full p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <ShoppingBag size={18} />
            <span className="absolute -right-0.5 -top-0.5 rounded-full bg-ink px-1.5 text-[10px] text-white dark:bg-white dark:text-ink">
              {itemCount}
            </span>
          </Link>

          {isAuthenticated ? (
            <button onClick={logoutAndGoHome} className="btn-secondary px-3 py-2 text-xs sm:text-sm">
              {user?.name?.split(" ")[0] || "Account"} | Logout
            </button>
          ) : (
            <Link to="/login" className="btn-primary inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm">
              <User size={14} />
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
