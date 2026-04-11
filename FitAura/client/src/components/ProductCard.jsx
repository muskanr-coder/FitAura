import { Heart, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { addItem } = useCart();
  const { ids, addItem: addWishlistItem, removeItem: removeWishlistItem } = useWishlist();

  const isInWishlist = ids.has(product._id);

  const addToCart = () => {
    if (!isAuthenticated) {
      toast("Please login to add items");
      navigate("/login");
      return;
    }
    addItem(product._id);
  };

  const toggleWishlist = () => {
    if (!isAuthenticated) {
      toast("Please login to use wishlist");
      navigate("/login");
      return;
    }
    if (isInWishlist) removeWishlistItem(product._id);
    else addWishlistItem(product._id);
  };

  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-zinc-900">
      <div className="relative overflow-hidden">
        <Link to={`/products/${product._id}`}>
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </Link>
        <button
          onClick={toggleWishlist}
          className={`absolute right-3 top-3 rounded-full p-2 backdrop-blur ${isInWishlist ? "bg-ink text-white dark:bg-white dark:text-ink" : "bg-white/70 text-ink dark:bg-zinc-900/70 dark:text-white"}`}
          aria-label="Toggle wishlist"
        >
          <Heart size={16} />
        </button>
      </div>

      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{product.brand}</p>
        <Link to={`/products/${product._id}`} className="font-semibold text-ink dark:text-zinc-100">
          {product.name}
        </Link>

        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">₹{(product.discountPrice || product.price).toFixed(2)}</p>
          {product.discountPrice && (
            <p className="text-sm text-zinc-400 line-through">₹{product.price.toFixed(2)}</p>
          )}
        </div>

        <button onClick={addToCart} className="btn-primary w-full">
          <span className="inline-flex items-center gap-2">
            <ShoppingBag size={15} />
            Add to Cart
          </span>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
