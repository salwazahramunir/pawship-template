"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, MessageCircle, FileText, Package, TrendingUp, Users, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ResellerDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("reseller_token")
    if (!token) {
      router.push("/reseller/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("reseller_token")
    router.push("/reseller/login")
  }

  const handleDownloadCatalog = () => {
    // In real implementation, this would download the actual PDF
    const link = document.createElement("a")
    link.href = "/placeholder.pdf"
    link.download = "Paw-Ship-Catalog-2024.pdf"
    link.click()
  }

  const handleDownloadOrderTemplate = () => {
    // In real implementation, this would download the actual template
    const link = document.createElement("a")
    link.href = "/placeholder.xlsx"
    link.download = "Order-Template-Paw-Ship.xlsx"
    link.click()
  }

  const handleSubmitPO = (formData: FormData) => {
    const products = formData.get("products")
    const quantities = formData.get("quantities")
    const notes = formData.get("notes")
    const priority = formData.get("priority")

    const whatsappMessage = `*PURCHASE ORDER - PAW SHIP*

Dari: Reseller Dashboard
Prioritas: ${priority}

*Detail Pesanan:*
${products}

*Jumlah:*
${quantities}

*Catatan Tambahan:*
${notes}

Mohon konfirmasi ketersediaan dan total harga. Terima kasih!`

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
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
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Reseller</h1>
              <p className="text-gray-600">Selamat datang di portal reseller Paw Ship</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-orange-100 text-orange-800">Gold Tier</Badge>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Pembelian</p>
                  <p className="text-2xl font-bold text-gray-900">Rp 15.2M</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pesanan Bulan Ini</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <Package className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Margin Keuntungan</p>
                  <p className="text-2xl font-bold text-gray-900">35%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Status Tier</p>
                  <p className="text-2xl font-bold text-orange-600">Gold</p>
                </div>
                <Users className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="downloads" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="downloads">Download Center</TabsTrigger>
            <TabsTrigger value="order">Submit PO</TabsTrigger>
            <TabsTrigger value="history">Riwayat Pesanan</TabsTrigger>
          </TabsList>

          <TabsContent value="downloads" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-orange-500" />
                    Katalog Produk PDF
                  </CardTitle>
                  <CardDescription>Download katalog lengkap dengan harga reseller terbaru</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                      <p>• Katalog lengkap semua produk</p>
                      <p>• Harga khusus reseller Gold</p>
                      <p>• Spesifikasi detail produk</p>
                      <p>• Update terakhir: 15 Januari 2024</p>
                    </div>
                    <Button onClick={handleDownloadCatalog} className="w-full bg-orange-500 hover:bg-orange-600">
                      <Download className="w-4 h-4 mr-2" />
                      Download Katalog PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-orange-500" />
                    Template Order
                  </CardTitle>
                  <CardDescription>Download template Excel untuk memudahkan pemesanan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                      <p>• Format Excel yang mudah digunakan</p>
                      <p>• Kalkulasi otomatis total harga</p>
                      <p>• Validasi SKU produk</p>
                      <p>• Panduan pengisian lengkap</p>
                    </div>
                    <Button onClick={handleDownloadOrderTemplate} variant="outline" className="w-full bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Download Template Excel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Marketing Materials */}
            <Card>
              <CardHeader>
                <CardTitle>Materi Marketing</CardTitle>
                <CardDescription>
                  Download foto produk dan materi promosi untuk mendukung penjualan Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                    <Download className="w-6 h-6" />
                    <span className="text-sm">Foto Produk HD</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                    <Download className="w-6 h-6" />
                    <span className="text-sm">Video Promosi</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                    <Download className="w-6 h-6" />
                    <span className="text-sm">Template Social Media</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="order" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Submit Purchase Order</CardTitle>
                <CardDescription>Kirim pesanan Anda melalui WhatsApp untuk proses yang lebih cepat</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={handleSubmitPO} className="space-y-6">
                  <div>
                    <Label htmlFor="products">Detail Produk *</Label>
                    <Textarea
                      id="products"
                      name="products"
                      placeholder="Contoh:
- SKU001 - Dog Collar Premium Size M (Qty: 10)
- SKU002 - Cat Toy Interactive Ball (Qty: 5)
- SKU003 - Pet Food Bowl Stainless (Qty: 8)"
                      className="mt-1"
                      rows={6}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quantities">Total Estimasi Quantity</Label>
                      <Input id="quantities" name="quantities" placeholder="23 items" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="priority">Prioritas Pesanan</Label>
                      <Select name="priority">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Pilih prioritas" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normal">Normal (7-10 hari)</SelectItem>
                          <SelectItem value="urgent">Urgent (3-5 hari)</SelectItem>
                          <SelectItem value="express">Express (1-2 hari)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Catatan Tambahan</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Tambahkan catatan khusus, permintaan packaging, atau informasi lainnya..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Kirim PO via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Riwayat Pesanan</CardTitle>
                <CardDescription>Lihat semua pesanan yang pernah Anda buat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "PO-2024-001", date: "15 Jan 2024", status: "Delivered", total: "Rp 2.500.000" },
                    { id: "PO-2024-002", date: "10 Jan 2024", status: "Processing", total: "Rp 1.800.000" },
                    { id: "PO-2024-003", date: "5 Jan 2024", status: "Shipped", total: "Rp 3.200.000" },
                  ].map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            order.status === "Delivered"
                              ? "default"
                              : order.status === "Processing"
                                ? "secondary"
                                : "outline"
                          }
                          className={order.status === "Delivered" ? "bg-green-100 text-green-800" : ""}
                        >
                          {order.status}
                        </Badge>
                        <p className="text-sm font-semibold text-gray-900 mt-1">{order.total}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
