import { useState } from "react";
import logoIcon from "../../assets/icons/logo-icon.svg";
import {IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import ThemeToggle from "../common/ThemeToggle";
import NavLinks from "../common/NavLinks";
import MobileMenu from "../common/MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="relative flex items-center justify-between">
      {/* Logo */}
      <div className="font-serif text-2xl font-bold tracking-tight">

        <img
          src={logoIcon}
          alt="crismbdev logo"
          className="sm:hidden w-7 h-7"
        />

        <div className="hidden sm:block">
          crismb<span className="text-brand-green">dev</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 md:gap-8">
          <NavLinks />

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  );
}
