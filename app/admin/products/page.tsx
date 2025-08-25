"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Upload, Edit, Trash2, Eye, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AdminProductsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("admin_token")
    if (!token) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const mockProducts = [
    {
      id: 1,
      sku: "PWS001",
      name: "Premium Dog Collar",
      category: "Accessories",
      price: { idr: 150000, usd: 10, sgd: 14 },
      stock: 25,
      status: "active",
    },
    {
      id: 2,
      sku: "PWS002",
      name: "Interactive Cat Toy",
      category: "Toys",
      price: { idr: 85000, usd: 6, sgd: 8 },
      stock: 0,
      status: "out_of_stock",
    },
    {
      id: 3,
      sku: "PWS003",
      name: "Pet Food Bowl Set",
      category: "Feeding",
      price: { idr: 120000, usd: 8, sgd: 11 },
      stock: 15,
      status: "active",
    },
  ]

  const handleBulkUpload = (formData: FormData) => {
    const file = formData.get("file") as File
    if (file) {
      // In real implementation, process the CSV/Excel file
      alert(`File ${file.name} berhasil diupload untuk diproses`)
    }
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Kelola Produk</h1>
                <p className="text-gray-600">Manajemen produk dan stok</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Bulk Upload
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Upload Produk Massal</DialogTitle>
                    <DialogDescription>
                      Upload file CSV atau Excel untuk menambah produk dalam jumlah besar
                    </DialogDescription>
                  </DialogHeader>
                  <form action={handleBulkUpload} className="space-y-4">
                    <div>
                      <Label htmlFor="file">File CSV/Excel</Label>
                      <Input id="file" name="file" type="file" accept=".csv,.xlsx,.xls" className="mt-1" />
                    </div>
                    <Button type="submit" className="w-full">
                      Upload
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Produk
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Tambah Produk Baru</DialogTitle>
                    <DialogDescription>Isi informasi produk dengan lengkap</DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sku">SKU *</Label>
                        <Input id="sku" placeholder="PWS004" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="category">Kategori *</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Pilih kategori" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="accessories">Accessories</SelectItem>
                            <SelectItem value="toys">Toys</SelectItem>
                            <SelectItem value="feeding">Feeding</SelectItem>
                            <SelectItem value="grooming">Grooming</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="name">Nama Produk *</Label>
                      <Input id="name" placeholder="Nama produk" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="description">Deskripsi</Label>
                      <Textarea id="description" placeholder="Deskripsi produk" className="mt-1" rows={3} />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="price_idr">Harga IDR *</Label>
                        <Input id="price_idr" type="number" placeholder="150000" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="price_usd">Harga USD *</Label>
                        <Input id="price_usd" type="number" placeholder="10" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="price_sgd">Harga SGD *</Label>
                        <Input id="price_sgd" type="number" placeholder="14" className="mt-1" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="stock">Stok Awal</Label>
                        <Input id="stock" type="number" placeholder="0" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="status">Status</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Pilih status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                            <SelectItem value="draft">Draft</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                      Simpan Produk
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList>
            <TabsTrigger value="products">Daftar Produk</TabsTrigger>
            <TabsTrigger value="stock">Kelola Stok</TabsTrigger>
            <TabsTrigger value="categories">Kategori</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Cari produk..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Semua Kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Kategori</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="toys">Toys</SelectItem>
                      <SelectItem value="feeding">Feeding</SelectItem>
                      <SelectItem value="grooming">Grooming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Products Table */}
            <Card>
              <CardHeader>
                <CardTitle>Daftar Produk ({mockProducts.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>SKU</TableHead>
                      <TableHead>Nama Produk</TableHead>
                      <TableHead>Kategori</TableHead>
                      <TableHead>Harga (IDR)</TableHead>
                      <TableHead>Stok</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-mono">{product.sku}</TableCell>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>Rp {product.price.idr.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge variant={product.stock > 0 ? "default" : "destructive"}>{product.stock}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              product.status === "active"
                                ? "default"
                                : product.status === "out_of_stock"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {product.status === "active"
                              ? "Aktif"
                              : product.status === "out_of_stock"
                                ? "Habis"
                                : "Tidak Aktif"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stock" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kelola Stok Produk</CardTitle>
                <CardDescription>Update stok produk secara massal atau individual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Bulk Update Stok</h3>
                    <Button variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload CSV Stok
                    </Button>
                  </div>
                  <div className="grid gap-4">
                    {mockProducts.map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-600">SKU: {product.sku}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm text-gray-600">Stok Saat Ini</p>
                            <p className="font-semibold">{product.stock}</p>
                          </div>
                          <Input type="number" placeholder="Stok baru" className="w-24" />
                          <Button size="sm">Update</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kelola Kategori</CardTitle>
                <CardDescription>Tambah, edit, atau hapus kategori produk</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Kategori
                  </Button>
                  <div className="grid gap-4">
                    {["Accessories", "Toys", "Feeding", "Grooming"].map((category) => (
                      <div key={category} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{category}</p>
                          <p className="text-sm text-gray-600">
                            {mockProducts.filter((p) => p.category === category).length} produk
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
