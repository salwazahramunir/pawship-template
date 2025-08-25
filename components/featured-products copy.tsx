import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Dog Harness",
    price: "Rp 299,000",
    originalPrice: "Rp 399,000",
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=250&width=250",
    badge: "🏆",
    emoji: "🐕",
    category: "Accessories",
  },
  {
    id: 2,
    name: "Cozy Cat Bed",
    price: "Rp 199,000",
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=250&width=250",
    badge: "✨",
    emoji: "🐱",
    category: "Beds",
  },
  {
    id: 3,
    name: "Interactive Puzzle Toy",
    price: "Rp 149,000",
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=250&width=250",
    badge: "🎯",
    emoji: "🧩",
    category: "Toys",
  },
  {
    id: 4,
    name: "Stylish Pet Carrier",
    price: "Rp 449,000",
    originalPrice: "Rp 549,000",
    rating: 4.6,
    reviews: 67,
    image: "/placeholder.svg?height=250&width=250",
    badge: "💝",
    emoji: "✈️",
    category: "Travel",
  },
];

export function FeaturedProductsCopy() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            🐾 Featured Products
          </h2>
          <p className="text-gray-600">
            Handpicked favorites that pets and owners love
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white rounded-2xl"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-lg">
                    {product.badge}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-lg">
                    {product.emoji}
                  </div>
                  {product.originalPrice && (
                    <div className="absolute bottom-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                      <span>🏷️</span>
                      <span>
                        {Math.round(
                          ((Number.parseFloat(
                            product.originalPrice.replace(/[^\d]/g, "")
                          ) -
                            Number.parseFloat(
                              product.price.replace(/[^\d]/g, "")
                            )) /
                            Number.parseFloat(
                              product.originalPrice.replace(/[^\d]/g, "")
                            )) *
                            100
                        )}
                        % OFF
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow-lg">
                    {product.category}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1 mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-orange-500">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white border-0 rounded-xl text-sm font-medium py-2"
                    size="sm"
                  >
                    Add to Cart 🛒
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
          >
            <Link href="/catalog">View All Products 🐾</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
