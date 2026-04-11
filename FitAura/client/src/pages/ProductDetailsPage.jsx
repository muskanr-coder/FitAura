import { Heart, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { productAPI } from "../services/api";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { addItem } = useCart();
  const { ids, addItem: addWishlistItem, removeItem: removeWishlistItem } = useWishlist();

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        const data = await productAPI.getProductById(id);
        setProduct(data);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!product) return <p className="py-12 text-center">Product not found.</p>;

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
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <img
            src={product.images?.[activeImage]}
            alt={product.name}
            className="h-[540px] w-full rounded-3xl object-cover shadow-soft"
          />
          <div className="grid grid-cols-3 gap-3">
            {product.images?.map((img, index) => (
              <button key={img} onClick={() => setActiveImage(index)} className="overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={`h-24 w-full object-cover transition ${activeImage === index ? "scale-95 opacity-90" : "hover:scale-105"}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{product.brand}</p>
          <h1 className="font-display text-4xl dark:text-white">{product.name}</h1>
          <p className="text-zinc-600 dark:text-zinc-300">{product.description}</p>
          <p className="text-3xl font-semibold dark:text-white">
            ₹{(product.discountPrice || product.price).toFixed(2)}
          </p>
          <p className="text-sm text-zinc-500">Category: {product.category}</p>
          <p className="text-sm text-zinc-500">Available sizes: {product.sizes?.join(", ")}</p>

          <div className="flex flex-wrap gap-3 pt-3">
            <button onClick={addToCart} className="btn-primary">
              <span className="inline-flex items-center gap-2">
                <ShoppingBag size={16} />
                Add to Cart
              </span>
            </button>
            <button onClick={toggleWishlist} className="btn-secondary">
              <span className="inline-flex items-center gap-2">
                <Heart size={16} />
                {isInWishlist ? "Remove Wishlist" : "Add Wishlist"}
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
