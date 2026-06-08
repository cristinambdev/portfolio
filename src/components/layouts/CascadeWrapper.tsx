import { useEffect, useRef, useState } from "react";

export default function CascadeWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`cascade-wrapper${isVisible ? " cascade-visible" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
