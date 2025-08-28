import { HeroSection } from "@/components/hero-section";
import { FeaturedCategories } from "@/components/featured-categories";
import { FeaturedProducts } from "@/components/featured-products";
import { WhyChooseUs } from "@/components/why-choose-us";
import { LatestBlog } from "@/components/latest-blog";
import { CampaignSection } from "@/components/campaign-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <FeaturedCategories />
        <FeaturedProducts />
        {/* <WhyChooseUs /> */}
        <CampaignSection />
        <LatestBlog />
      </main>
    </div>
  );
}
