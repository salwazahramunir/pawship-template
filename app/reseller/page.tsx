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
  MessageCircle,
  Send,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: "general" | "services" | "pricing" | "care";
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number>(0); // Default open items

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

  const sections = [
    {
      id: 1,
      icon: <FileText className="w-6 h-6" />,
      title: "Terms of Service",
      content: [
        "By accessing and using our pet care services, you agree to comply with these terms and conditions.",
        "These terms constitute a legally binding agreement between you and our company.",
        "We reserve the right to modify these terms at any time with prior notice to our customers.",
        "Continued use of our services after changes indicates acceptance of the new terms.",
      ],
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6" />,
      title: "User Responsibilities",
      content: [
        "Pet owners must provide accurate information about their pet's health, behavior, and special needs.",
        "Vaccination records and health certificates must be up-to-date and provided upon request.",
        "Clients are responsible for any damage caused by their pets to our facilities or equipment.",
        "All appointments must be cancelled at least 24 hours in advance to avoid cancellation fees.",
      ],
    },
    {
      id: 3,
      icon: <Shield className="w-6 h-6" />,
      title: "Service Limitations & Liability",
      content: [
        "Our services are provided with reasonable care and skill, but we cannot guarantee specific outcomes.",
        "We are not liable for pre-existing health conditions or behavioral issues in pets.",
        "Emergency veterinary care will be provided at owner's expense if needed during services.",
        "Our liability is limited to the cost of the specific service provided.",
      ],
    },
    {
      id: 4,
      icon: <Scale className="w-6 h-6" />,
      title: "Payment Terms",
      content: [
        "Payment is due at the time of service unless prior arrangements have been made.",
        "We accept cash, credit cards, and approved payment plans for qualifying customers.",
        "Late payment fees may apply to overdue accounts after a 30-day grace period.",
        "Refunds are provided only in cases of service cancellation by our company.",
      ],
    },
  ];

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

        {/* Terms & Condition */}
        <section className="py-20 mx-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Terms & Conditions 🐾
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                Please read these terms and conditions carefully before using
                our pet care services. These terms outline your rights and
                responsibilities as our valued customer.
              </p>
              <div className="inline-flex items-center space-x-2 text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                <Clock size={16} />
                <span>Last updated: "January 15, 2024"</span>
              </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-8 mb-12">
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300"
                  >
                    {/* <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6"> */}
                    <div className="bg-[linear-gradient(to_right,#F69784,#FBBD87)] p-6">
                      <div className="flex items-center space-x-3 text-white">
                        {section.icon}
                        <h2 className="text-xl font-bold">{section.title}</h2>
                      </div>
                    </div>

                    <div className="p-8">
                      <ul className="space-y-4">
                        {section.content.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-[#F69784] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#FFF2E2] mx-10  rounded-3xl">
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

        {/* <section className="py-20 mx-10 rounded-3xl m-10  bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="bg-white rounded-2xl shadow-lg p-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="order-support">Order Support</option>
                  <option value="shipping">Shipping & Delivery</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="reseller">Reseller Program</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </section> */}

        <section
          className="py-20 text-primary-foreground m-10 rounded-3xl"
          style={{ background: `linear-gradient(to right, #FBBD87, #F69784)` }}
        >
          <div className="container mx-auto px-4 text-center space-y-4">
            <h2 className="text-3xl lg:text-3xl font-bold text-white">
              Register to Become a Reseller
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Please submit data via WhatsApp, the admin will provide an answer.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Send className="w-4 h-4" />
              Kirim via WhatsApp
            </Button>
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
