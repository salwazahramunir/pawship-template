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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

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

  return (
    <div className="space-y-6">
      {/* Product Header */}
      <div>
        {/* <div className="flex items-center space-x-2 mb-2">
          <Badge variant="secondary">{product.brand}</Badge>
          {product.badge && <Badge className="bg-primary">{product.badge}</Badge>}
          {product.labels.map((label: string) => (
            <Badge key={label} variant="outline">
              {label}
            </Badge>
          ))}
        </div> */}
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {product.name}
        </h1>
        <p className="text-muted-foreground mb-4">SKU: {product.sku}</p>

        {/* Rating */}
        {/* <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div> */}
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold text-primary">
            {formatPrice(currentPrice[currency])}
          </span>
          {product.originalPrice && (
            <span className="text-xl text-muted-foreground line-through">
              {formatPrice(product.originalPrice[currency])}
            </span>
          )}
          {product.originalPrice &&
            product.or(
              <Badge variant="destructive">
                Save{" "}
                {Math.round(
                  ((product.originalPrice[currency] - currentPrice[currency]) /
                    product.originalPrice[currency]) *
                    100
                )}
                %
              </Badge>
            )}
        </div>

        {/* Currency Selector */}
        {/* <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Currency:</span>
          <Select value={currency} onValueChange={onCurrencyChange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="IDR">IDR</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="SGD">SGD</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
      </div>

      <Separator />

      {/* Variations */}
      <div className="space-y-4">
        {product.variations.map((variation: any) => (
          <div key={variation.type}>
            <label className="text-sm font-medium text-foreground mb-2 block">
              {variation.name}
              {variation.type === "size" &&
                getSelectedSizeInfo()?.measurements && (
                  <span className="text-muted-foreground ml-2">
                    ({getSelectedSizeInfo()?.measurements})
                  </span>
                )}
            </label>
            {variation.type === "color" ? (
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
            ) : (
              <Select
                value={selectedVariations[variation.type]}
                onValueChange={(value) =>
                  handleVariationChange(variation.type, value)
                }
              >
                <SelectTrigger>
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
      <div className="flex items-center space-x-2">
        <div
          className={`w-3 h-3 rounded-full ${
            currentStock > 0 ? "bg-green-500" : "bg-red-500"
          }`}
        />
        <span className="text-sm">
          {currentStock > 0 ? `${currentStock} in stock` : "Out of stock"}
        </span>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center border rounded-lg">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              -
            </Button>
            <span className="px-4 py-2 text-center min-w-[60px]">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.min(currentStock, quantity + 1))}
              disabled={quantity >= currentStock}
            >
              +
            </Button>
          </div>
          <span className="text-sm text-muted-foreground">
            Max: {currentStock}
          </span>
        </div>

        <div className="flex space-x-3">
          <Button className="flex-1" size="lg" disabled={currentStock === 0}>
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={isWishlisted ? "text-red-500 border-red-500" : ""}
          >
            <Heart
              className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`}
            />
          </Button>
          <Button variant="outline" size="lg" onClick={handleShare}>
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>

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
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium text-foreground mb-3">
                Marketing Materials
              </h4>
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
