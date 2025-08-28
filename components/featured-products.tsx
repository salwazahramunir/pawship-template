import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Emily Dress",
    price: "Rp 135,000",
    originalPrice: "Rp 139,000",
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7reom-m2am5zj4gp2wcc@resize_w900_nl.webp",
    category: "Clothings",
  },
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
  {
    id: 7,
    name: "Collar Bantal Anabul",
    price: "Rp 55,000",
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdvq-mdrbd8phet9g57@resize_w900_nl.webp",
    category: "Beds",
  },
  {
    id: 8,
    name: "Beary Dress",
    price: "Rp 55,000",
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdvi-m0bdn8u5wv0i16.webp",
    category: "Clothings",
  },
  {
    id: 9,
    name: "Cophi Oil Supplement",
    price: "Rp 103,950",
    originalPrice: "Rp 105,000",
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rd53-m7hkkkamluet07@resize_w900_nl.webp",
    category: "Pharmacy",
  },
  {
    id: 10,
    name: "Summer Dress With Hat",
    price: "Rp 169,000",
    originalPrice: "Rp 202,800",
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdyh-mbqhhmgjzdjqc6@resize_w900_nl.webp",
    category: "Clothings",
  },
];

export function FeaturedProducts() {
  return (
    // <section className="py-16 bg-gradient-to-b from-orange-50/30 to-background">
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">
              New Products 🐾
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover our latest arrivals for your beloved pets
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
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
