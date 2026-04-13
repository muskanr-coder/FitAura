import { Link } from "react-router-dom";

const shopLinks = [
  { label: "New Arrivals", to: "/products" },
  { label: "Women", to: "/products?category=Women" },
  { label: "Men", to: "/products?category=Men" },
  { label: "Accessories", to: "/products?category=Accessories" }
];

const helpLinks = [
  { label: "My Cart", to: "/cart" },
  { label: "Wishlist", to: "/wishlist" },
  { label: "Login", to: "/login" },
  { label: "Create Account", to: "/register" }
];

const Footer = () => {
  return (
    <footer className="mt-24 overflow-hidden border-t border-zinc-200 bg-gradient-to-b from-white via-[#f7efe8] to-[#ead9cc] dark:border-zinc-800 dark:from-[#201015] dark:via-[#2a141b] dark:to-[#15090d]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <section className="grid gap-10 rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_25px_80px_rgba(76,45,31,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_25px_80px_rgba(0,0,0,0.35)] lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="max-w-md">
            <p className="font-display text-4xl tracking-wide text-ink dark:text-white">FitAura</p>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Elevated essentials for everyday confidence. Discover clean silhouettes, modern
              layers, and premium styling made to move with your lifestyle.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              <span className="rounded-full bg-white px-4 py-2 dark:bg-white/10">Premium Fabrics</span>
              <span className="rounded-full bg-white px-4 py-2 dark:bg-white/10">Easy Returns</span>
              <span className="rounded-full bg-white px-4 py-2 dark:bg-white/10">Fast Delivery</span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              Shop
            </p>
            <div className="mt-5 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              {shopLinks.map((item) => (
                <Link key={item.label} to={item.to} className="block transition hover:text-ink dark:hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              Help
            </p>
            <div className="mt-5 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              {helpLinks.map((item) => (
                <Link key={item.label} to={item.to} className="block transition hover:text-ink dark:hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              <p>support@fitaura.com</p>
              <p>+91 98765 43210</p>
              <p>22 Style Avenue, Bengaluru, India</p>
              <p>Mon to Sat, 10:00 AM to 7:00 PM</p>
            </div>
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-4 border-t border-zinc-300/70 pt-6 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Designed for sharper wardrobes and smoother shopping.</p>
          <p>© {new Date().getFullYear()} FitAura. All rights reserved.</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
