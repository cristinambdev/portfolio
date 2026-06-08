import { useState, useEffect } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Listen for scroll events to toggle visibility
  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button once the user scrolls down 400 pixels
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll back to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      // Dynamic classes handle the smooth fade-in and slide-up animation
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 focus:outline-none ${
        isVisible
          ? "opacity-100 translate-y-0 cursor-pointer pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none"
      } bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:text-brand-green dark:hover:text-brand-green hover:border-brand-green/50 hover:shadow-xl`}
    >
      <IoArrowUpOutline size={20} />
    </button>
  );
}
