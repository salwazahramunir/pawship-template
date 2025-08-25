import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CategoryShowcase() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
          {/* Formal Bib - Large Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="absolute inset-0">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Formal Pet Attire"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-gray-900">
                <p className="text-sm font-medium text-orange-600 mb-2 tracking-wide">NECKWEAR</p>
                <h3 className="text-3xl font-bold mb-4">Formal Bib</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our formal bibs provide excellent essentials for special occasion or celebration such as graduation,
                  wedding, birthday and anniversary. We endeavour to add elegance and joy to your happy moment with pet.
                </p>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-300 bg-transparent"
                  asChild
                >
                  <Link href="/catalog?category=formal-wear">View all</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Casual Bib */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="absolute inset-0">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Casual Pet Attire"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                <p className="text-sm font-medium text-orange-600 mb-2 tracking-wide">NECKWEAR</p>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Casual Bib</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Momoji casual bibs are comfortable, easy, fun and fresh. Whether its morning walk or weekend party for
                  the paws, our trends are effortless to give your pet the edge you've been looking for.
                </p>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-300 bg-transparent"
                  asChild
                >
                  <Link href="/catalog?category=casual-wear">View all</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
