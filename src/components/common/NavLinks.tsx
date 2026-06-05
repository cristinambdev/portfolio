export default function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-widest text-zinc-500 uppercase">
      <a href="#" className="text-zinc-900 underline underline-offset-4 decoration-brand-green">Home</a>
      <a href="#" className="text-zinc-600 hover:text-zinc-900 hover:underline underline-offset-4 hover:decoration-brand-green transition-all">Projects</a>
      <a href="#" className="text-zinc-600 hover:text-zinc-900 hover:underline underline-offset-4 hover:decoration-brand-green transition-all">About</a>
    </nav>
  );
}
