import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TextCategories() {
  const categories = [
    {
      name: "Dog Food & Treats",
      href: "/catalog?category=dog-food",
      count: "120+ items",
    },
    {
      name: "Cat Essentials",
      href: "/catalog?category=cat-essentials",
      count: "95+ items",
    },
    {
      name: "Bird Supplies",
      href: "/catalog?category=bird-supplies",
      count: "45+ items",
    },
    {
      name: "Fish & Aquarium",
      href: "/catalog?category=fish-aquarium",
      count: "80+ items",
    },
    {
      name: "Small Pet Care",
      href: "/catalog?category=small-pets",
      count: "60+ items",
    },
    {
      name: "Pet Grooming",
      href: "/catalog?category=grooming",
      count: "75+ items",
    },
    {
      name: "Pet Toys & Entertainment",
      href: "/catalog?category=toys",
      count: "150+ items",
    },
    {
      name: "Pet Health & Wellness",
      href: "/catalog?category=health",
      count: "90+ items",
    },
    {
      name: "Pet Accessories",
      href: "/catalog?category=accessories",
      count: "110+ items",
    },
    {
      name: "Training & Behavior",
      href: "/catalog?category=training",
      count: "35+ items",
    },
    {
      name: "Pet Travel",
      href: "/catalog?category=travel",
      count: "40+ items",
    },
    {
      name: "Outdoor & Exercise",
      href: "/catalog?category=outdoor",
      count: "65+ items",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Browse All Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our complete range of pet products organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Button
                variant="outline"
                className="w-full h-auto p-4 justify-between bg-white hover:bg-orange-50 hover:border-orange-200 transition-all duration-200 group"
              >
                <div className="text-left">
                  <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                    {category.name}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {category.count}
                  </div>
                </div>
                <div className="text-orange-400 group-hover:text-orange-600 transition-colors">
                  →
                </div>
              </Button>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/catalog">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
