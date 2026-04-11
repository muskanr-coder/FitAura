import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";
import SkeletonCard from "../components/SkeletonCard";
import { productAPI } from "../services/api";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const queryCategory = searchParams.get("category") || "All";

  const [filters, setFilters] = useState({
    search: "",
    category: queryCategory,
    sort: "latest",
    maxPrice: ""
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, category: queryCategory }));
  }, [queryCategory]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = {
          search: filters.search,
          category: filters.category,
          sort: filters.sort,
          maxPrice: filters.maxPrice || undefined
        };
        const data = await productAPI.getProducts(params);
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchProducts, 300);
    return () => clearTimeout(timer);
  }, [filters]);

  const countLabel = useMemo(() => `${products.length} styles found`, [products.length]);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <section className="rounded-3xl bg-gradient-to-r from-white to-sand/40 px-6 py-10 dark:from-zinc-900 dark:to-zinc-800">
        <h1 className="font-display text-4xl dark:text-white">Shop Collection</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{countLabel}</p>
      </section>

      <FilterBar filters={filters} setFilters={setFilters} />

      {loading && (
        <div className="mt-8">
          <LoadingSpinner />
          <div className="mt-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      )}

      {!loading && (
        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
};

export default ProductsPage;
