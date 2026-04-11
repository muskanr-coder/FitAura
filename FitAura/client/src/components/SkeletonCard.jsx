const SkeletonCard = () => (
  <div className="animate-pulse rounded-3xl bg-white p-4 shadow-soft dark:bg-zinc-900">
    <div className="mb-3 h-56 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
    <div className="mb-2 h-4 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800" />
    <div className="h-4 w-1/3 rounded bg-zinc-200 dark:bg-zinc-800" />
  </div>
);

export default SkeletonCard;
