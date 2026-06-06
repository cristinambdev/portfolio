import { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextIsDarkMode = !isDarkMode;
    localStorage.setItem("theme", nextIsDarkMode ? "dark" : "light");
    setIsDarkMode(nextIsDarkMode);
    document.documentElement.classList.toggle("dark", nextIsDarkMode);
  };

  return (
    <button
    aria-label="Toggle Theme"
    onClick={toggleTheme}>
      {/* Mobile Version */}
      <div className="md:hidden text-zinc-600 dark:text-zinc-400 hover:text-brand-brick-red transition-colors flex items-center justify-center p-2">
        {isDarkMode ? <IoMoonOutline size={24} /> : <IoSunnyOutline size={24} />}
      </div>

      {/* Desktop Version - Toggle button */}
         <div
        className={`hidden md:flex w-14 h-7 rounded-full p-1 items-center shadow-inner transition-colors duration-300  cursor-pointer
          ${isDarkMode ? "bg-zinc-700" : "bg-brand-green"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer transform transition-transform duration-300 ease-in-out
            ${ isDarkMode ? "translate-x-7" : "translate-x-0"
          }`}
        >
          {isDarkMode ? (
            <IoMoonOutline size={12} className="text-zinc-700" />
          ) : (
            <IoSunnyOutline size={12} className="text-brand-green" />
          )}
        </div>
      </div>
    </button>
  );
}
