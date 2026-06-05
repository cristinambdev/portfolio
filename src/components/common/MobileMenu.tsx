interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  // If the menu isn't open, don't render anything!
  if (!isOpen) return null;

  return (
    <div className="absolute top-14 left-0 w-full bg-white/95 backdrop-blur-md border border-zinc-200/50 rounded-2xl shadow-xl flex flex-col items-center py-8 md:hidden">
      <nav className="flex flex-col items-center gap-6 text-sm font-semibold tracking-widest text-zinc-500 uppercase">
        <a href="#" onClick={() => setIsOpen(false)} className="text-zinc-900 underline underline-offset-4 decoration-brand-green">Home</a>
        <a href="#" onClick={() => setIsOpen(false)} className="hover:text-zinc-900 transition-colors">Projects</a>
        <a href="#" onClick={() => setIsOpen(false)} className="hover:text-zinc-900 transition-colors">About</a>
      </nav>
    </div>
  );
}
