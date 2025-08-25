"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CampaignSection() {
  const [currentCampaign, setCurrentCampaign] = useState(0);

  const campaigns = [
    {
      id: 1,
      title: "Rescuers Thank You For Helping Get Hoarded Dogs Healthy!",
      description:
        "Vehicula vehicula, occaecati nullam excepteur magnam culpa sit, placerat ligula pede earum reprehenderit.",
      image:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "Shop Now",
      backgroundColor: "from-amber-100 to-amber-200",
    },
    {
      id: 2,
      title: "Help Us Save More Lives This Winter Season",
      description:
        "Join our mission to provide warm shelter and nutritious food for abandoned pets during the cold months.",
      image:
        "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "Donate Now",
      backgroundColor: "from-blue-100 to-blue-200",
    },
    {
      id: 3,
      title: "Adopt Don't Shop - Find Your Perfect Companion",
      description:
        "Thousands of loving pets are waiting for their forever homes. Give them the love they deserve.",
      image:
        "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "View Pets",
      backgroundColor: "from-green-100 to-green-200",
    },
  ];

  const nextCampaign = () => {
    setCurrentCampaign((prev) => (prev + 1) % campaigns.length);
  };

  const prevCampaign = () => {
    setCurrentCampaign(
      (prev) => (prev - 1 + campaigns.length) % campaigns.length
    );
  };

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Campaigns
          </h2>
          <p className="text-xl text-gray-600">
            Making a difference in pets' lives
          </p>
        </div> */}

        <div className="relative">
          <div
            className={`bg-gradient-to-r ${campaigns[currentCampaign].backgroundColor} rounded-2xl overflow-hidden shadow-2xl transition-all duration-500`}
          >
            <div className="grid lg:grid-cols-2 items-center min-h-[500px]">
              {/* Content */}
              <div className="p-12 lg:p-16 space-y-8">
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {campaigns[currentCampaign].title}
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {campaigns[currentCampaign].description}
                </p>
                <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {campaigns[currentCampaign].buttonText}
                </button>
              </div>

              {/* Image */}
              <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                <img
                  src={campaigns[currentCampaign].image}
                  alt={campaigns[currentCampaign].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevCampaign}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextCampaign}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {campaigns.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCampaign(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentCampaign
                    ? "bg-orange-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
