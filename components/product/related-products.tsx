import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"

// Mock related products
const relatedProducts = [
  {
    id: 2,
    name: "Matching Leash Set",
    price: { IDR: 149000, USD: 10, SGD: 13 },
    rating: 4.7,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Comfort Collar",
    price: { IDR: 99000, USD: 7, SGD: 9 },
    rating: 4.5,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    badge: "New",
  },
  {
    id: 4,
    name: "Travel Water Bowl",
    price: { IDR: 79000, USD: 5, SGD: 7 },
    rating: 4.6,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Pet ID Tag",
    price: { IDR: 59000, USD: 4, SGD: 5 },
    rating: 4.8,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Best Seller",
  },
]

interface RelatedProductsProps {
  category: string
  currentProductId: number
}

export function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  const formatPrice = (price: number, currency = "IDR") => {
    switch (currency) {
      case "USD":
        return `$${price}`
      case "SGD":
        return `S$${price}`
      default:
        return `Rp ${price.toLocaleString()}`
    }
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return "bg-primary"
      case "New":
        return "bg-secondary"
      case "Popular":
        return "bg-primary"
      default:
        return "bg-primary"
    }
  }

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">You Might Also Like</h2>
        <p className="text-muted-foreground">Complete your pet's collection with these related items</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white`}>
                    {product.badge}
                  </Badge>
                )}
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/catalog/${product.id}`}>{product.name}</Link>
                  </h3>
                  <div className="flex items-center space-x-1 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{formatPrice(product.price.IDR)}</span>
                  <Button size="sm" variant="outline">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
