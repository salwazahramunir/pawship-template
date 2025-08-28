"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Info,
  Minus,
  Plus,
  Download,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ProductInfoProps {
  product: any;
  selectedVariations: any;
  onVariationChange: (variations: any) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  currentPrice: any;
  currentStock: number;
}

export function ProductInfo({
  product,
  selectedVariations,
  onVariationChange,
  currency,
  onCurrencyChange,
  currentPrice,
  currentStock,
}: ProductInfoProps) {
  console.log(currentPrice, "<<");

  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");

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

  const handleVariationChange = (type: string, value: string) => {
    onVariationChange({ ...selectedVariations, [type]: value });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const getSelectedSizeInfo = () => {
    const sizeVariation = product.variations.find(
      (v: any) => v.type === "size"
    );
    return sizeVariation?.options.find(
      (opt: any) => opt.value === selectedVariations.size
    );
  };

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="space-y-6">
      {/* Product Header */}
      <div>
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold text-balance mb-2">
              Premium Dog Harness with Reflective Strips
            </h1>
            <p className="text-muted-foreground mb-4">SKU: PP-DH-001</p>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Price */}
        {/* <div className="flex items-baseline space-x-3 mb-6">
          <span className="text-4xl font-bold text-primary">Rp 135,000</span>
          <span className="text-xl text-muted-foreground line-through">
            Rp 139,000
          </span>
          <Badge variant="destructive">
            Save{" "}
            {Math.round(
              ((product.originalPrice[currency] - currentPrice[currency]) /
                product.originalPrice[currency]) *
                100
            )}
            %
          </Badge>
        </div> */}

        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold text-primary">
            {formatPrice(currentPrice["IDR"])}
          </span>
          {product.originalPrice && (
            <span className="text-xl text-muted-foreground line-through">
              {formatPrice(product.originalPrice["IDR"])}
            </span>
          )}
          {product.originalPrice &&
            product.originalPrice["IDR"] !== product.price["IDR"] && (
              <Badge variant="destructive">
                Save{" "}
                {Math.round(
                  ((product.originalPrice["IDR"] - currentPrice["IDR"]) /
                    product.originalPrice["IDR"]) *
                    100
                )}
                %
              </Badge>
            )}
        </div>
      </div>

      <Separator />

      {/* Variations */}
      <div className="space-y-4">
        {product.variations.map((variation: any) => (
          <div key={variation.type}>
            {variation.type === "color" ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium">Color</label>
                </div>
                <div className="flex items-center space-x-2">
                  {variation.options.map((option: any) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        handleVariationChange(variation.type, option.value)
                      }
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedVariations[variation.type] === option.value
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-muted-foreground"
                      }`}
                      style={{ backgroundColor: option.colorCode }}
                      title={option.label}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {
                      variation.options.find(
                        (opt: any) =>
                          opt.value === selectedVariations[variation.type]
                      )?.label
                    }
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium">Size</label>
                  <span className="text-sm text-muted-foreground">
                    (Chest: 45-55cm, Neck: 30-35cm)
                  </span>
                </div>
                <Select
                  value={selectedVariations[variation.type]}
                  onValueChange={(value) =>
                    handleVariationChange(variation.type, value)
                  }
                >
                  <SelectTrigger className="w-full  border-gray-300 hover:border-orange-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {variation.options.map((option: any) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        disabled={option.stock === 0}
                      >
                        {option.label} {option.stock === 0 && "(Out of Stock)"}
                        {option.price &&
                          option.price[currency] !== currentPrice[currency] && (
                            <span className="ml-2 text-muted-foreground">
                              ({formatPrice(option.price[currency])})
                            </span>
                          )}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Custom Size */}
      {product.customSizeAvailable && (
        <Card className="bg-secondary/20">
          <CardContent className="p-4">
            <div className="flex items-start space-x-2">
              <Info className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground">
                  Custom Size Available
                </h4>
                <p className="text-sm text-muted-foreground">
                  {product.customSizeInfo}
                </p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Contact for Custom Size
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stock Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-green-600 font-medium">8 in stock</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium">Quantity:</span>
          <div className="flex items-center border border-border rounded-lg">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 rounded-r-none"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 rounded-l-none"
              onClick={() => setQuantity(Math.min(8, quantity + 1))}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <span className="text-sm text-muted-foreground">Max: 8</span>
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <Button
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Add to Cart
      </Button>

      <Separator />

      {/* Features */}
      {/* <div className="grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center space-y-2">
          <Truck className="h-6 w-6 text-primary" />
          <span className="text-xs text-muted-foreground">Free Shipping</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xs text-muted-foreground">1 Year Warranty</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <RotateCcw className="h-6 w-6 text-primary" />
          <span className="text-xs text-muted-foreground">30 Day Returns</span>
        </div>
      </div> */}

      {/* Downloadable Content */}
      {product.downloadableContent &&
        product.downloadableContent.length > 0 && (
          <Card className="bg-secondary/20">
            <CardHeader>
              <h3 className="text-lg font-semibold">Marketing Materials</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {product.downloadableContent.map(
                  (content: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm font-medium">{content.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {content.description}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        )}
    </div>
  );
}
