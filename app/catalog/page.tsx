"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  X,
  SlidersHorizontal,
  ChevronDown,
  Star,
  ShoppingBag,
  Tag,
  DollarSign,
  Zap,
  Award,
} from "lucide-react";
import { ProductGrid } from "@/components/catalog/product-grid";

// Mock data
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
    originalPrice: { IDR: 105000 },
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
    originalPrice: { IDR: 202800 },
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

// Enhanced SearchBar Component
const SearchBar = ({ searchQuery, onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const clearSearch = () => {
    onSearchChange("");
  };

  return (
    <div
      className={`relative transition-all duration-300 ${
        isFocused ? "scale-[1.00]" : ""
      }`}
    >
      <div
        className={`relative bg-white rounded-lg border-2 transition-all duration-300 shadow-sm ${
          isFocused
            ? "border-orange-500 shadow-lg ring-4 ring-orange-500/10"
            : "border-gray-200 hover:border-gray-300"
        }`}
      >
        <Search
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
            isFocused ? "text-orange-500" : "text-gray-400"
          }`}
          size={20}
        />
        <input
          type="text"
          placeholder="Search products, brands, or categories..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full pl-12 pr-12 py-2 text-gray-700 placeholder-gray-400 bg-transparent rounded-xl outline-none text-lg"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="text-gray-400 hover:text-gray-600" size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

// Enhanced SortDropdown Component
const SortDropdown = ({ sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: "featured", label: "Featured", icon: Award },
    { value: "price-low", label: "Price: Low to High", icon: DollarSign },
    { value: "price-high", label: "Price: High to Low", icon: DollarSign },
    { value: "rating", label: "Highest Rated", icon: Star },
    { value: "newest", label: "Newest First", icon: Zap },
    { value: "name", label: "Name A-Z", icon: Tag },
  ];

  const currentOption = sortOptions.find((option) => option.value === sortBy);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200 min-w-[200px]"
      >
        <SlidersHorizontal className="text-gray-500" size={18} />
        <span className="font-medium text-gray-700">
          {currentOption?.label}
        </span>
        <ChevronDown
          className={`text-gray-500 ml-auto transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={18}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden animate-in slide-in-from-top-2 duration-200">
          {sortOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.value}
                onClick={() => {
                  onSortChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 ${
                  sortBy === option.value
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-700"
                }`}
              >
                <Icon
                  size={16}
                  className={
                    sortBy === option.value
                      ? "text-orange-500"
                      : "text-gray-400"
                  }
                />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Enhanced FilterSidebar Component
const FilterSidebar = ({
  selectedFilters,
  onFiltersChange,
  currency,
  onCurrencyChange,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    price: true,
    rating: true,
    availability: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const categories = ["Clothings", "Food", "Bowls", "Pharmacy", "Beds"];
  const brands = [
    "PawPremium",
    "ComfortPaws",
    "BrainPaws",
    "TravelPaws",
    "NaturalPaws",
    "SafePaws",
  ];

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...selectedFilters };

    if (filterType === "categories" || filterType === "brands") {
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(
          (item) => item !== value
        );
      } else {
        newFilters[filterType] = [...newFilters[filterType], value];
      }
    } else {
      newFilters[filterType] = value;
    }

    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      brands: [],
      priceRange: [0, 1000000],
      inStock: false,
      rating: 0,
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
            <Filter className="text-orange-600" size={24} />
            <span>Filters</span>
          </h3>
          <button
            onClick={clearAllFilters}
            className="text-sm text-orange-600 hover:text-orange-700 font-medium hover:underline transition-colors"
          >
            Clear All
          </button>
        </div>

        {/* Currency Selector */}
        {/* <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Currency
          </label>
          <select
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
          >
            <option value="IDR">IDR (Rp)</option>
            <option value="USD">USD ($)</option>
            <option value="SGD">SGD (S$)</option>
          </select>
        </div> */}
      </div>

      <div className="p-6 space-y-6">
        {/* Categories */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection("categories")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
              <ShoppingBag className="text-purple-500" size={20} />
              <span>Categories</span>
            </h4>
            <ChevronDown
              className={`text-gray-500 transition-transform duration-200 ${
                expandedSections.categories ? "rotate-180" : ""
              }`}
              size={18}
            />
          </button>

          {expandedSections.categories && (
            <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.categories.includes(category)}
                    onChange={() => handleFilterChange("categories", category)}
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Brands */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection("brands")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
              <Tag className="text-green-500" size={20} />
              <span>Brands</span>
            </h4>
            <ChevronDown
              className={`text-gray-500 transition-transform duration-200 ${
                expandedSections.brands ? "rotate-180" : ""
              }`}
              size={18}
            />
          </button>

          {expandedSections.brands && (
            <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.brands.includes(brand)}
                    onChange={() => handleFilterChange("brands", brand)}
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Availability */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection("availability")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
              <DollarSign className="text-orange-500" size={20} />
              <span>Price</span>
            </h4>
            <ChevronDown
              className={`text-gray-500 transition-transform duration-200 ${
                expandedSections.availability ? "rotate-180" : ""
              }`}
              size={18}
            />
          </button>

          {expandedSections.availability && (
            <div className="w-full max-w-sm">
              {/* Input Harga Minimal */}
              <div className="flex items-center border rounded-lg px-3 py-2 mb-3">
                <span className="text-gray-700 mr-2">Rp</span>
                <input
                  type="number"
                  placeholder="Minimum Price"
                  className="w-full outline-none placeholder-gray-700"
                />
              </div>

              {/* Input Harga Maksimal */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <span className="text-gray-700 mr-2">Rp</span>
                <input
                  type="number"
                  placeholder="Maximum Price"
                  className="w-full outline-none placeholder-gray-700"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [products] = useState(mockProducts);
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
  const [currency, setCurrency] = useState("IDR");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

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
        break;
    }

    setFilteredProducts(filtered);
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

  const handleAddToCart = (product) => {
    // Handle add to cart functionality
    console.log("Added to cart:", product);
    // You can implement your cart logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
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

        {/* Search Bar */}
        {/* <div className="mb-8">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div> */}

        {/* Controls */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                <Filter size={18} />
                <span className="font-medium">Filters</span>
              </button>

              <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span className="text-sm text-gray-600">
                  Showing{" "}
                  <span className="font-semibold text-gray-800">
                    {startIndex + 1}-
                    {Math.min(endIndex, filteredProducts.length)}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-gray-800">
                    {filteredProducts.length}
                  </span>{" "}
                  products
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-8">
              <FilterSidebar
                selectedFilters={selectedFilters}
                onFiltersChange={setSelectedFilters}
                currency={currency}
                onCurrencyChange={setCurrency}
              />
            </div>
          </aside>

          {/* Mobile Filter Sidebar */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
              <div className="fixed left-0 top-0 h-full w-80 bg-white overflow-y-auto">
                <div className="p-4 border-b">
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
                  >
                    <X size={20} />
                    <span>Close Filters</span>
                  </button>
                </div>
                <div className="p-4">
                  <FilterSidebar
                    selectedFilters={selectedFilters}
                    onFiltersChange={setSelectedFilters}
                    currency={currency}
                    onCurrencyChange={setCurrency}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid products={currentProducts} currency={currency} />

            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center space-x-2">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={18} />
                  <span>Previous</span>
                </button>

                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => {
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
                          <span key={page} className="px-2 text-gray-400">
                            ...
                          </span>
                        );
                      }

                      if (!showPage) return null;

                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`min-w-[44px] h-11 rounded-xl font-medium transition-all duration-200 ${
                            currentPage === page
                              ? "bg-orange-600 text-white shadow-lg"
                              : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    }
                  )}
                </div>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
