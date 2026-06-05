import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) => {

    const baseClasses = "transition-all underline-offset-4";
    const activeClasses = "text-brand-green font-bold underline decoration-brand-green";
    const inactiveClasses = "text-zinc-600 hover:text-brand-green hover:font-bold hover:underline hover:decoration-brand-green";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-widest text-zinc-500 uppercase">
      <NavLink to="/" className={navLinkClasses}>Home</NavLink>
      <NavLink to="/projects" className={navLinkClasses}>Projects</NavLink>
      <NavLink to="/about" className={navLinkClasses}>About</NavLink>
    </nav>
  );
}
