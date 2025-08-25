import { Calendar, User } from "lucide-react";
import Link from "next/link";

// const blogPosts = [
//   {
//     id: 1,
//     date: "June 30,2024",
//     category: "Pet Care",
//     title: "Essential Guide: 5 Steps to Keep Your Pet Healthy",
//     image:
//       "https://nov-olive-2.myshopify.com/cdn/shop/articles/blog-12_450x450_crop_center.jpg?v=1623224100",
//     slug: "pet-health-guide",
//   },
//   {
//     id: 2,
//     date: "April 02,2024",
//     category: "Training",
//     title: "Best way to train your puppy at home effectively",
//     image: "/placeholder.svg?height=200&width=300",
//     slug: "puppy-training-guide",
//   },
//   {
//     id: 3,
//     date: "Mar 09,2024",
//     category: "Nutrition",
//     title: "Top 10 healthy foods every pet owner should know",
//     image: "/placeholder.svg?height=200&width=300",
//     slug: "healthy-pet-foods",
//   },
//   {
//     id: 4,
//     date: "January 25,2024",
//     category: "Lifestyle",
//     title: "Creative ideas to keep your pet entertained daily",
//     image: "/placeholder.svg?height=200&width=300",
//     slug: "pet-entertainment-ideas",
//   },
//   {
//     id: 5,
//     date: "December 10,2023",
//     category: "Health",
//     title: "Winter Care Guide: Protecting Your Pet's Health",
//     image: "/placeholder.svg?height=200&width=300",
//     slug: "winter-pet-care",
//   },
// ];

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
    excerpt: "Transform your space into a paradise for your feline companions.",
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
];

export function LatestBlog() {
  return (
    // <section className="py-16 bg-white">
    //   <div className="container mx-auto px-4">
    //     <div className="flex justify-between items-center mb-8">
    //       <div>
    //         <h2 className="text-3xl font-bold text-gray-900 mb-2">
    //           Latest <span className="text-green-500">Blog</span>
    //         </h2>
    //         <p className="text-gray-600">
    //           We tackle interesting pet topics every day in 2024.
    //         </p>
    //       </div>
    //       <Link
    //         href="/blog"
    //         className="text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2"
    //       >
    //         All Blogs
    //         <svg
    //           className="w-4 h-4"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M9 5l7 7-7 7"
    //           />
    //         </svg>
    //       </Link>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {blogPosts.slice(0, 4).map((post) => (
    //         <div key={post.id} className="bg-white overflow-hidden group">
    //           <div className="aspect-[4/3] overflow-hidden rounded-xl">
    //             <img
    //               src={post.image || "/placeholder.svg"}
    //               alt={post.title}
    //               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
    //             />
    //           </div>

    //           <div className="p-4">
    //             <div className="text-sm text-gray-500 mb-2">
    //               {post.date} -{" "}
    //               <span className="text-orange-500">{post.category}</span>
    //             </div>
    //             <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
    //               {post.title}
    //             </h3>
    //             <Link
    //               href={`/blog/${post.slug}`}
    //               className="text-gray-600 hover:text-orange-500 transition-colors text-sm flex items-center gap-1"
    //             >
    //               Read More
    //               <svg
    //                 className="w-3 h-3"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   d="M9 5l7 7-7 7"
    //                 />
    //               </svg>
    //             </Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Latest from Our Blog 🐾
            </h2>
            <p className="text-gray-600">Expert tips and advice for pet care</p>
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

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
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

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
