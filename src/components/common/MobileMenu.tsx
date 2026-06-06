import { NavLink } from "react-router-dom";
import type { MobileMenuProps } from "../../types";


export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => {
    const baseClasses = "transition-colors underline-offset-4";
    const activeClasses =
      "text-zinc-900 dark:text-zinc-100 underline decoration-brand-green";
    const inactiveClasses = "hover:text-zinc-900 dark:hover:text-zinc-100";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="absolute top-14 left-0 w-full z-50 bg-cream dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl shadow-xl flex flex-col items-center py-8 md:hidden">
      <nav className="flex flex-col items-center gap-6 text-sm font-semibold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
        <NavLink to="/" className={navLinkClasses} onClick={handleLinkClick}>
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={navLinkClasses}
          onClick={handleLinkClick}
        >
          Projects
        </NavLink>
        <NavLink to="/about" className={navLinkClasses} onClick={handleLinkClick}>
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={navLinkClasses}
          onClick={handleLinkClick}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
