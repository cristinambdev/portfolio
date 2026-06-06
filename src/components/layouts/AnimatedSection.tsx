import { useEffect, useRef, useState } from "react";
import type { AnimatedSectionProps } from "../../types";

export default function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  // State to track if the element has been scrolled into view
  const [isVisible, setIsVisible] = useState(false);

  //The reference beacon attached to the div
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        // If the element crosses the threshold into view...
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Stop watching it so it only animates once!
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15, // Triggers when 15% of the element is visible
      }
    );

    // Start watching the element
    if (sectionRef.current) observer.observe(sectionRef.current);

    // Cleanup function when component unmounts
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      // Combine the base hidden class, the visible trigger, and any custom classes
      className={`fade-up-hidden ${isVisible ? "fade-up-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
