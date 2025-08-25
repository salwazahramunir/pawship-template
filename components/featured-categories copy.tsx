import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Clothing & Accessories",
    description: "Adorable outfits for your furry friends! 🐾",
    image: "/placeholder.svg?height=200&width=200",
    href: "/catalog?category=clothing",
    emoji: "👕",
  },
  {
    name: "Toys & Entertainment",
    description: "Fun toys that make tails wag! ✨",
    image: "/placeholder.svg?height=200&width=200",
    href: "/catalog?category=toys",
    emoji: "🎾",
  },
  {
    name: "Health & Care",
    description: "Keep your pets healthy & happy! 💖",
    image: "/placeholder.svg?height=200&width=200",
    href: "/catalog?category=health",
    emoji: "🏥",
  },
  {
    name: "Food & Treats",
    description: "Yummy treats pets absolutely love! 😋",
    image: "/placeholder.svg?height=200&width=200",
    href: "/catalog?category=food",
    emoji: "🍖",
  },
];

export function FeaturedCategoriesCopy() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated categories to find exactly what your
            pet needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border border-orange-100 hover:border-orange-200 bg-white overflow-hidden"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm">
                      <span className="text-lg">{category.emoji}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-orange-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-1">
                    {category.description}
                  </p>

                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white rounded-full font-medium mt-auto"
                  >
                    <Link
                      href={category.href}
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Shop Now</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
