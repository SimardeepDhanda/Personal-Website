"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function ConditionalFooter() {
  const pathname = usePathname();
  
  // Hide footer on resume page (PDF only)
  if (pathname === "/resume") {
    return null;
  }
  
  return <Footer />;
}

