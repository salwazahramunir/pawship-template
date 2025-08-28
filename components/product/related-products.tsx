import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import Link from "next/link";

// Mock related products
const relatedProducts = [
  {
    id: 2,
    name: "Cat Choize Dry Food For Cat",
    price: "Rp 28,000",
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7ra3x-mbaxfhd4n0b58d@resize_w900_nl.webp",
    category: "Food",
  },
  {
    id: 3,
    name: "Pet Bowl Neck Protecor",
    price: "Rp 45,000",
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdyw-m0mgzc8boj2c41@resize_w900_nl.webp",
    category: "Bowls",
  },
  {
    id: 4,
    name: "Eye Vita Supplement",
    price: "Rp 249,000",
    originalPrice: "Rp 280,500",
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rat2-mafd8adm1r4gf9@resize_w900_nl.webp",
    category: "Pharmacy",
  },
  {
    id: 5,
    name: "Pet Carpet",
    price: "Rp 69,000",
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdwf-m1iohn8ajjk988@resize_w900_nl.webp",
    category: "Beds",
  },
  {
    id: 6,
    name: "Prama Pouch Wet Food",
    price: "Rp 11,250",
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdwo-mcxl8aioxfcp2c@resize_w900_nl.webp",
    category: "Food",
  },
];

interface RelatedProductsProps {
  category: string;
  currentProductId: number;
}

export function RelatedProducts({
  category,
  currentProductId,
}: RelatedProductsProps) {
  const formatPrice = (price: number, currency = "IDR") => {
    switch (currency) {
      case "USD":
        return `$${price}`;
      case "SGD":
        return `S$${price}`;
      default:
        return `Rp ${price.toLocaleString()}`;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return "bg-primary";
      case "New":
        return "bg-secondary";
      case "Popular":
        return "bg-primary";
      default:
        return "bg-primary";
    }
  };

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          You Might Also Like
        </h2>
        <p className="text-muted-foreground">
          Complete your pet's collection with these related items
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {relatedProducts.map((product) => (
          // <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
          //   <CardContent className="p-0">
          //     <div className="relative aspect-square overflow-hidden">
          //       <img
          //         src={product.image || "/placeholder.svg"}
          //         alt={product.name}
          //         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          //       />
          //       {product.badge && (
          //         <Badge className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white`}>
          //           {product.badge}
          //         </Badge>
          //       )}
          //     </div>

          //     <div className="p-4 space-y-3">
          //       <div>
          //         <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          //           <Link href={`/catalog/${product.id}`}>{product.name}</Link>
          //         </h3>
          //         <div className="flex items-center space-x-1 mt-1">
          //           <div className="flex items-center">
          //             {[...Array(5)].map((_, i) => (
          //               <Star
          //                 key={i}
          //                 className={`h-3 w-3 ${
          //                   i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
          //                 }`}
          //               />
          //             ))}
          //           </div>
          //           <span className="text-xs text-muted-foreground">({product.reviews})</span>
          //         </div>
          //       </div>

          //       <div className="flex items-center justify-between">
          //         <span className="text-lg font-bold text-primary">{formatPrice(product.price.IDR)}</span>
          //         <Button size="sm" variant="outline">
          //           <ShoppingCart className="h-4 w-4" />
          //         </Button>
          //       </div>
          //     </div>
          //   </CardContent>
          // </Card>
          <div
            key={product.id}
            className="max-w-xs w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
          >
            <Link href={`/catalog/${product.id}`}>
              {/* Image */}
              <div className="relative group">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Badge Category */}
                <span className="absolute bottom-2 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2">
                {/* Product Name */}
                <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-orange-500">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white border-0 rounded-xl text-sm font-medium py-2"
                  size="sm"
                >
                  Add to Cart
                </Button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
