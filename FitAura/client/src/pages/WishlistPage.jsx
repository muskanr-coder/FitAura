import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

const WishlistPage = () => {
  const { wishlist, removeItem } = useWishlist();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-4xl dark:text-white">Wishlist</h1>

      {!wishlist.products?.length ? (
        <section className="mt-8 rounded-3xl bg-white p-10 text-center shadow-soft dark:bg-zinc-900">
          <p className="text-zinc-600 dark:text-zinc-300">No saved items yet.</p>
          <Link to="/products" className="btn-primary mt-5 inline-block">
            Explore Products
          </Link>
        </section>
      ) : (
        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.products.map((product) => (
            <article key={product._id} className="rounded-3xl bg-white p-4 shadow-soft dark:bg-zinc-900">
              <img src={product.images?.[0]} alt={product.name} className="h-64 w-full rounded-2xl object-cover" />
              <h3 className="mt-3 font-semibold dark:text-zinc-100">{product.name}</h3>
              <p className="mt-1 text-sm text-zinc-500">₹{(product.discountPrice || product.price).toFixed(2)}</p>
              <div className="mt-4 flex gap-2">
                <Link to={`/products/${product._id}`} className="btn-secondary flex-1 text-center">
                  View
                </Link>
                <button onClick={() => removeItem(product._id)} className="btn-primary flex-1">
                  Remove
                </button>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default WishlistPage;
