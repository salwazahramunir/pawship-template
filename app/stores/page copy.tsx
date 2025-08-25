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
      id: 1,
      name: "Paw Ship Jakarta Central",
      type: "Flagship Store",
      address: "Jl. Sudirman No. 123, Jakarta Pusat",
      city: "Jakarta",
      phone: "+62 21 1234 5678",
      hours: {
        weekdays: "9:00 AM - 9:00 PM",
        weekend: "10:00 AM - 10:00 PM",
      },
      services: [
        "Product Consultation",
        "Custom Sizing",
        "Pet Grooming",
        "Vet Consultation",
      ],
      rating: 4.8,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
    {
      id: 2,
      name: "Paw Ship Bandung",
      type: "Partner Store",
      address: "Jl. Braga No. 45, Bandung",
      city: "Bandung",
      phone: "+62 22 8765 4321",
      hours: {
        weekdays: "10:00 AM - 8:00 PM",
        weekend: "10:00 AM - 9:00 PM",
      },
      services: ["Product Consultation", "Custom Sizing"],
      rating: 4.6,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      id: 3,
      name: "Paw Ship Surabaya",
      type: "Partner Store",
      address: "Jl. Pemuda No. 78, Surabaya",
      city: "Surabaya",
      phone: "+62 31 9876 5432",
      hours: {
        weekdays: "9:00 AM - 8:00 PM",
        weekend: "9:00 AM - 9:00 PM",
      },
      services: ["Product Consultation", "Pet Grooming"],
      rating: 4.7,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      id: 4,
      name: "Paw Ship Bali",
      type: "Partner Store",
      address: "Jl. Monkey Forest Rd, Ubud, Bali",
      city: "Bali",
      phone: "+62 361 1234 567",
      hours: {
        weekdays: "10:00 AM - 7:00 PM",
        weekend: "10:00 AM - 8:00 PM",
      },
      services: ["Product Consultation", "Custom Sizing", "Pet Photography"],
      rating: 4.9,
      reviews: 78,
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
    {
      id: 5,
      name: "Paw Ship Medan",
      type: "Authorized Retailer",
      address: "Jl. Gatot Subroto No. 234, Medan",
      city: "Medan",
      phone: "+62 61 5678 9012",
      hours: {
        weekdays: "9:00 AM - 8:00 PM",
        weekend: "10:00 AM - 8:00 PM",
      },
      services: ["Product Consultation"],
      rating: 4.5,
      reviews: 67,
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      id: 6,
      name: "Paw Ship Yogyakarta",
      type: "Partner Store",
      address: "Jl. Malioboro No. 156, Yogyakarta",
      city: "Yogyakarta",
      phone: "+62 274 3456 789",
      hours: {
        weekdays: "10:00 AM - 8:00 PM",
        weekend: "10:00 AM - 9:00 PM",
      },
      services: ["Product Consultation", "Custom Sizing", "Pet Training"],
      rating: 4.7,
      reviews: 92,
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
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
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
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
        </section>

        {/* Store Locator */}
        <section className="py-20 bg-background">
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
            <div className="max-w-4xl mx-auto mb-12">
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
            </div>

            {/* Store Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {stores.map((store) => (
                <Card
                  key={store.id}
                  className={`hover:shadow-lg transition-shadow ${
                    store.featured ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-video md:aspect-square overflow-hidden">
                      <img
                        src={store.image || "/placeholder.svg"}
                        alt={store.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Badge
                            className={
                              store.type === "Flagship Store"
                                ? "bg-primary"
                                : store.type === "Partner Store"
                                ? "bg-secondary"
                                : "bg-muted-foreground"
                            }
                          >
                            {store.type}
                          </Badge>
                          {store.featured && (
                            <Badge variant="outline">Featured</Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {store.name}
                        </h3>
                        <div className="flex items-center space-x-1 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(store.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {store.rating} ({store.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {store.address}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            {store.phone}
                          </span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <div className="text-muted-foreground">
                            <div>Mon-Fri: {store.hours.weekdays}</div>
                            <div>Sat-Sun: {store.hours.weekend}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">
                          Services:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {store.services.map((service, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Navigation className="h-4 w-4 mr-2" />
                          Get Directions
                        </Button>
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Store Types */}
        <section className="py-20 bg-muted/30">
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
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${storeType.color} text-white mb-4`}
                    >
                      <MapPin className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{storeType.type}</CardTitle>
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
        </section>

        {/* Online Partners */}
        <section className="py-20 bg-background">
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
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="h-16 flex items-center justify-center">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className="max-h-12 max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {partner.description}
                      </p>
                      <Button size="sm" variant="outline" asChild>
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
        <section className="py-20 bg-primary text-primary-foreground">
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
        </section>
      </main>
    </div>
  );
}
