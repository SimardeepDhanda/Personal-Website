"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { SITE } from "@/data";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center w-full bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden border-4 border-gray-200 bg-gray-100 shadow-lg">
            <Image
              src="/images/profile.png"
              alt={SITE.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 animate-fade-in">
          Hi, I&apos;m {SITE.name.split(" ")[0]}
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {SITE.tagline}
        </p>

        {/* Down Arrow */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}

