const categories = ["All", "Women", "Men", "Accessories", "Footwear"];

const FilterBar = ({ filters, setFilters }) => {
  return (
    <section className="glass-panel mt-8 rounded-3xl p-4 sm:p-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <input
          value={filters.search}
          onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
          placeholder="Search styles..."
          className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-ink dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-white"
        />

        <select
          value={filters.category}
          onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
          className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-ink dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-white"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={filters.sort}
          onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
          className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-ink dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-white"
        >
          <option value="latest">Newest</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>

        <input
          type="number"
          min="0"
          value={filters.maxPrice}
          onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))}
          placeholder="Max Price"
          className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-ink dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-white"
        />
      </div>
    </section>
  );
};

export default FilterBar;
