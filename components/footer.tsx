import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt="Paw Ship Logo"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/80 text-sm">
              Premium pet products for your beloved companions. Quality
              guaranteed, love included.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-background hover:text-primary hover:bg-background/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-background hover:text-primary hover:bg-background/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-background hover:text-primary hover:bg-background/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-background hover:text-primary hover:bg-background/10"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Good Cause", href: "/good-cause" },
                { name: "Stores", href: "/stores" },
                { name: "Payments", href: "/payments" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">
              Categories
            </h3>
            <ul className="space-y-2">
              {[
                {
                  name: "Clothing & Accessories",
                  href: "/catalog?category=clothing",
                },
                {
                  name: "Toys & Entertainment",
                  href: "/catalog?category=toys",
                },
                { name: "Health & Care", href: "/catalog?category=health" },
                { name: "Food & Treats", href: "/catalog?category=food" },
                { name: "Reseller Program", href: "/reseller" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">
              Stay Connected
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <Mail className="h-4 w-4" />
                <span>hello@pawship.id</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <Phone className="h-4 w-4" />
                <span>+62 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <MapPin className="h-4 w-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-background/80">
                Subscribe to our newsletter
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Paw Ship. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
}
