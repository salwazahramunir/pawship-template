"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Expand,
  Download,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ProductImageGalleryProps {
  images: string[];
  videos?: Array<{
    url: string;
    thumbnail: string;
    title: string;
  }>;
  productName: string;
}

export function ProductImageGallery({
  images,
  videos = [],
  productName,
}: ProductImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const allMedia = [
    ...images.map((img, index) => ({ type: "image", src: img, index })),
    ...videos.map((video, index) => ({
      type: "video",
      src: video.thumbnail,
      videoUrl: video.url,
      title: video.title,
      index,
    })),
  ];

  const currentMedia = isVideoMode
    ? videos[currentVideoIndex]
    : images[currentIndex];

  const nextImage = () => {
    if (isVideoMode) {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (isVideoMode) {
      setCurrentVideoIndex(
        (prev) => (prev - 1 + videos.length) % videos.length
      );
    } else {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const selectMedia = (index: number, type: string) => {
    if (type === "video") {
      setIsVideoMode(true);
      setCurrentVideoIndex(index);
    } else {
      setIsVideoMode(false);
      setCurrentIndex(index);
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Image/Video Display */}
      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
        {isVideoMode ? (
          <video
            src={videos[currentVideoIndex]?.url}
            poster={videos[currentVideoIndex]?.thumbnail}
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${productName} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        )}

        {/* Navigation Arrows */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Expand Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Expand className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-full">
            <div className="aspect-square">
              {isVideoMode ? (
                <video
                  src={videos[currentVideoIndex]?.url}
                  poster={videos[currentVideoIndex]?.thumbnail}
                  controls
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <img
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt={`${productName} - Image ${currentIndex + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Download Button */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Download className="h-4 w-4" />
        </Button>

        {/* Media Type Badge */}
        {isVideoMode && (
          <Badge className="absolute bottom-4 left-4 bg-black/70 text-white">
            <Play className="h-3 w-3 mr-1" />
            Video
          </Badge>
        )}
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-5 gap-2">
        {allMedia.map((media, index) => (
          <button
            key={index}
            onClick={() => selectMedia(media.index, media.type)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              (media.type === "image" &&
                !isVideoMode &&
                media.index === currentIndex) ||
              (media.type === "video" &&
                isVideoMode &&
                media.index === currentVideoIndex)
                ? "border-primary"
                : "border-transparent hover:border-muted-foreground"
            }`}
          >
            <img
              src={media.src || "/placeholder.svg"}
              alt={`${productName} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {media.type === "video" && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Play className="h-4 w-4 text-white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
