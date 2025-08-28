import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Users, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

export default function ResellerPage() {
  const handleWhatsAppSubmit = (formData: FormData) => {
    const name = formData.get("name");
    const business = formData.get("business");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");

    const whatsappMessage = `Halo! Saya tertarik menjadi reseller Paw Ship.

Nama: ${name}
Nama Bisnis: ${business}
No. Telepon: ${phone}
Email: ${email}
Pesan: ${message}`;

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-primary text-primary-foreground">
            Reseller Program
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bergabung dengan <span className="text-orange-500">Paw Ship</span>{" "}
            Reseller
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Dapatkan keuntungan maksimal dengan menjadi mitra reseller kami.
            Akses produk berkualitas dengan harga khusus dan dukungan penuh dari
            tim kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reseller">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Login Reseller
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Keuntungan Menjadi Reseller
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-orange-500 mb-2" />
                <CardTitle>Margin Keuntungan Tinggi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dapatkan margin keuntungan hingga 40% untuk setiap produk yang
                  terjual dengan sistem tier yang menguntungkan.
                </p>
              </CardContent>
            </Card>
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-8 h-8 text-orange-500 mb-2" />
                <CardTitle>Dukungan Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Akses materi marketing, foto produk berkualitas tinggi, dan
                  template promosi untuk mendukung penjualan Anda.
                </p>
              </CardContent>
            </Card>
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-8 h-8 text-orange-500 mb-2" />
                <CardTitle>Jaminan Kualitas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Semua produk telah melalui quality control ketat dengan
                  garansi penggantian untuk produk yang tidak sesuai standar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Syarat & Ketentuan Reseller
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    1. Persyaratan Umum
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Memiliki usaha atau toko (online/offline) yang aktif
                    </li>
                    <li>
                      Berkomitmen untuk menjual produk Paw Ship secara konsisten
                    </li>
                    <li>
                      Memiliki kemampuan untuk melakukan pemesanan minimum
                      sesuai tier
                    </li>
                    <li>
                      Menyetujui semua ketentuan dan kebijakan yang berlaku
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    2. Sistem Tier & Harga
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Bronze: Pembelian Rp 1.000.000 - Margin 25%</li>
                    <li>Silver: Pembelian Rp 5.000.000 - Margin 30%</li>
                    <li>Gold: Pembelian Rp 10.000.000 - Margin 35%</li>
                    <li>Platinum: Pembelian Rp 25.000.000 - Margin 40%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    3. Pembayaran & Pengiriman
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Pembayaran dilakukan sebelum pengiriman (prepaid)</li>
                    <li>
                      Pengiriman menggunakan ekspedisi terpercaya dengan
                      asuransi
                    </li>
                    <li>Waktu pengiriman 3-7 hari kerja tergantung lokasi</li>
                    <li>Biaya pengiriman ditanggung oleh reseller</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            FAQ Reseller
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-orange-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                Bagaimana cara menjadi reseller Paw Ship?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Anda dapat mendaftar dengan mengisi form di bawah atau
                menghubungi kami melalui WhatsApp. Tim kami akan menghubungi
                Anda untuk proses verifikasi dan aktivasi akun reseller.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border border-orange-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                Berapa minimum order untuk reseller?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Minimum order bervariasi berdasarkan tier: Bronze (Rp
                1.000.000), Silver (Rp 5.000.000), Gold (Rp 10.000.000), dan
                Platinum (Rp 25.000.000).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border border-orange-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                Apakah ada dukungan marketing untuk reseller?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Ya, kami menyediakan foto produk berkualitas tinggi, video
                promosi, template social media, dan materi marketing lainnya
                untuk mendukung penjualan Anda.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border border-orange-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                Bagaimana sistem pembayaran untuk reseller?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Pembayaran dilakukan secara prepaid (bayar di muka) melalui
                transfer bank, e-wallet, atau metode pembayaran lain yang
                tersedia. Invoice akan dikirim setelah konfirmasi pesanan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border border-orange-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                Apakah ada garansi untuk produk yang dijual?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Ya, semua produk memiliki garansi kualitas. Jika ada produk yang
                tidak sesuai standar atau rusak, kami akan melakukan penggantian
                sesuai dengan kebijakan yang berlaku.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">
                Daftar Menjadi Reseller
              </CardTitle>
              <CardDescription>
                Isi form di bawah ini dan tim kami akan menghubungi Anda melalui
                WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input id="name" name="name" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="business">Nama Bisnis *</Label>
                    <Input
                      id="business"
                      name="business"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">No. WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Pesan Tambahan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ceritakan tentang bisnis Anda dan mengapa tertarik menjadi reseller..."
                    className="mt-1"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Kirim via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
