import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, subtotal, removeItem } = useCart();
  const shipping = subtotal > 120 ? 0 : 8;
  const total = subtotal + shipping;

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-4xl dark:text-white">Your Cart</h1>

      {!cart.items?.length ? (
        <section className="mt-8 rounded-3xl bg-white p-10 text-center shadow-soft dark:bg-zinc-900">
          <p className="text-zinc-600 dark:text-zinc-300">Your cart is empty.</p>
          <Link to="/products" className="btn-primary mt-5 inline-block">
            Continue Shopping
          </Link>
        </section>
      ) : (
        <section className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {cart.items.map(({ product, quantity }) => (
              <article
                key={product._id}
                className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-soft dark:bg-zinc-900"
              >
                <img src={product.images?.[0]} alt={product.name} className="h-24 w-20 rounded-2xl object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold dark:text-zinc-100">{product.name}</h3>
                  <p className="text-sm text-zinc-500">Qty: {quantity}</p>
                  <p className="text-sm font-semibold dark:text-zinc-200">
                    ₹{((product.discountPrice || product.price) * quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(product._id)}
                  className="rounded-full border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  Remove
                </button>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-3xl bg-white p-6 shadow-soft dark:bg-zinc-900">
            <h2 className="font-display text-2xl dark:text-white">Order Summary</h2>
            <div className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between border-t border-zinc-200 pt-3 text-base font-semibold text-ink dark:border-zinc-700 dark:text-white">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            <button className="btn-primary mt-5 w-full">Checkout</button>
          </aside>
        </section>
      )}
    </main>
  );
};

export default CartPage;
