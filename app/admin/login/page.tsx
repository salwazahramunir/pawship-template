"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Shield } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (formData: FormData) => {
    setIsLoading(true)
    setError("")

    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // Simulate login process
    setTimeout(() => {
      if (email === "admin@pawship.id" && password === "admin123") {
        localStorage.setItem("admin_token", "admin_demo_token")
        router.push("/admin/dashboard")
      } else {
        setError("Email atau password tidak valid")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-orange-500 rounded-full">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
          <p className="text-gray-600">Masuk ke dashboard admin Paw Ship</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Login Administrator</CardTitle>
            <CardDescription className="text-center">Akses terbatas untuk administrator sistem</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Admin</Label>
                <Input id="email" name="email" type="email" required className="mt-1" placeholder="admin@pawship.id" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="admin123"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isLoading}>
                {isLoading ? "Memproses..." : "Login Admin"}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <div className="text-xs text-gray-500">Demo: admin@pawship.id / admin123</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
