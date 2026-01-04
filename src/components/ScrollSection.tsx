"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  colorVariant?: "default" | "about" | "projects" | "experience" | "skills" | "contact" | "resume";
}

const colorVariants = {
  default: "bg-white",
  about: "bg-[#1a2332]", // Deep navy blue
  projects: "bg-white",
  experience: "bg-[#1a2332]", // Deep navy blue
  skills: "bg-white",
  contact: "bg-[#1a2332]", // Deep navy blue
  resume: "bg-[#1a2332]", // Deep navy blue
};

export function ScrollSection({ id, children, className = "", colorVariant = "default" }: ScrollSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  const isNavy = colorVariant === "about" || colorVariant === "experience" || colorVariant === "contact" || colorVariant === "resume";
  const gradientClass = isNavy ? "noise-texture" : "";

  return (
    <section
      id={id}
      ref={ref}
      className={`w-full transition-all duration-700 relative ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${colorVariants[colorVariant]} ${gradientClass} ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
