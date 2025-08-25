"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, Users, FileText, TrendingUp, ShoppingCart, Star, LogOut } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("admin_token")
    if (!token) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("admin_token")
    router.push("/admin/login")
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Kelola sistem Paw Ship</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-red-100 text-red-800">Administrator</Badge>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Produk</p>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                </div>
                <Package className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">89</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pesanan Bulan Ini</p>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                </div>
                <ShoppingCart className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">Rp 45.2M</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link href="/admin/products">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Package className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                <CardTitle>Kelola Produk</CardTitle>
                <CardDescription>Tambah, edit, hapus produk dan stok</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/admin/users">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                <CardTitle>Kelola Users</CardTitle>
                <CardDescription>Manajemen reseller dan admin</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/admin/content">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <FileText className="w-12 h-12 text-green-500 mx-auto mb-2" />
                <CardTitle>Kelola Konten</CardTitle>
                <CardDescription>Blog, kategori, dan promosi</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/admin/analytics">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-2" />
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Laporan dan statistik</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Aktivitas Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "Produk baru ditambahkan", item: "Premium Dog Collar", time: "2 menit lalu" },
                  { action: "Reseller baru terdaftar", item: "Pet Store Jakarta", time: "15 menit lalu" },
                  { action: "Stok diperbarui", item: "Cat Food Premium", time: "1 jam lalu" },
                  { action: "Blog post dipublikasi", item: "Tips Merawat Anjing", time: "3 jam lalu" },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.item}</p>
                    </div>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Produk Populer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Premium Dog Food", sales: 45, rating: 4.8 },
                  { name: "Interactive Cat Toy", sales: 38, rating: 4.9 },
                  { name: "Pet Carrier Bag", sales: 32, rating: 4.7 },
                  { name: "Stainless Food Bowl", sales: 28, rating: 4.6 },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">{product.sales} terjual</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
