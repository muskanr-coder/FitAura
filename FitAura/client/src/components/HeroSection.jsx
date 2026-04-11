import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#f8efe5] via-[#f9f6f1] to-[#f1e8de] px-6 py-20 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 md:px-12">
      <div className="absolute -left-10 top-0 h-44 w-44 rounded-full bg-white/70 blur-2xl dark:bg-zinc-700/20" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#dfc9b2]/40 blur-2xl dark:bg-zinc-700/20" />

      <div className="relative grid items-center gap-10 md:grid-cols-2">
        <div className="fade-up space-y-6">
          <p className="inline-block rounded-full bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.25em] text-taupe dark:bg-zinc-800 dark:text-zinc-300">
            Spring Edit 2026
          </p>
          <h1 className="font-display text-4xl leading-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
            Redefine Your
            <span className="block">Everyday Luxury</span>
          </h1>
          <p className="max-w-md text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
            Elevated essentials with modern silhouettes, premium fabrics, and timeless styling.
          </p>
          <Link to="/products" className="btn-primary inline-block">
            Shop Now
          </Link>
        </div>

        <div className="fade-up">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80"
            alt="Fashion hero banner"
            className="h-[460px] w-full rounded-3xl object-cover shadow-soft"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
