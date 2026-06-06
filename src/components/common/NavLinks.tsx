import { NavLink } from "react-router-dom";
import type { NavLinkClassName } from "../../types";

export default function NavLinks() {
  const navLinkClasses: NavLinkClassName = ({ isActive }) => {

    const baseClasses = "transition-all underline-offset-4 font-bold";
    const activeClasses = "text-brand-green font-bold underline decoration-brand-green";
    const inactiveClasses = "text-zinc-600 dark:text-zinc-400 hover:text-brand-green hover:font-bold hover:underline hover:decoration-brand-green";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest text-zinc-500 uppercase">
      <NavLink to="/" className={navLinkClasses}>Home</NavLink>
      <NavLink to="/projects" className={navLinkClasses}>Projects</NavLink>
      <NavLink to="/about" className={navLinkClasses}>About</NavLink>
      <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
    </nav>
  );
}
