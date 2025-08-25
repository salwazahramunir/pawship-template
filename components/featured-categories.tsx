"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const categories = [
  {
    name: "Food",
    image:
      "https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/06/categories-1.jpg",
    href: "/store?category=food",
  },
  {
    name: "Pharmacy",
    image:
      "https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/categories-2.jpg",
    href: "/store?category=pharmacy",
  },
  {
    name: "Furniture",
    image:
      "https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/06/categories-3.jpg",
    href: "https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/06/categories-3.jpg",
  },
  {
    name: "Toys",
    image:
      "https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/06/categories-4.jpg",
    href: "/store?category=toys",
  },
  {
    name: "Beds",
    image:
      "https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/categories-5.jpg",
    href: "/store?category=beds",
  },
  {
    name: "Bowls",
    image:
      "https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/categories-6.jpg",
    href: "/store?category=bowls",
  },
  // {
  //   name: "Treats",
  //   image:
  //     "https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/categories-7.jpg",
  //   href: "/store?category=treats",
  // },
  {
    name: "Crates",
    image:
      "https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/categories-8.jpg",
    href: "/store?category=crates",
  },
  {
    name: "Flea & Tick",
    image:
      "https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/categories-9.jpg",
    href: "/store?category=flea&tick",
  },
  {
    name: "Clothings",
    image:
      "https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/categories-10.jpg",
    href: "/store?category=clothing",
  },
];

export function FeaturedCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50/30 to-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Browse By Categories 🐾
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our carefully curated categories to find exactly what your
              pet needs
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full border-orange-400 hover:bg-orange-400 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full border-orange-400 hover:bg-orange-400 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="flex-shrink-0 group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-32 h-32 rounded-full shadow-md flex items-center justify-center group-hover:border group-hover:border-dashed  border-orange-400 transition-shadow duration-300 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-20 h-20 object-contain "
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-400 transition-colors">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
