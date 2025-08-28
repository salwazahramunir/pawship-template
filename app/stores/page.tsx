import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Search,
  Star,
  Navigation,
} from "lucide-react";

export default function StoresPage() {
  const stores = [
    {
      name: "Pawship Surabaya Tunjungan",
      address: "Jl. Tunjungan No. 101, Surabaya 60275",
      city: "Surabaya",
      country: "Indonesia",
      phone: "+62 31 5678 1234",
      hours: "Mon-Sun: 10AM-9PM",
      features: [
        "Pet grooming services",
        "Veterinary consultation",
        "Exclusive pet accessories",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-pet-store-interior-zoUMGQJ1177KhLZLY0HtXszXeXC883.png",
    },
    {
      name: "Pawship Jakarta Central",
      address: "Jl. Sudirman No. 123, Jakarta Pusat 10220",
      city: "Jakarta",
      country: "Indonesia",
      phone: "+62 21 1234 5678",
      hours: "Mon-Fri: 9AM-8PM, Sat-Sun: 9AM-6PM",
      features: [
        "Pet grooming",
        "Veterinary consultation",
        "Product testing area",
      ],
      image:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Pawship Singapore Orchard",
      address: "123 Orchard Road, Singapore 238858",
      city: "Singapore",
      country: "Singapore",
      phone: "+65 6123 4567",
      hours: "Mon-Sun: 10AM-9PM",
      features: [
        "Pet adoption events",
        "Training workshops",
        "Premium brands showcase",
      ],
      image:
        "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Pawship Sydney CBD",
      address: "456 George Street, Sydney NSW 2000",
      city: "Sydney",
      country: "Australia",
      phone: "+61 2 1234 5678",
      hours: "Mon-Fri: 9AM-7PM, Sat-Sun: 10AM-5PM",
      features: [
        "Local Australian brands",
        "Pet photography studio",
        "Birthday party packages",
      ],
      image:
        "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Pawship Hong Kong TST",
      address: "789 Nathan Road, Tsim Sha Tsui, Kowloon",
      city: "Hong Kong",
      country: "Hong Kong",
      phone: "+852 1234 5678",
      hours: "Mon-Sun: 10AM-8PM",
      features: [
        "Multilingual staff",
        "Import specialist products",
        "Pet insurance consultation",
      ],
      image:
        "https://images.pexels.com/photos/1938126/pexels-photo-1938126.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Pawship Kuala Lumpur Pavilion",
      address:
        "Lot 3.10, Pavilion Kuala Lumpur, 168 Jalan Bukit Bintang, 55100 Kuala Lumpur",
      city: "Kuala Lumpur",
      country: "Malaysia",
      phone: "+60 3-2145 6789",
      hours: "Mon-Sun: 10AM-10PM",
      features: [
        "Pet spa and grooming",
        "Premium pet food selection",
        "Pet adoption corner",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/pet-store-in-shopping-mall-BEdwr8ANxEeOdMg4u7JaNkZbCGjN6k.png",
    },
  ];

  const storeTypes = [
    {
      type: "Flagship Store",
      description:
        "Our premium locations with full product range and exclusive services",
      features: [
        "Complete Product Range",
        "Expert Consultation",
        "Premium Services",
        "Events & Workshops",
      ],
      color: "bg-primary",
    },
    {
      type: "Partner Store",
      description: "Trusted retail partners offering curated Paw Ship products",
      features: [
        "Curated Selection",
        "Product Consultation",
        "Local Expertise",
        "Community Focus",
      ],
      color: "bg-secondary",
    },
    {
      type: "Authorized Retailer",
      description: "Certified retailers carrying selected Paw Ship products",
      features: [
        "Selected Products",
        "Basic Consultation",
        "Competitive Pricing",
        "Local Convenience",
      ],
      color: "bg-muted-foreground",
    },
  ];

  const onlinePartners = [
    {
      name: "Tokopedia",
      logo: "https://lf-web-assets.tokopedia-static.net/obj/tokopedia-web-sg/arael_v3/0c292173.png",
      url: "https://tokopedia.com/pawship",
      description: "Official Paw Ship store on Indonesia's largest marketplace",
    },
    {
      name: "Shopee",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShzihMNw_bWvfCkes_vRLtk1OyZAy47YfNQ&s",
      url: "https://shopee.co.id/pawship",
      description: "Complete product range with exclusive online deals",
    },
    {
      name: "Blibli",
      logo: "/images/blibli.png",
      url: "https://blibli.com/pawship",
      description: "Premium pet products with fast delivery",
    },
    {
      name: "Lazada",
      logo: "/images/lazada.png",
      url: "https://lazada.co.id/pawship",
      description: "Wide selection with competitive pricing",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <main>
        {/* Hero Section */}
        {/* <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground">
                Find Us
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Visit Our <span className="text-primary">Stores</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience Paw Ship products in person at our stores across
                Indonesia. Get expert advice, try products, and discover the
                perfect items for your beloved pets.
              </p>
            </div>
          </div>
        </section> */}

        <section
          className="relative h-[60vh] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/f6/76/20/f67620ed1c3358fbc457956569ff6fad.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Overlay hitam */}
          <div className="relative z-10 flex items-center justify-center h-full text-white">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground">
                Find Us
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Visit Our <span className="text-primary">Stores</span>
              </h1>
              {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience Paw Ship products in person at our stores across
                Indonesia. Get expert advice, try products, and discover the
                perfect items for your beloved pets.
              </p> */}
            </div>
          </div>
        </section>

        {/* Store Locator */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Store Locator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the nearest Paw Ship store or authorized retailer
              </p>
            </div>

            {/* Search and Filter */}
            {/* <div className="max-w-4xl mx-auto mb-12">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Search by city or address..."
                    className="pl-10"
                  />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Store Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Stores</SelectItem>
                    <SelectItem value="flagship">Flagship Store</SelectItem>
                    <SelectItem value="partner">Partner Store</SelectItem>
                    <SelectItem value="retailer">
                      Authorized Retailer
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cities</SelectItem>
                    <SelectItem value="jakarta">Jakarta</SelectItem>
                    <SelectItem value="bandung">Bandung</SelectItem>
                    <SelectItem value="surabaya">Surabaya</SelectItem>
                    <SelectItem value="bali">Bali</SelectItem>
                    <SelectItem value="medan">Medan</SelectItem>
                    <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div> */}

            {/* Store Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stores.map((store, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.01] border border-transparent hover:border-orange-500/100 group"
                >
                  <div className="relative">
                    <img
                      src={store.image}
                      alt={store.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {store.name}
                        </h3>
                        <p className="text-orange-500 text-sm font-medium">
                          {store.city}, {store.country}
                        </p>
                      </div>
                      <Navigation className="h-5 w-5 text-orange-500 transition-transform duration-300 group-hover:rotate-6" />
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600">{store.address}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <p className="text-gray-600">{store.phone}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <p className="text-gray-600">{store.hours}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                        Store Features:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {store.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* <div className="flex space-x-2">
                      <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 rounded-md font-medium text-sm transition-colors">
                        Get Directions
                      </button>
                      <button className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-2 px-3 rounded-md font-medium text-sm transition-colors">
                        Call Store
                      </button>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Store Types */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Store Types
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Different store formats to serve you better
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {storeTypes.map((storeType, index) => (
                <Card
                  key={index}
                  className="text-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl border border-transparent hover:border-primary/40 rounded-3xl group"
                >
                  <CardHeader>
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${storeType.color} text-white mb-4 transition-transform duration-300 group-hover:rotate-6`}
                    >
                      <MapPin className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {storeType.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {storeType.description}
                    </p>
                    <div className="space-y-2">
                      {storeType.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Online Partners */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Online Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Shop Paw Ship products on your favorite online platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {onlinePartners.map((partner, index) => (
                <Card
                  key={index}
                  className="text-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl border border-transparent hover:border-primary/60 rounded-2xl group shadow-lg bg-white"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="h-16 flex items-center justify-center">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className="max-h-12 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {partner.description}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
                      >
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Store
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        {/* <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Become a Partner
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Interested in carrying Paw Ship products in your store? Join our
                growing network of retail partners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Partnership Inquiry
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
