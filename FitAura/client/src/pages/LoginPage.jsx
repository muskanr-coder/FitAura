import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || "/";
  const [form, setForm] = useState({ email: "", password: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = await login(form);
    if (ok) navigate(redirectPath);
  };

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-md items-center px-4 py-10">
      <section className="w-full rounded-3xl bg-white p-7 shadow-soft dark:bg-zinc-900">
        <h1 className="font-display text-3xl dark:text-white">Welcome Back</h1>
        <p className="mt-1 text-sm text-zinc-500">Sign in to continue shopping.</p>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <input
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-ink dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-white"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-ink dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-white"
          />
          <button disabled={loading} className="btn-primary w-full">
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          New here?{" "}
          <Link to="/register" className="font-semibold text-ink dark:text-white">
            Create an account
          </Link>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
