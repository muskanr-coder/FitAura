import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, subtotal, removeItem, clearCart, loading } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    address: "",
    mobileNumber: "",
    pincode: ""
  });
  const shipping = subtotal > 120 ? 0 : 8;
  const total = subtotal + shipping;

  const handleCheckout = async () => {
    const normalizedName = customerInfo.name.trim();
    const normalizedAddress = customerInfo.address.trim();
    const normalizedMobileNumber = customerInfo.mobileNumber.trim();
    const normalizedPincode = customerInfo.pincode.trim();

    if (!normalizedName || !normalizedAddress || !normalizedMobileNumber || !normalizedPincode) {
      toast.error("Please fill in all delivery details");
      return;
    }

    if (!/^\d{10}$/.test(normalizedMobileNumber)) {
      toast.error("Enter a valid 10-digit mobile number");
      return;
    }

    if (!/^\d{6}$/.test(normalizedPincode)) {
      toast.error("Enter a valid 6-digit pincode");
      return;
    }

    const ok = await clearCart();

    if (ok) {
      setCustomerInfo({
        name: "",
        address: "",
        mobileNumber: "",
        pincode: ""
      });
      toast.success("Order placed successfully");
    }
  };

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

            <div className="mt-6 space-y-3">
              <p className="text-sm font-semibold text-ink dark:text-white">Delivery Details</p>
              <input
                type="text"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Full Name"
                className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-ink dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-white"
              />
              <textarea
                rows="3"
                value={customerInfo.address}
                onChange={(e) => setCustomerInfo((prev) => ({ ...prev, address: e.target.value }))}
                placeholder="Address"
                className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-ink dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-white"
              />
              <input
                type="tel"
                inputMode="numeric"
                maxLength="10"
                value={customerInfo.mobileNumber}
                onChange={(e) =>
                  setCustomerInfo((prev) => ({
                    ...prev,
                    mobileNumber: e.target.value.replace(/\D/g, "").slice(0, 10)
                  }))
                }
                placeholder="Mobile Number"
                className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-ink dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-white"
              />
              <input
                type="text"
                inputMode="numeric"
                maxLength="6"
                value={customerInfo.pincode}
                onChange={(e) =>
                  setCustomerInfo((prev) => ({
                    ...prev,
                    pincode: e.target.value.replace(/\D/g, "").slice(0, 6)
                  }))
                }
                placeholder="Pincode"
                className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-ink dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-white"
              />
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="btn-primary mt-5 w-full"
            >
              {loading ? "Processing..." : "Checkout"}
            </button>
          </aside>
        </section>
      )}
    </main>
  );
};

export default CartPage;
