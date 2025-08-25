"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash2, Key, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AdminUsersPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("admin_token")
    if (!token) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const mockUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "reseller",
      tier: "Gold",
      currency: "IDR",
      status: "active",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@petstore.com",
      role: "reseller",
      tier: "Silver",
      currency: "USD",
      status: "active",
      joinDate: "2024-01-10",
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@pawship.id",
      role: "admin",
      tier: "-",
      currency: "-",
      status: "active",
      joinDate: "2023-12-01",
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
                <h1 className="text-2xl font-bold text-gray-900">Kelola Users</h1>
                <p className="text-gray-600">Manajemen reseller dan administrator</p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Tambah User
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Tambah User Baru</DialogTitle>
                  <DialogDescription>Buat akun baru untuk reseller atau admin</DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input id="name" placeholder="Nama lengkap" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="email@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="password">Password *</Label>
                    <Input id="password" type="password" placeholder="Password" className="mt-1" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="role">Role *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Pilih role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reseller">Reseller</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="tier">Tier (Reseller)</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Pilih tier" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bronze">Bronze</SelectItem>
                          <SelectItem value="silver">Silver</SelectItem>
                          <SelectItem value="gold">Gold</SelectItem>
                          <SelectItem value="platinum">Platinum</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="currency">Currency Mapping</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Pilih currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="IDR">IDR (Indonesia)</SelectItem>
                        <SelectItem value="USD">USD (International)</SelectItem>
                        <SelectItem value="SGD">SGD (Singapore)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    Buat User
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Cari user..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Semua Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Role</SelectItem>
                  <SelectItem value="reseller">Reseller</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Daftar Users ({mockUsers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Tier</TableHead>
                  <TableHead>Currency</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Bergabung</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.role === "admin" ? "destructive" : "default"}>
                        {user.role === "admin" ? "Admin" : "Reseller"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {user.tier !== "-" ? (
                        <Badge
                          variant="outline"
                          className={
                            user.tier === "Gold"
                              ? "border-yellow-500 text-yellow-700"
                              : user.tier === "Silver"
                                ? "border-gray-500 text-gray-700"
                                : "border-orange-500 text-orange-700"
                          }
                        >
                          {user.tier}
                        </Badge>
                      ) : (
                        "-"
                      )}
                    </TableCell>
                    <TableCell>{user.currency}</TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {user.status === "active" ? "Aktif" : "Tidak Aktif"}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit User</DialogTitle>
                              <DialogDescription>Update informasi user</DialogDescription>
                            </DialogHeader>
                            <form className="space-y-4">
                              <div>
                                <Label htmlFor="edit_name">Nama Lengkap</Label>
                                <Input id="edit_name" defaultValue={user.name} className="mt-1" />
                              </div>
                              <div>
                                <Label htmlFor="edit_email">Email</Label>
                                <Input id="edit_email" type="email" defaultValue={user.email} className="mt-1" />
                              </div>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="edit_tier">Tier</Label>
                                  <Select defaultValue={user.tier.toLowerCase()}>
                                    <SelectTrigger className="mt-1">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="bronze">Bronze</SelectItem>
                                      <SelectItem value="silver">Silver</SelectItem>
                                      <SelectItem value="gold">Gold</SelectItem>
                                      <SelectItem value="platinum">Platinum</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div>
                                  <Label htmlFor="edit_currency">Currency</Label>
                                  <Select defaultValue={user.currency}>
                                    <SelectTrigger className="mt-1">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="IDR">IDR</SelectItem>
                                      <SelectItem value="USD">USD</SelectItem>
                                      <SelectItem value="SGD">SGD</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                                Update User
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Key className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Reset Password</DialogTitle>
                              <DialogDescription>Reset password untuk {user.name}</DialogDescription>
                            </DialogHeader>
                            <form className="space-y-4">
                              <div>
                                <Label htmlFor="new_password">Password Baru</Label>
                                <Input id="new_password" type="password" className="mt-1" />
                              </div>
                              <div>
                                <Label htmlFor="confirm_password">Konfirmasi Password</Label>
                                <Input id="confirm_password" type="password" className="mt-1" />
                              </div>
                              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                                Reset Password
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
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
      </div>
    </div>
  )
}
