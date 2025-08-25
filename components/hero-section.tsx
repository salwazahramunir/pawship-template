import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-150px)] min-w-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/1200x/00/b0/c7/00b0c7139419b275c2a7dc1b3f8d61d0.jpg"
          alt="Premium pet products and happy pets"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 z-0 flex items-center justify-end pr-8 md:pr-16 lg:pr-24">
        <div className="text-right space-y-6 max-w-md">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
            Discover Premium Pet Products
          </h1>
          <Link href="/catalog">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
