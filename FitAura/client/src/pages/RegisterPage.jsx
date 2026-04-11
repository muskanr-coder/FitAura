import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const { register, loading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = await register(form);
    if (ok) navigate("/");
  };

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-md items-center px-4 py-10">
      <section className="w-full rounded-3xl bg-white p-7 shadow-soft dark:bg-zinc-900">
        <h1 className="font-display text-3xl dark:text-white">Create Account</h1>
        <p className="mt-1 text-sm text-zinc-500">Join FitAura and elevate your style.</p>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <input
            type="text"
            required
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-ink dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-white"
          />
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
            minLength={6}
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-ink dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-white"
          />
          <button disabled={loading} className="btn-primary w-full">
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-ink dark:text-white">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
};

export default RegisterPage;
