"use client";

import { usePathname } from "next/navigation";
import { Nav } from "./Nav";

export function ConditionalNav() {
  const pathname = usePathname();
  
  // Hide regular nav on home page (we use StickyNav instead)
  if (pathname === "/") {
    return null;
  }
  
  return <Nav />;
}

