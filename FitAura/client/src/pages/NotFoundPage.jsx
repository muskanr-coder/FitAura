import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-6xl dark:text-white">404</h1>
      <p className="mt-2 text-zinc-500">The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary mt-5">
        Back Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
