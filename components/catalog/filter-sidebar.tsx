"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface FilterSidebarProps {
  selectedFilters: {
    categories: string[];
    brands: string[];
    priceRange: number[];
    inStock: boolean;
    rating: number;
  };
  onFiltersChange: (filters: any) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
}

const categories = [
  { id: "Clothings", name: "Clothing & Accessories", count: 3 },
  { id: "Toys", name: "Toys & Entertainment", count: 0 },
  { id: "Food", name: "Food & Treats", count: 2 },
  { id: "Pharmacy", name: "Health & Care", count: 2 },
  { id: "Furniture", name: "Furniture", count: 0 },
  { id: "Beds", name: "Beds & Sleeping", count: 2 },
  { id: "Bowls", name: "Bowls & Feeders", count: 1 },
  { id: "Crates", name: "Crates & Kennels", count: 0 },
  { id: "Flea & Tick", name: "Flea & Tick Control", count: 0 },
];

const brands = [
  { id: "PawPremium", name: "Paw Premium", count: 23 },
  { id: "ComfortPaws", name: "Comfort Paws", count: 18 },
  { id: "BrainPaws", name: "Brain Paws", count: 15 },
  { id: "TravelPaws", name: "Travel Paws", count: 12 },
  { id: "NaturalPaws", name: "Natural Paws", count: 10 },
  { id: "SafePaws", name: "Safe Paws", count: 8 },
];

const priceRanges = {
  IDR: { min: 0, max: 1000000, step: 50000 },
  USD: { min: 0, max: 100, step: 5 },
  SGD: { min: 0, max: 120, step: 5 },
};

export function FilterSidebar({
  selectedFilters,
  onFiltersChange,
  currency,
  onCurrencyChange,
}: FilterSidebarProps) {
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const newCategories = checked
      ? [...selectedFilters.categories, categoryId]
      : selectedFilters.categories.filter((id) => id !== categoryId);

    onFiltersChange({ ...selectedFilters, categories: newCategories });
  };

  const handlePriceRangeChange = (range: number[]) => {
    onFiltersChange({ ...selectedFilters, priceRange: range });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      brands: [],
      priceRange: [0, priceRanges[currency].max],
      inStock: false,
      rating: 0,
    });
  };

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

  return (
    <div className="space-y-6">
      {/* Currency Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Currency</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={currency} onValueChange={onCurrencyChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="IDR">IDR (Indonesia)</SelectItem>
              <SelectItem value="USD">USD (United States)</SelectItem>
              <SelectItem value="SGD">SGD (Singapore)</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Active Filters */}
      {(selectedFilters.categories.length > 0 ||
        selectedFilters.brands.length > 0 ||
        selectedFilters.inStock ||
        selectedFilters.rating > 0) && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Active Filters</CardTitle>
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              Clear All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedFilters.categories.map((categoryId) => {
                const category = categories.find((c) => c.id === categoryId);
                return (
                  <Badge key={categoryId} variant="secondary">
                    {category?.name}
                  </Badge>
                );
              })}
              {selectedFilters.brands.map((brandId) => {
                const brand = brands.find((b) => b.id === brandId);
                return (
                  <Badge key={brandId} variant="secondary">
                    {brand?.name}
                  </Badge>
                );
              })}
              {selectedFilters.inStock && (
                <Badge variant="secondary">In Stock</Badge>
              )}
              {selectedFilters.rating > 0 && (
                <Badge variant="secondary">
                  {selectedFilters.rating}+ Stars
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={selectedFilters.categories.includes(category.id)}
                  onCheckedChange={(checked) =>
                    handleCategoryChange(category.id, checked as boolean)
                  }
                />
                <Label
                  htmlFor={category.id}
                  className="text-sm font-normal cursor-pointer"
                >
                  {category.name}
                </Label>
              </div>
              <span className="text-xs text-muted-foreground">
                ({category.count})
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={selectedFilters.priceRange}
            onValueChange={handlePriceRangeChange}
            max={priceRanges[currency].max}
            min={priceRanges[currency].min}
            step={priceRanges[currency].step}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatPrice(selectedFilters.priceRange[0])}</span>
            <span>{formatPrice(selectedFilters.priceRange[1])}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
