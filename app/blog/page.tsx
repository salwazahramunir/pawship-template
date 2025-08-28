import { Badge } from "@/components/ui/badge";
import React from "react";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for New Pet Owners",
      excerpt:
        "Everything you need to know before bringing your furry friend home.",
      image:
        "https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Dr. Sarah Johnson",
      date: "2025-01-15",
      category: "Pet Care",
    },
    {
      id: 2,
      title: "The Best Nutrition Guide for Active Dogs",
      excerpt:
        "Keep your athletic companion healthy with proper nutrition and supplements.",
      image:
        "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Mike Thompson",
      date: "2025-01-12",
      category: "Nutrition",
    },
    {
      id: 3,
      title: "Creating a Cat-Friendly Home Environment",
      excerpt:
        "Transform your space into a paradise for your feline companions.",
      image:
        "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Emma Wilson",
      date: "2025-01-10",
      category: "Home Setup",
    },
    {
      id: 4,
      title: "10 Essential Tips for New Pet Owners",
      excerpt:
        "Everything you need to know before bringing your furry friend home.",
      image:
        "https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Dr. Sarah Johnson",
      date: "2025-01-15",
      category: "Pet Care",
    },
    {
      id: 5,
      title: "Creating a Cat-Friendly Home Environment",
      excerpt:
        "Transform your space into a paradise for your feline companions.",
      image:
        "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Emma Wilson",
      date: "2025-01-10",
      category: "Home Setup",
    },
    {
      id: 6,
      title: "10 Essential Tips for New Pet Owners",
      excerpt:
        "Everything you need to know before bringing your furry friend home.",
      image:
        "https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Dr. Sarah Johnson",
      date: "2025-01-15",
      category: "Pet Care",
    },
    {
      id: 7,
      title: "10 Essential Tips for New Pet Owners",
      excerpt:
        "Everything you need to know before bringing your furry friend home.",
      image:
        "https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Dr. Sarah Johnson",
      date: "2025-01-15",
      category: "Pet Care",
    },
    {
      id: 8,
      title: "The Best Nutrition Guide for Active Dogs",
      excerpt:
        "Keep your athletic companion healthy with proper nutrition and supplements.",
      image:
        "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Mike Thompson",
      date: "2025-01-12",
      category: "Nutrition",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <main>
        {/* Hero Section */}
        <section
          className="relative h-[60vh] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/19/f7/85/19f7856880d216beb860d9fde63bfa08.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Overlay hitam */}
          <div className="relative z-10 flex items-center justify-center h-full text-white">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground">
                Our Blog
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Insights & Stories for Your{" "}
                <span className="text-primary">Beloved Pets</span>
              </h1>
              {/* <p className="text-xl  max-w-3xl mx-auto">
                At Paw Ship, we believe every pet deserves the best. Founded by
                pet lovers for pet lovers, we curate premium products that
                enhance the bond between you and your beloved companions.
              </p> */}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer mb-10"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>

                    <Separator />

                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
