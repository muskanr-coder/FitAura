const Footer = () => {
  return (
    <footer className="mt-20 border-t border-zinc-200 py-12 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:px-6 sm:text-left">
        <p className="font-display text-xl text-ink dark:text-white">FitAura</p>
        <p>Minimal fashion for modern wardrobes.</p>
        <p>© {new Date().getFullYear()} FitAura. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
