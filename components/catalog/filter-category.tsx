"use client";

import { useState } from "react";
import {
  Search,
  ShoppingBag,
  X,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface Category {
  id: string;
  name: string;
  hasSubcategories?: boolean;
  subcategories?: Subcategory[];
}

interface Subcategory {
  id: string;
  name: string;
  parentId: string;
}

interface SearchResult {
  id: string;
  name: string;
  type: "category" | "subcategory";
  hasSubcategories?: boolean;
  parentName?: string;
}

const categories: Category[] = [
  {
    id: "aksesoris-hewan",
    name: "Aksesoris Hewan",
    hasSubcategories: true,
    subcategories: [
      {
        id: "collar-harness-leash",
        name: "Collar/Harness/Leash",
        parentId: "aksesoris-hewan",
      },
      {
        id: "gendongan-hewan",
        name: "Gendongan Hewan",
        parentId: "aksesoris-hewan",
      },
      { id: "kalung-hewan", name: "Kalung Hewan", parentId: "aksesoris-hewan" },
      { id: "keychain-hp", name: "Keychain HP", parentId: "aksesoris-hewan" },
      { id: "manner-belt", name: "Manner Belt", parentId: "aksesoris-hewan" },
    ],
  },
  {
    id: "baju-hewan",
    name: "Baju Hewan",
    hasSubcategories: true,
    subcategories: [
      { id: "baju-anjing", name: "Baju Anjing", parentId: "baju-hewan" },
      { id: "baju-kucing", name: "Baju Kucing", parentId: "baju-hewan" },
      { id: "kostum-hewan", name: "Kostum Hewan", parentId: "baju-hewan" },
    ],
  },
  { id: "botol-minum", name: "Botol Minum" },
  { id: "grooming-service", name: "Grooming Service" },
  {
    id: "hobi-koleksi",
    name: "Hobi & Koleksi",
    hasSubcategories: true,
    subcategories: [
      {
        id: "mainan-koleksi",
        name: "Mainan Koleksi",
        parentId: "hobi-koleksi",
      },
      { id: "figure-hewan", name: "Figure Hewan", parentId: "hobi-koleksi" },
    ],
  },
  { id: "kantung-poop", name: "Kantung Poop" },
  {
    id: "makanan-hewan",
    name: "Makanan Hewan",
    hasSubcategories: true,
    subcategories: [
      {
        id: "makanan-anjing",
        name: "Makanan Anjing",
        parentId: "makanan-hewan",
      },
      {
        id: "makanan-kucing",
        name: "Makanan Kucing",
        parentId: "makanan-hewan",
      },
      { id: "snack-hewan", name: "Snack Hewan", parentId: "makanan-hewan" },
    ],
  },
  { id: "mainan-hewan", name: "Mainan Hewan" },
  {
    id: "obat-vitamin",
    name: "Obat & Vitamin",
    hasSubcategories: true,
    subcategories: [
      {
        id: "vitamin-anjing",
        name: "Vitamin Anjing",
        parentId: "obat-vitamin",
      },
      {
        id: "vitamin-kucing",
        name: "Vitamin Kucing",
        parentId: "obat-vitamin",
      },
      { id: "obat-kutu", name: "Obat Kutu", parentId: "obat-vitamin" },
    ],
  },
  { id: "perawatan-hewan", name: "Perawatan Hewan" },
];

interface CategoryFilterModalProps {
  selectedCategory?: string;
  onCategorySelect?: (category: string) => void;
  placeholder?: string;
}

export function CategoryFilterModal({
  selectedCategory,
  onCategorySelect,
  placeholder = "Pilih kategori...",
}: CategoryFilterModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSelectedCategory, setTempSelectedCategory] = useState(
    selectedCategory || ""
  );
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const getTreeItems = () => {
    const items: Array<{
      id: string;
      name: string;
      type: "category" | "subcategory";
      hasSubcategories?: boolean;
      parentName?: string;
      level: number;
    }> = [];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();

      categories.forEach((category) => {
        if (category.name.toLowerCase().includes(query)) {
          items.push({
            id: category.id,
            name: category.name,
            type: "category",
            hasSubcategories: category.hasSubcategories,
            level: 0,
          });
        }

        if (category.subcategories) {
          category.subcategories.forEach((subcategory) => {
            if (subcategory.name.toLowerCase().includes(query)) {
              items.push({
                id: subcategory.id,
                name: subcategory.name,
                type: "subcategory",
                parentName: category.name,
                level: 1,
              });
            }
          });
        }
      });
    } else {
      categories.forEach((category) => {
        items.push({
          id: category.id,
          name: category.name,
          type: "category",
          hasSubcategories: category.hasSubcategories,
          level: 0,
        });

        if (expandedCategories.has(category.id) && category.subcategories) {
          category.subcategories.forEach((subcategory) => {
            items.push({
              id: subcategory.id,
              name: subcategory.name,
              type: "subcategory",
              level: 1,
            });
          });
        }
      });
    }

    return items;
  };

  const treeItems = getTreeItems();

  const handleItemClick = (item: {
    id: string;
    type: string;
    hasSubcategories?: boolean;
  }) => {
    if (item.type === "category" && item.hasSubcategories && !searchQuery) {
      const newExpanded = new Set(expandedCategories);
      if (newExpanded.has(item.id)) {
        newExpanded.delete(item.id);
      } else {
        newExpanded.add(item.id);
      }
      setExpandedCategories(newExpanded);
    } else {
      setTempSelectedCategory(item.id);
    }
  };

  const handleSave = () => {
    if (onCategorySelect) {
      onCategorySelect(tempSelectedCategory);
    }
    setIsOpen(false);
    setExpandedCategories(new Set());
  };

  const getSelectedCategoryName = () => {
    for (const category of categories) {
      if (category.subcategories) {
        const subcategory = category.subcategories.find(
          (sub) => sub.id === selectedCategory
        );
        if (subcategory) {
          return subcategory.name;
        }
      }
    }
    return categories.find((cat) => cat.id === selectedCategory)?.name;
  };

  const selectedCategoryName = getSelectedCategoryName();

  return (
    <>
      <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
        <Input
          value={selectedCategoryName || ""}
          placeholder={placeholder}
          readOnly
          className="cursor-pointer pr-10"
        />
        <ShoppingBag className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <DialogTitle className="text-xl font-semibold text-gray-900">
              {searchQuery ? "Hasil Pencarian" : "Pilih Kategori"}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>

          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Cari kategori atau subcategori"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="max-h-80 overflow-y-auto space-y-1">
              {treeItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between rounded-lg cursor-pointer transition-colors ${
                    tempSelectedCategory === item.id
                      ? "bg-blue-50 border border-blue-200"
                      : "hover:bg-gray-50"
                  } ${item.level === 1 ? "ml-6 p-2" : "p-3"}`}
                  onClick={() => handleItemClick(item)}
                >
                  <div className="flex flex-col">
                    <span
                      className={`${
                        item.level === 1
                          ? "text-gray-600 text-sm"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </span>
                    {item.type === "subcategory" &&
                      item.parentName &&
                      searchQuery && (
                        <span className="text-xs text-gray-500">
                          dalam {item.parentName}
                        </span>
                      )}
                  </div>
                  {item.hasSubcategories &&
                    !searchQuery &&
                    (expandedCategories.has(item.id) ? (
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    ))}
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <Button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
              >
                Simpan
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
