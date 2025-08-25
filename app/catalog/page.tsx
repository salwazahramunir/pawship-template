"use client";

import { useState, useEffect } from "react";
import { ProductGrid } from "@/components/catalog/product-grid";
import { FilterSidebar } from "@/components/catalog/filter-sidebar";
import { SearchBar } from "@/components/catalog/search-bar";
import { SortDropdown } from "@/components/catalog/sort-dropdown";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronLeft, ChevronRight, Filter, Grid, List } from "lucide-react";

// Mock data for products
const mockProducts = [
  {
    id: 1,
    name: "Emily Dress",
    price: {
      IDR: 135000,
      USD: Math.round((135000 / 299000) * 20),
      SGD: Math.round((135000 / 299000) * 27),
    },
    originalPrice: { IDR: 399000, USD: 27, SGD: 36 },
    rating: 4.8,
    reviews: 124,
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7reom-m2am5zj4gp2wcc@resize_w900_nl.webp",
    category: "Clothings",
    subcategory: "harnesses",
    brand: "PawPremium",
    inStock: true,
    badge: "Best Seller",
    tags: ["premium", "comfortable", "adjustable"],
  },
  {
    id: 2,
    name: "Cat Choize Dry Food For Cat",
    price: {
      IDR: 28000,
      USD: Math.round((28000 / 199000) * 13),
      SGD: Math.round((28000 / 199000) * 18),
    },
    originalPrice: { IDR: 399000, USD: 27, SGD: 36 },
    rating: 4.9,
    reviews: 89,
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7ra3x-mbaxfhd4n0b58d@resize_w900_nl.webp",
    category: "Food",
    subcategory: "beds",
    brand: "ComfortPaws",
    inStock: true,
    badge: "New",
    tags: ["cozy", "washable", "soft"],
  },
  {
    id: 3,
    name: "Pet Bowl Neck Protecor",
    price: {
      IDR: 45000,
      USD: Math.round((45000 / 149000) * 10),
      SGD: Math.round((45000 / 149000) * 13),
    },
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdyw-m0mgzc8boj2c41@resize_w900_nl.webp",
    category: "Bowls",
    subcategory: "puzzle",
    brand: "BrainPaws",
    inStock: true,
    badge: "Popular",
    tags: ["interactive", "mental-stimulation", "durable"],
  },
  {
    id: 4,
    name: "Eye Vita Supplement",
    price: {
      IDR: 249000,
      USD: Math.round((249000 / 449000) * 30),
      SGD: Math.round((249000 / 449000) * 40),
    },
    originalPrice: { IDR: 549000, USD: 37, SGD: 49 },
    rating: 4.6,
    reviews: 67,
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rat2-mafd8adm1r4gf9@resize_w900_nl.webp",
    category: "Pharmacy",
    subcategory: "carriers",
    brand: "TravelPaws",
    inStock: false,
    badge: "Sale",
    tags: ["travel", "airline-approved", "comfortable"],
  },
  {
    id: 5,
    name: "Pet Carpet",
    price: {
      IDR: 69000,
      USD: Math.round((69000 / 89000) * 6),
      SGD: Math.round((69000 / 89000) * 8),
    },
    originalPrice: null,
    rating: 4.5,
    reviews: 203,
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdwf-m1iohn8ajjk988@resize_w900_nl.webp",
    category: "Beds",
    subcategory: "treats",
    brand: "NaturalPaws",
    inStock: true,
    tags: ["organic", "healthy", "grain-free"],
  },
  {
    id: 6,
    name: "Prama Pouch Wet Food",
    price: {
      IDR: 11250,
      USD: Math.round((11250 / 179000) * 12),
      SGD: Math.round((11250 / 179000) * 16),
    },
    originalPrice: null,
    rating: 4.4,
    reviews: 91,
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdwo-mcxl8aioxfcp2c@resize_w900_nl.webp",
    category: "Food",
    subcategory: "collars",
    brand: "SafePaws",
    inStock: true,
    badge: "New",
    tags: ["led", "rechargeable", "waterproof"],
  },
  {
    id: 7,
    name: "Collar Bantal Anabul",
    price: {
      IDR: 55000,
      USD: Math.round((55000 / 299000) * 20),
      SGD: Math.round((55000 / 299000) * 27),
    },
    originalPrice: null,
    rating: 4.8,
    reviews: 124,
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdvq-mdrbd8phet9g57@resize_w900_nl.webp",
    category: "Beds",
    subcategory: "harnesses",
    brand: "PawPremium",
    inStock: true,
    badge: "Best Seller",
    tags: ["premium", "comfortable", "adjustable"],
  },
  {
    id: 8,
    name: "Beary Dress",
    price: {
      IDR: 55000,
      USD: Math.round((55000 / 199000) * 13),
      SGD: Math.round((55000 / 199000) * 18),
    },
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdvi-m0bdn8u5wv0i16.webp",
    category: "Clothings",
    subcategory: "beds",
    brand: "ComfortPaws",
    inStock: true,
    badge: "New",
    tags: ["cozy", "washable", "soft"],
  },
  {
    id: 9,
    name: "Cophi Oil Supplement",
    price: {
      IDR: 103950,
      USD: Math.round((103950 / 149000) * 10),
      SGD: Math.round((103950 / 149000) * 13),
    },
    originalPrice: { IDR: 105000 }, // tetap dari dataset pertama jika ada
    rating: 4.7,
    reviews: 156,
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rd53-m7hkkkamluet07@resize_w900_nl.webp",
    category: "Pharmacy",
    subcategory: "puzzle",
    brand: "BrainPaws",
    inStock: true,
    badge: "Popular",
    tags: ["interactive", "mental-stimulation", "durable"],
  },
  {
    id: 10,
    name: "Summer Dress With Hat",
    price: {
      IDR: 169000,
      USD: Math.round((169000 / 449000) * 30),
      SGD: Math.round((169000 / 449000) * 40),
    },
    originalPrice: { IDR: 202800 }, // tetap dari dataset pertama jika ada
    rating: 4.6,
    reviews: 67,
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdyh-mbqhhmgjzdjqc6@resize_w900_nl.webp",
    category: "Clothings",
    subcategory: "carriers",
    brand: "TravelPaws",
    inStock: false,
    badge: "Sale",
    tags: ["travel", "airline-approved", "comfortable"],
  },
];

export default function CatalogPage() {
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1000000],
    inStock: false,
    rating: 0,
  });
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [currency, setCurrency] = useState("IDR");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Show 6 products per page

  useEffect(() => {
    let filtered = products;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedFilters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedFilters.categories.includes(product.category)
      );
    }

    // Brand filter
    if (selectedFilters.brands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedFilters.brands.includes(product.brand)
      );
    }

    // Price range filter
    filtered = filtered.filter((product) => {
      const price = product.price[currency];
      const [min, max] = selectedFilters.priceRange;
      return price >= min && price <= max;
    });

    // In stock filter
    if (selectedFilters.inStock) {
      filtered = filtered.filter((product) => product.inStock);
    }

    // Rating filter
    if (selectedFilters.rating > 0) {
      filtered = filtered.filter(
        (product) => product.rating >= selectedFilters.rating
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price[currency] - b.price[currency]);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price[currency] - a.price[currency]);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (a.badge === "New" ? -1 : 1));
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(filtered);
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [products, searchQuery, selectedFilters, sortBy, currency]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Product Catalog
          </h1>
          <p className="text-muted-foreground">
            Discover our complete collection of premium pet products
          </p>
        </div>

        {/* Search and Controls */}
        <div className="mb-8 space-y-4">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              {/* Mobile Filter Toggle */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="lg:hidden bg-transparent"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <FilterSidebar
                    selectedFilters={selectedFilters}
                    onFiltersChange={setSelectedFilters}
                    currency={currency}
                    onCurrencyChange={setCurrency}
                  />
                </SheetContent>
              </Sheet>

              <span className="text-sm text-muted-foreground">
                Showing {startIndex + 1}-
                {Math.min(endIndex, filteredProducts.length)} of{" "}
                {filteredProducts.length} products
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />

              {/* <div className="flex items-center border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar
                selectedFilters={selectedFilters}
                onFiltersChange={setSelectedFilters}
                currency={currency}
                onCurrencyChange={setCurrency}
              />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid products={currentProducts} currency={currency} />

            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="flex items-center space-x-1 bg-transparent"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Button>

                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => {
                      // Show first page, last page, current page, and pages around current
                      const showPage =
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1);

                      const showEllipsis =
                        (page === currentPage - 2 && currentPage > 3) ||
                        (page === currentPage + 2 &&
                          currentPage < totalPages - 2);

                      if (showEllipsis) {
                        return (
                          <span
                            key={page}
                            className="px-2 text-muted-foreground"
                          >
                            ...
                          </span>
                        );
                      }

                      if (!showPage) return null;

                      return (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(page)}
                          className="min-w-[40px]"
                        >
                          {page}
                        </Button>
                      );
                    }
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center space-x-1 bg-transparent"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
