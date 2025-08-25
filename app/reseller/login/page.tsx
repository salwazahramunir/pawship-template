"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, LogIn } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ResellerLoginPage() {
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
      if (email === "reseller@pawship.id" && password === "password123") {
        // Set session/token in real implementation
        localStorage.setItem("reseller_token", "demo_token")
        router.push("/reseller/dashboard")
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Login Reseller</h1>
          <p className="text-gray-600">Masuk ke dashboard reseller Paw Ship</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Selamat Datang Kembali</CardTitle>
            <CardDescription className="text-center">
              Masukkan kredensial Anda untuk mengakses dashboard reseller
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1"
                  placeholder="reseller@pawship.id"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="password123"
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
                {isLoading ? (
                  "Memproses..."
                ) : (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-2">
              <Link href="/reseller" className="text-sm text-orange-600 hover:text-orange-700">
                Belum punya akun? Daftar sebagai reseller
              </Link>
              <div className="text-xs text-gray-500">Demo: reseller@pawship.id / password123</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
