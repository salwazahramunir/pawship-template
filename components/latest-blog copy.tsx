import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    date: "June 30,2024",
    category: "Pet Care",
    title: "Essential Guide: 5 Steps to Keep Your Pet Healthy",
    image:
      "https://nov-olive-2.myshopify.com/cdn/shop/articles/blog-12_450x450_crop_center.jpg?v=1623224100",
    slug: "pet-health-guide",
  },
  {
    id: 2,
    date: "April 02,2024",
    category: "Training",
    title: "Best way to train your puppy at home effectively",
    image: "/placeholder.svg?height=200&width=300",
    slug: "puppy-training-guide",
  },
  {
    id: 3,
    date: "Mar 09,2024",
    category: "Nutrition",
    title: "Top 10 healthy foods every pet owner should know",
    image: "/placeholder.svg?height=200&width=300",
    slug: "healthy-pet-foods",
  },
  {
    id: 4,
    date: "January 25,2024",
    category: "Lifestyle",
    title: "Creative ideas to keep your pet entertained daily",
    image: "/placeholder.svg?height=200&width=300",
    slug: "pet-entertainment-ideas",
  },
  {
    id: 5,
    date: "December 10,2023",
    category: "Health",
    title: "Winter Care Guide: Protecting Your Pet's Health",
    image: "/placeholder.svg?height=200&width=300",
    slug: "winter-pet-care",
  },
];

export function LatestBlogCopy() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Latest <span className="text-green-500">Blog</span>
            </h2>
            <p className="text-gray-600">
              We tackle interesting pet topics every day in 2024.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2"
          >
            All Blogs
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.slice(0, 4).map((post) => (
            <div key={post.id} className="bg-white overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
                />
              </div>

              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">
                  {post.date} -{" "}
                  <span className="text-orange-500">{post.category}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm flex items-center gap-1"
                >
                  Read More
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
