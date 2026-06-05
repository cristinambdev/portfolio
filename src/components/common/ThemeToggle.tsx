import { IoSunnyOutline } from "react-icons/io5";

export default function ThemeToggle() {
  return (
    <button aria-label="Toggle Theme">
      {/* Mobile Version */}
      <div className="md:hidden text-zinc-600 hover:text-brand-orange transition-colors flex items-center justify-center p-2">
        <IoSunnyOutline size={24} />
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex w-14 h-7 bg-brand-orange rounded-full p-1 items-center justify-end shadow-inner hover:bg-orange-400 transition-colors">
        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
          <IoSunnyOutline size={12} className="text-brand-orange" />
        </div>
      </div>
    </button>
  );
}
