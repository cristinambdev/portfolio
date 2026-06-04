import { IoSunnyOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between">
      {/* Logo */}
      <div className="font-serif text-2xl font-bold tracking-tight">
        cristina<span className="text-brand-green">dev</span>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8">
        <nav className="hidden md:flex gap-8 text-xs font-semibold tracking-widest text-zinc-500 uppercase">

          <a href="#" className="text-zinc-900 underline hover:text-zinc-900 hover:underline underline-offset-4 decoration-brand-green transition-all">Home</a>
          <a href="#" className="hover:text-zinc-900 hover:underline underline-offset-4 decoration-zinc-900 transition-all">Projects</a>
          <a href="#" className="hover:text-zinc-900 hover:underline underline-offset-4 decoration-zinc-900 transition-all">About</a>
        </nav>

        {/* Theme Toggle Button */}
        <button className="w-14 h-7 bg-brand-orange rounded-full p-1 flex items-center justify-end shadow-inner cursor-pointer hover:bg-orange-400 transition-colors">
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
            <IoSunnyOutline size={12} className="text-brand-orange" />
          </div>
        </button>
      </div>
    </header>
  );
}
