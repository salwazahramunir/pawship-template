"use client"

import { useState, useEffect } from "react"
import { ProductGrid } from "@/components/catalog/product-grid"
import { FilterSidebar } from "@/components/catalog/filter-sidebar"
import { SearchBar } from "@/components/catalog/search-bar"
import { SortDropdown } from "@/components/catalog/sort-dropdown"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Filter, Grid, List } from "lucide-react"

// Mock data for products
const mockProducts = [
  {
    id: 1,
    name: "Premium Dog Harness",
    price: { IDR: 299000, USD: 20, SGD: 27 },
    originalPrice: { IDR: 399000, USD: 27, SGD: 36 },
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=300",
    category: "clothing",
    subcategory: "harnesses",
    brand: "PawPremium",
    inStock: true,
    badge: "Best Seller",
    tags: ["premium", "comfortable", "adjustable"],
  },
  {
    id: 2,
    name: "Cozy Cat Bed",
    price: { IDR: 199000, USD: 13, SGD: 18 },
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    category: "furniture",
    subcategory: "beds",
    brand: "ComfortPaws",
    inStock: true,
    badge: "New",
    tags: ["cozy", "washable", "soft"],
  },
  {
    id: 3,
    name: "Interactive Puzzle Toy",
    price: { IDR: 149000, USD: 10, SGD: 13 },
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    category: "toys",
    subcategory: "puzzle",
    brand: "BrainPaws",
    inStock: true,
    badge: "Popular",
    tags: ["interactive", "mental-stimulation", "durable"],
  },
  {
    id: 4,
    name: "Stylish Pet Carrier",
    price: { IDR: 449000, USD: 30, SGD: 40 },
    originalPrice: { IDR: 549000, USD: 37, SGD: 49 },
    rating: 4.6,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300",
    category: "travel",
    subcategory: "carriers",
    brand: "TravelPaws",
    inStock: false,
    badge: "Sale",
    tags: ["travel", "airline-approved", "comfortable"],
  },
  {
    id: 5,
    name: "Organic Dog Treats",
    price: { IDR: 89000, USD: 6, SGD: 8 },
    rating: 4.5,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    subcategory: "treats",
    brand: "NaturalPaws",
    inStock: true,
    tags: ["organic", "healthy", "grain-free"],
  },
  {
    id: 6,
    name: "LED Safety Collar",
    price: { IDR: 179000, USD: 12, SGD: 16 },
    rating: 4.4,
    reviews: 91,
    image: "/placeholder.svg?height=300&width=300",
    category: "safety",
    subcategory: "collars",
    brand: "SafePaws",
    inStock: true,
    badge: "New",
    tags: ["led", "rechargeable", "waterproof"],
  },
]

export default function CatalogPage() {
  const [products, setProducts] = useState(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1000000],
    inStock: false,
    rating: 0,
  })
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [currency, setCurrency] = useState("IDR")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Detect user location and set currency (mock implementation)
  useEffect(() => {
    // In real implementation, you would use geolocation API or IP-based detection
    const detectLocation = () => {
      const userLang = navigator.language
      if (userLang.includes("en-US")) setCurrency("USD")
      else if (userLang.includes("en-SG")) setCurrency("SGD")
      else setCurrency("IDR")
    }
    detectLocation()
  }, [])

  // Filter and search logic
  useEffect(() => {
    let filtered = products

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Category filter
    if (selectedFilters.categories.length > 0) {
      filtered = filtered.filter((product) => selectedFilters.categories.includes(product.category))
    }

    // Brand filter
    if (selectedFilters.brands.length > 0) {
      filtered = filtered.filter((product) => selectedFilters.brands.includes(product.brand))
    }

    // Price range filter
    filtered = filtered.filter((product) => {
      const price = product.price[currency]
      const [min, max] = selectedFilters.priceRange
      return price >= min && price <= max
    })

    // In stock filter
    if (selectedFilters.inStock) {
      filtered = filtered.filter((product) => product.inStock)
    }

    // Rating filter
    if (selectedFilters.rating > 0) {
      filtered = filtered.filter((product) => product.rating >= selectedFilters.rating)
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price[currency] - b.price[currency])
        break
      case "price-high":
        filtered.sort((a, b) => b.price[currency] - a.price[currency])
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => (a.badge === "New" ? -1 : 1))
        break
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Featured - keep original order
        break
    }

    setFilteredProducts(filtered)
  }, [products, searchQuery, selectedFilters, sortBy, currency])

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Product Catalog</h1>
          <p className="text-muted-foreground">Discover our complete collection of premium pet products</p>
        </div>

        {/* Search and Controls */}
        <div className="mb-8 space-y-4">
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              {/* Mobile Filter Toggle */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden bg-transparent">
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

              <span className="text-sm text-muted-foreground">{filteredProducts.length} products found</span>
            </div>

            <div className="flex items-center space-x-4">
              <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />

              <div className="flex items-center border rounded-lg">
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
              </div>
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
            <ProductGrid products={filteredProducts} viewMode={viewMode} currency={currency} />
          </div>
        </div>
      </main>
    </div>
  )
}
