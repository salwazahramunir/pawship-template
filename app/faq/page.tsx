"use client";
import React, { useState } from "react";
import {
  Plus,
  Minus,
  Phone,
  Clock,
  AlertTriangle,
  Scale,
  Shield,
  Users,
  FileText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: "general" | "services" | "pricing" | "care";
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number>(1); // Default open items

  const faqData: FAQItem[] = [
    {
      id: 1,
      category: "general",
      question: "Could you suggest a trustworthy veterinarian",
      answer:
        "We work with certified and experienced veterinarians in your area. Our network includes specialists in various fields including surgery, dermatology, and emergency care. Contact us for personalized recommendations based on your pet's specific needs.",
    },
    {
      id: 2,
      category: "services",
      question: "Which products aid in controlling odors and shedding",
      answer:
        "We recommend high-quality shampoos with natural ingredients, regular grooming tools like deshedding brushes, and specialized treatments. Our grooming packages include products that effectively reduce shedding and control odors while maintaining your pet's coat health.",
    },
    {
      id: 3,
      category: "general",
      question: "This week, are there any adoption-related events",
      answer:
        "Yes! We regularly host adoption events in partnership with local shelters. Check our events calendar on our website or follow our social media for the latest updates on upcoming adoption drives and meet-and-greet sessions.",
    },
    {
      id: 4,
      category: "care",
      question: "What kinds of treats would you suggest for your dogs",
      answer:
        "We recommend natural, grain-free treats with high protein content. Popular options include freeze-dried meat treats, dental chews for oral health, and training treats that are small and easy to digest. Always choose treats appropriate for your dog's size and dietary restrictions.",
    },
    {
      id: 5,
      category: "care",
      question: "For puppies and kittens, which toys are the safest",
      answer:
        "Safety is our top priority for young pets. We recommend soft rubber toys without small parts, rope toys for teething, interactive puzzle toys for mental stimulation, and always supervised play. Avoid toys with small parts that could be swallowed.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      return prev === id ? 0 : id;
    });
  };

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section
          className="relative h-[60vh] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/d4/43/81/d4438191c0a232f22ff4b106bef0782b.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Overlay hitam */}
          <div className="relative z-10 flex items-center justify-center h-full text-white">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground">
                Reseller Program
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Join <span className="text-primary">Pawship</span> Reseller
              </h1>
              {/* <p className="text-xl  max-w-3xl mx-auto">
                At Paw Ship, we believe every pet deserves the best. Founded by
                pet lovers for pet lovers, we curate premium products that
                enhance the bond between you and your beloved companions.
              </p> */}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#FFF2E2] m-10 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions 🐾
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find quick answers to common questions about our pet care
                services, pricing, and policies.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-4">
                {faqData.map((item) => (
                  <FAQCard
                    key={item.id}
                    item={item}
                    isOpen={openItems === item.id}
                    onToggle={() => toggleItem(item.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface FAQCardProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQCard: React.FC<FAQCardProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className={`rounded-xl shadow-md transition-all duration-300 transform hover:shadow-lg mx-4 ${
        isOpen
          ? "bg-[#F69784] text-white scale-105"
          : "bg-white hover:scale-102"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
      >
        <span
          className={`font-medium text-sm md:text-base ${
            isOpen ? "text-white" : "text-gray-800"
          }`}
        >
          {item.question}?
        </span>
        <div
          className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "bg-white/20 rotate-180" : "bg-gray-100"
          }`}
        >
          {isOpen ? (
            <Minus size={16} className="text-white" />
          ) : (
            <Plus size={16} className="text-gray-600" />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <div className="px-6">
          <div
            className={`text-sm leading-relaxed ${
              isOpen ? "text-white/90" : "text-gray-600"
            }`}
          >
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
