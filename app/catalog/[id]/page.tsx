"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ProductImageGallery } from "@/components/product/product-image-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { ProductTabs } from "@/components/product/product-tabs";
import { RelatedProducts } from "@/components/product/related-products";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Mock product data - in real app this would come from API
const mockProduct = {
  id: 1,
  name: "Emily Dress",
  brand: "PawPremium",
  sku: "PP-DH-001",
  price: {
    IDR: 135000,
    USD: Math.round((135000 / 299000) * 20),
    SGD: Math.round((135000 / 299000) * 27),
  },
  originalPrice: { IDR: 139000, USD: 27, SGD: 36 },
  rating: 4.8,
  reviews: 124,
  category: "Clothings",
  subcategory: "harnesses",
  inStock: true,
  stockCount: 45,
  badge: "Best Seller",
  tags: ["premium", "comfortable", "adjustable", "reflective"],
  description:
    "Experience the perfect blend of comfort, safety, and style with our Premium Dog Harness. Designed with your pet's comfort in mind, this harness features breathable mesh padding, adjustable straps, and reflective strips for enhanced visibility during evening walks.",
  features: [
    "Breathable mesh padding for maximum comfort",
    "Adjustable chest and neck straps",
    "Reflective strips for night visibility",
    "Durable nylon construction",
    "Easy-clip buckles for quick fitting",
    "Machine washable",
  ],
  specifications: {
    material: "Premium Nylon with Mesh Padding",
    weight: "150g",
    colors: ["Black", "Blue", "Red", "Pink"],
    sizes: ["XS", "S", "M", "L", "XL"],
    warranty: "1 Year",
  },
  images: [
    "https://assets-alpha.ass8c.upcloudobjects.com/lcalpfppqguq0roimuqk0a/images/shopee_post_-_2024-11-07t125845.277.png",
    "https://assets-alpha.ass8c.upcloudobjects.com/lcalpfppqguq0roimuqk0a/images/shopee_post_-_2024-11-07t125852.193.png",
  ],
  videos: [
    {
      url: "/placeholder-video.mp4",
      thumbnail: "/placeholder.svg?height=300&width=400",
      title: "How to Fit the Harness",
    },
  ],
  variations: [
    {
      type: "size",
      name: "Size",
      options: [
        {
          value: "S",
          label: "Small",
          price: { IDR: 140000, USD: 20, SGD: 27 },
          stock: 15,
          measurements: "Chest: 35-45cm, Neck: 25-30cm",
        },
        {
          value: "M",
          label: "Medium",
          price: { IDR: 140000, USD: 22, SGD: 29 },
          stock: 8,
          measurements: "Chest: 45-55cm, Neck: 30-35cm",
        },
        {
          value: "L",
          label: "Large",
          price: { IDR: 145000, USD: 23, SGD: 31 },
          stock: 6,
          measurements: "Chest: 55-65cm, Neck: 35-40cm",
        },
        {
          value: "XL",
          label: "Extra Large",
          price: { IDR: 145000, USD: 25, SGD: 33 },
          stock: 4,
          measurements: "Chest: 65-75cm, Neck: 40-45cm",
        },
      ],
    },
    {
      type: "color",
      name: "Color",
      options: [
        { value: "black", label: "Black", colorCode: "#000000", stock: 20 },
        { value: "blue", label: "Navy Blue", colorCode: "#1e3a8a", stock: 15 },
        { value: "red", label: "Red", colorCode: "#dc2626", stock: 8 },
        { value: "pink", label: "Pink", colorCode: "#ec4899", stock: 2 },
      ],
    },
  ],
  customSizeAvailable: true,
  customSizeInfo:
    "Need a custom size? Contact us with your pet's measurements and we'll create a perfect fit!",
  labels: ["Pre-Order Available", "Fast Shipping", "Vet Recommended"],
  downloadableContent: [
    {
      type: "image",
      title: "High-Resolution Product Photos",
      description: "Download professional product photos for marketing",
      url: "/downloads/harness-photos.zip",
    },
    {
      type: "video",
      title: "Product Demo Video",
      description: "Marketing video showing product features",
      url: "/downloads/harness-demo.mp4",
    },
    {
      type: "guide",
      title: "Sizing Guide PDF",
      description: "Complete sizing and fitting guide",
      url: "/downloads/sizing-guide.pdf",
    },
  ],
};

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(mockProduct);
  const [selectedVariations, setSelectedVariations] = useState({
    size: "M",
    color: "black",
  });
  const [currency, setCurrency] = useState("IDR");

  // Detect user location and set currency
  useEffect(() => {
    const detectLocation = () => {
      const userLang = navigator.language;
      if (userLang.includes("en-US")) setCurrency("USD");
      else if (userLang.includes("en-SG")) setCurrency("SGD");
      else setCurrency("IDR");
    };
    detectLocation();
  }, []);

  // Calculate current price based on selected variations
  const getCurrentPrice = () => {
    const sizeVariation = product.variations.find((v) => v.type === "size");
    const selectedSize = sizeVariation?.options.find(
      (opt) => opt.value === selectedVariations.size
    );
    return selectedSize?.price || product.price;
  };

  // Calculate current stock based on selected variations
  const getCurrentStock = () => {
    const sizeVariation = product.variations.find((v) => v.type === "size");
    const colorVariation = product.variations.find((v) => v.type === "color");
    const selectedSize = sizeVariation?.options.find(
      (opt) => opt.value === selectedVariations.size
    );
    const selectedColor = colorVariation?.options.find(
      (opt) => opt.value === selectedVariations.color
    );

    return Math.min(selectedSize?.stock || 0, selectedColor?.stock || 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/catalog">Catalog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {/* <BreadcrumbItem>
              <BreadcrumbLink href={`/catalog?category=${product.category}`}>
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator /> */}
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <ProductImageGallery
            images={product.images}
            videos={product.videos}
            productName={product.name}
          />

          {/* Product Info */}
          <ProductInfo
            product={product}
            selectedVariations={selectedVariations}
            onVariationChange={setSelectedVariations}
            currency={currency}
            onCurrencyChange={setCurrency}
            currentPrice={getCurrentPrice()}
            currentStock={getCurrentStock()}
          />
        </div>

        {/* Product Tabs */}
        <ProductTabs product={product} />

        {/* Related Products */}
        <RelatedProducts
          category={product.category}
          currentProductId={product.id}
        />
      </main>
    </div>
  );
}
