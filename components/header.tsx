"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, User, Menu, X, MapPin, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Good Cause", href: "/good-cause" },
    { name: "Stores", href: "/stores" },
    { name: "Payments", href: "/payments" },
    { name: "Reseller", href: "/reseller" },
    { name: "Blog", href: "/blog" },
  ];
  const pathname = usePathname(); // Dapatkan jalur saat ini

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearch) {
      searchRef.current?.focus();
    }
  }, [showSearch]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      {/* <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-center text-sm">
            <div className="text-gray-700 font-medium">
              World's Fastest Online Pet Shopping Destination
            </div>
          </div>
        </div>
      </div> */}

      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <Link href="" className="flex items-center space-x-2 flex-shrink-0">
              <img
                src="/images/logo-transparan.png"
                alt="Logo Pawship"
                className="h-16 w-auto md:h-20" // Atur ukuran logo
              />
            </Link>

            <div className="hidden lg:flex h-12 items-center justify-center">
              <nav className="flex items-center space-x-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-sm font-medium text-foreground/80 ${
                        isActive ? "text-primary" : ""
                      } hover:text-primary transition-colors relative group py-3`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full`}
                      ></span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* {showSearch ? (
              <div className="flex items-center space-x-2 flex-1 max-w-lg mx-4">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search for pet products, toys, food..."
                    className="pl-10 pr-4 h-10 border-2 border-orange-200 focus:border-orange-400"
                    autoFocus
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSearch(false)}
                  className="flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2 flex-1 max-w-lg mx-6">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search for pet products, toys, food..."
                    className="pl-10 pr-4 h-10 border-2 border-orange-200 focus:border-orange-400"
                  />
                </div>
              </div>
            )} */}
            <div className="flex items-center space-x-1 relative">
              {showSearch && (
                <>
                  <div className="absolute top-10 w-full left-0 bg-white rounded-[5px] opacity-90">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-10 pr-4 h-10 border-2 border-orange-200 focus:border-orange-400"
                      ref={searchRef}
                      onBlur={() => setShowSearch(false)}
                    />
                  </div>
                  <Button
                    // variant="ghost"
                    size="icon"
                    onClick={() => {
                      setShowSearch(false);
                    }}
                    className="flex-shrink-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </>
              )}
              {!showSearch && (
                <Button
                  variant="ghost"
                  size="icon"
                  className=""
                  onClick={() => {
                    setShowSearch(true);
                  }}
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}

              {/* Location Selector */}
              <p className="flex items-center space-x-1 px-3">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="hidden sm:block text-sm">Jakarta</span>
              </p>
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-1 px-3"
                  >
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span className="hidden sm:block text-sm">Jakarta</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-2 py-1 text-xs text-muted-foreground">
                    Select your location
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <MapPin className="h-4 w-4 mr-2" />
                    Jakarta, Indonesia
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MapPin className="h-4 w-4 mr-2" />
                    Surabaya, Indonesia
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MapPin className="h-4 w-4 mr-2" />
                    Bandung, Indonesia
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MapPin className="h-4 w-4 mr-2" />
                    Singapore
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MapPin className="h-4 w-4 mr-2" />
                    Kuala Lumpur, Malaysia
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/reseller">Reseller Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/">Admin Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/reseller">Join as Reseller</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="h-8 w-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                      🐾
                    </div>
                    <span className="text-lg font-bold text-primary">
                      Paw Ship
                    </span>
                  </div>

                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}

                    <div className="border-t pt-4 mt-6 space-y-3">
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        Account
                      </h3>
                      <Link
                        href="/reseller/login"
                        className="text-base font-medium text-foreground hover:text-primary transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Reseller Login
                      </Link>
                      <Link
                        href="/admin/login"
                        className="text-base font-medium text-foreground hover:text-primary transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Admin Login
                      </Link>
                      <Link
                        href="/reseller"
                        className="text-base font-medium text-primary hover:text-primary/80 transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Join as Reseller →
                      </Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* <div className="hidden lg:flex h-12 items-center justify-center border-t border-border/50">
            <nav className="flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium text-foreground/80 ${
                      isActive ? "text-primary" : ""
                    } hover:text-primary transition-colors relative group py-3`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full`}
                    ></span>
                  </Link>
                );
              })}
            </nav>
          </div> */}
        </div>
      </div>
    </header>
  );
}
