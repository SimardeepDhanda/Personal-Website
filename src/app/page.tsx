import { HomeContent } from "@/components/HomeContent";
import { SITE } from "@/data";

export const metadata = {
  title: "Home",
  description: SITE.tagline,
};

export default function Home() {
  return <HomeContent />;
}

