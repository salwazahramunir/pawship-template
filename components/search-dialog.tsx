"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, TrendingUp } from "lucide-react"
import Link from "next/link"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const trendingSearches = [
    "Dog Food Premium",
    "Cat Toys Interactive",
    "Pet Carrier",
    "Dog Collar",
    "Cat Litter",
    "Pet Grooming Kit",
  ]

  const recentSearches = ["Premium Dog Food", "Cat Scratching Post", "Pet Bed"]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>

          {searchQuery === "" && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-4 w-4 text-orange-500" />
                  <h3 className="font-semibold text-sm">Trending Searches</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((search) => (
                    <Button
                      key={search}
                      variant="outline"
                      size="sm"
                      className="text-xs bg-transparent"
                      onClick={() => setSearchQuery(search)}
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-3">Recent Searches</h3>
                <div className="space-y-2">
                  {recentSearches.map((search) => (
                    <button
                      key={search}
                      className="block w-full text-left text-sm text-gray-600 hover:text-gray-900 py-1"
                      onClick={() => setSearchQuery(search)}
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {searchQuery && (
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Search results for "{searchQuery}"</p>
              <Link
                href={`/catalog?search=${encodeURIComponent(searchQuery)}`}
                className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => onOpenChange(false)}
              >
                <div className="flex items-center gap-3">
                  <Search className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">Search for "{searchQuery}" in catalog</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
