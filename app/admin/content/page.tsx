"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Plus, Search, Edit, Trash2, Eye, ArrowLeft, Tag } from "lucide-react"
import Link from "next/link"

export default function AdminContentPage() {
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

  const mockBlogs = [
    {
      id: 1,
      title: "Tips Merawat Anjing di Musim Hujan",
      author: "Admin",
      status: "published",
      publishDate: "2024-01-15",
      views: 1250,
    },
    {
      id: 2,
      title: "Panduan Memilih Makanan Kucing",
      author: "Admin",
      status: "draft",
      publishDate: "-",
      views: 0,
    },
  ]

  const mockEvents = [
    {
      id: 1,
      title: "Flash Sale Pet Accessories",
      type: "promo",
      startDate: "2024-01-20",
      endDate: "2024-01-25",
      status: "active",
    },
    {
      id: 2,
      title: "Pet Adoption Day",
      type: "event",
      startDate: "2024-02-01",
      endDate: "2024-02-01",
      status: "scheduled",
    },
  ]

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
                <h1 className="text-2xl font-bold text-gray-900">Kelola Konten</h1>
                <p className="text-gray-600">Manajemen blog, kategori, dan event</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="blog" className="space-y-6">
          <TabsList>
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="events">Events & Promo</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="blog" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Blog Posts</h2>
                <p className="text-gray-600">Kelola artikel dan konten blog</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Tulis Artikel
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Tulis Artikel Baru</DialogTitle>
                    <DialogDescription>Buat artikel blog untuk website</DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="blog_title">Judul Artikel *</Label>
                      <Input id="blog_title" placeholder="Judul artikel" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="blog_excerpt">Excerpt</Label>
                      <Textarea id="blog_excerpt" placeholder="Ringkasan artikel" className="mt-1" rows={2} />
                    </div>
                    <div>
                      <Label htmlFor="blog_content">Konten *</Label>
                      <Textarea id="blog_content" placeholder="Isi artikel" className="mt-1" rows={8} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="blog_category">Kategori</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Pilih kategori" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tips">Tips & Tricks</SelectItem>
                            <SelectItem value="health">Pet Health</SelectItem>
                            <SelectItem value="nutrition">Nutrition</SelectItem>
                            <SelectItem value="training">Training</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="blog_status">Status</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Pilih status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="blog_tags">Tags</Label>
                      <Input id="blog_tags" placeholder="tag1, tag2, tag3" className="mt-1" />
                    </div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                      Simpan Artikel
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input placeholder="Cari artikel..." className="pl-10" />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Semua Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Status</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Judul</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockBlogs.map((blog) => (
                      <TableRow key={blog.id}>
                        <TableCell className="font-medium">{blog.title}</TableCell>
                        <TableCell>{blog.author}</TableCell>
                        <TableCell>
                          <Badge variant={blog.status === "published" ? "default" : "secondary"}>
                            {blog.status === "published" ? "Published" : "Draft"}
                          </Badge>
                        </TableCell>
                        <TableCell>{blog.publishDate}</TableCell>
                        <TableCell>{blog.views.toLocaleString()}</TableCell>
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

          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Events & Promosi</h2>
                <p className="text-gray-600">Kelola event dan promosi khusus</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Buat Event
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Buat Event/Promo Baru</DialogTitle>
                    <DialogDescription>Tambahkan event atau promosi khusus</DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="event_title">Judul Event *</Label>
                      <Input id="event_title" placeholder="Nama event atau promo" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="event_description">Deskripsi</Label>
                      <Textarea id="event_description" placeholder="Deskripsi event" className="mt-1" rows={3} />
                    </div>
                    <div>
                      <Label htmlFor="event_type">Tipe *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Pilih tipe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="promo">Promosi</SelectItem>
                          <SelectItem value="event">Event</SelectItem>
                          <SelectItem value="sale">Sale</SelectItem>
                          <SelectItem value="launch">Product Launch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="start_date">Tanggal Mulai *</Label>
                        <Input id="start_date" type="date" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="end_date">Tanggal Selesai *</Label>
                        <Input id="end_date" type="date" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="discount">Diskon (%)</Label>
                      <Input id="discount" type="number" placeholder="0" className="mt-1" />
                    </div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                      Buat Event
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Judul</TableHead>
                      <TableHead>Tipe</TableHead>
                      <TableHead>Tanggal Mulai</TableHead>
                      <TableHead>Tanggal Selesai</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockEvents.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{event.type === "promo" ? "Promosi" : "Event"}</Badge>
                        </TableCell>
                        <TableCell>{event.startDate}</TableCell>
                        <TableCell>{event.endDate}</TableCell>
                        <TableCell>
                          <Badge variant={event.status === "active" ? "default" : "secondary"}>
                            {event.status === "active" ? "Aktif" : "Terjadwal"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
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

          <TabsContent value="categories" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Kategori Konten</h2>
                <p className="text-gray-600">Kelola kategori untuk blog dan konten</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Kategori
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Tambah Kategori Baru</DialogTitle>
                    <DialogDescription>Buat kategori untuk mengorganisir konten</DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="category_name">Nama Kategori *</Label>
                      <Input id="category_name" placeholder="Nama kategori" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="category_description">Deskripsi</Label>
                      <Textarea id="category_description" placeholder="Deskripsi kategori" className="mt-1" rows={3} />
                    </div>
                    <div>
                      <Label htmlFor="category_color">Warna</Label>
                      <Input id="category_color" type="color" defaultValue="#f97316" className="mt-1" />
                    </div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                      Simpan Kategori
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Tips & Tricks", "Pet Health", "Nutrition", "Training", "Grooming", "Accessories"].map((category) => (
                <Card key={category}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tag className="w-5 h-5 text-orange-500" />
                        <CardTitle className="text-lg">{category}</CardTitle>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{Math.floor(Math.random() * 10) + 1} artikel</p>
                    <Badge variant="outline" className="text-xs">
                      Aktif
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
