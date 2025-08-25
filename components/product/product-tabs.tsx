"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProductTabsProps {
  product: any
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
]

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
        <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="specifications" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-muted">
                  <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                  <span className="text-muted-foreground">{Array.isArray(value) ? value.join(", ") : value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reviews" className="mt-6">
        <div className="space-y-6">
          {/* Review Summary */}
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{product.rating}</div>
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">Based on {product.reviews} reviews</p>
                </div>

                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center space-x-2">
                      <span className="text-sm w-8">{stars}★</span>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{
                            width: `${Math.random() * 80 + 10}%`, // Mock data
                          }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8">{Math.floor(Math.random() * 50)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Individual Reviews */}
          <div className="space-y-4">
            {mockReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={review.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{review.user}</span>
                          {review.verified && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">{review.title}</span>
                      </div>

                      <p className="text-muted-foreground">{review.content}</p>

                      <div className="flex items-center space-x-4 pt-2">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Helpful ({review.helpful})
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          Not Helpful
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="shipping" className="mt-6">
        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-muted">
                  <span className="font-medium">Free Shipping</span>
                  <span className="text-muted-foreground">Orders over Rp 200,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-muted">
                  <span className="font-medium">Standard Delivery</span>
                  <span className="text-muted-foreground">3-5 business days</span>
                </div>
                <div className="flex justify-between py-2 border-b border-muted">
                  <span className="font-medium">Express Delivery</span>
                  <span className="text-muted-foreground">1-2 business days</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Return Policy</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• 30-day return window from delivery date</p>
                <p>• Items must be unused and in original packaging</p>
                <p>• Free returns for defective or damaged items</p>
                <p>• Customer pays return shipping for size exchanges</p>
                <p>• Refunds processed within 5-7 business days</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Warranty</h3>
              <p className="text-muted-foreground">
                All products come with a 1-year manufacturer warranty covering defects in materials and workmanship.
                Normal wear and tear is not covered under warranty.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
