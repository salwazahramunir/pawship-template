import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Paw Ship - Premium Pet Products Catalog",
  description:
    "Discover premium pet products and accessories at Paw Ship. Quality items for your beloved pets with reseller opportunities.",
  generator: "v0.app",
  keywords: "pet products, pet accessories, dog supplies, cat supplies, pet food, reseller program, Indonesia",
  authors: [{ name: "Paw Ship Team" }],
  openGraph: {
    title: "Paw Ship - Premium Pet Products Catalog",
    description:
      "Discover premium pet products and accessories at Paw Ship. Quality items for your beloved pets with reseller opportunities.",
    url: "https://pawship.id",
    siteName: "Paw Ship",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Paw Ship Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paw Ship - Premium Pet Products Catalog",
    description:
      "Discover premium pet products and accessories at Paw Ship. Quality items for your beloved pets with reseller opportunities.",
    images: ["/images/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
