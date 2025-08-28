"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProductTabsProps {
  product: any;
}

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    user: "Sarah M.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-15",
    title: "Perfect fit for my Golden Retriever!",
    content:
      "This harness is amazing! The quality is excellent and my dog seems much more comfortable during walks. The reflective strips are a great safety feature for evening walks.",
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    user: "Mike R.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2024-01-10",
    title: "Good quality, runs a bit small",
    content:
      "Overall very happy with this purchase. The material feels durable and the padding is comfortable. I'd recommend ordering one size up though.",
    helpful: 8,
    verified: true,
  },
  {
    id: 3,
    user: "Lisa K.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-05",
    title: "Excellent customer service",
    content:
      "Had an issue with sizing and the customer service team was incredibly helpful. They sent a replacement in the correct size quickly. The harness itself is top quality!",
    helpful: 15,
    verified: true,
  },
];

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Card className="bg-secondary/20">
      <CardHeader>
        <h3 className="text-lg font-semibold">Description</h3>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Our Premium Dog Harness with Reflective Strips is designed for
            comfort, safety, and style. Made with high-quality materials and
            featuring reflective strips for enhanced visibility during evening
            walks, this harness ensures your pet's safety while providing
            maximum comfort.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The adjustable design fits most dog breeds and sizes, while the
            padded chest plate prevents chafing and distributes pressure evenly.
            Perfect for daily walks, training, or outdoor adventures.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
