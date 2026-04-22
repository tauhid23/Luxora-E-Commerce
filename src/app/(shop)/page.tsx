import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

import HeroSection from "@/components/home/HeroSection";
import TrustBadges from "@/components/home/TrustBadges";
import CategoriesSection from "@/components/home/CategroriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandMarquee from "@/components/home/BrandMarquee";
import CtaBanner from "@/components/home/CtaBanners";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Premium Fashion & Lifestyle`,
  description:
    "Discover curated premium fashion, electronics, and lifestyle products.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <CategoriesSection />
      <FeaturedProducts />
      <BrandMarquee />
      <CtaBanner />
    </>
  );
}