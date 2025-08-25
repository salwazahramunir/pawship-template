import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: { IDR: number; USD: number; SGD: number };
  originalPrice?: { IDR: number; USD: number; SGD: number };
  rating: number;
  reviews: number;
  image: string;
  category: string;
  subcategory: string;
  brand: string;
  inStock: boolean;
  badge?: string;
  tags: string[];
}

interface ProductGridProps {
  products: Product[];
  currency: string;
}

export function ProductGrid({ products, currency }: ProductGridProps) {
  const formatPrice = (price: number) => {
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
      case "Sale":
        return "bg-destructive";
      default:
        return "bg-primary";
    }
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🐾</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          No products found
        </h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-xs w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col"
        >
          <Link href={`/catalog/${product.id}`}>
            {/* Gambar */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* {product.badge && (
              <span
                className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full ${getBadgeColor(
                  product.badge
                )} text-white`}
              >
                {product.badge}
              </span>
            )} */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-semibold">Out of Stock</span>
                </div>
              )}
              <span className="absolute bottom-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {product.category}
              </span>
            </div>

            {/* Konten */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div className="flex flex-col gap-2">
                {/* Info Produk */}
                <div className="space-y-1 min-h-[50px]">
                  <h3 className="font-semibold text-gray-800 text-sm leading-tight line-clamp-1 group-hover:text-primary transition-colors">
                    <p>{product.name}</p>
                  </h3>
                  <p className="text-xs text-gray-500">{product.brand}</p>
                </div>

                {/* Harga */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-orange-500">
                    {formatPrice(product.price[currency])}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {formatPrice(product.originalPrice[currency])}
                    </span>
                  )}
                </div>
              </div>

              {/* Tombol */}
              <Button
                className="mt-4 w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white border-0 rounded-xl text-sm font-medium py-2"
                size="sm"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
