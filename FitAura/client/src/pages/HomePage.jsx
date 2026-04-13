import { useEffect, useState } from "react";
import FashionSlideshow from "../components/FashionSlideshow";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";
import { productAPI } from "../services/api";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const data = await productAPI.getProducts({ featured: true, sort: "latest" });
        setProducts(data.slice(0, 4));
      } finally {
        setLoading(false);
      }
    };

    loadFeatured();
  }, []);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <HeroSection />
      <FashionSlideshow />

      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl text-ink dark:text-white sm:text-4xl">Featured Picks</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Curated pieces that define the season.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
            : products.map((product) => <ProductCard key={product._id} product={product} />)}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
