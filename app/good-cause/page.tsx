import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Heart,
  Users,
  PawPrintIcon as Paw,
  Gift,
  Target,
  Calendar,
  MapPin,
  ExternalLink,
  Shield,
  Home,
} from "lucide-react";

export default function GoodCausePage() {
  const initiatives = [
    {
      title: "Shelter Support Program",
      description:
        "Monthly donations of food, toys, and care products to local animal shelters",
      impact: "500+ shelter animals helped monthly",
      icon: Heart,
      color: "bg-red-500",
    },
    {
      title: "Rescue Partnership",
      description:
        "Collaborating with rescue organizations to provide essential supplies",
      impact: "25+ rescue organizations supported",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Stray Animal Care",
      description: "Supporting street animal feeding programs and medical care",
      impact: "1000+ stray animals fed weekly",
      icon: Paw,
      color: "bg-green-500",
    },
    {
      title: "Adoption Drives",
      description:
        "Sponsoring adoption events and providing starter kits for new pet parents",
      impact: "200+ successful adoptions facilitated",
      icon: Gift,
      color: "bg-purple-500",
    },
  ];

  const campaigns = [
    {
      title: "Winter Warmth Campaign",
      description:
        "Providing warm bedding and clothing for shelter animals during cold months",
      goal: 100000,
      raised: 75000,
      currency: "IDR",
      endDate: "2024-03-31",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Medical Care Fund",
      description: "Emergency medical treatment for rescued animals in need",
      goal: 50000,
      raised: 32000,
      currency: "IDR",
      endDate: "2024-06-30",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Spay & Neuter Program",
      description: "Supporting population control efforts in local communities",
      goal: 75000,
      raised: 45000,
      currency: "IDR",
      endDate: "2024-12-31",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  const partners = [
    {
      name: "Jakarta Animal Shelter",
      type: "Animal Shelter",
      location: "Jakarta, Indonesia",
      description: "Providing care for abandoned and rescued animals",
      website: "https://example.com",
    },
    {
      name: "Paws & Hearts Rescue",
      type: "Rescue Organization",
      location: "Bandung, Indonesia",
      description: "Specializing in dog and cat rescue operations",
      website: "https://example.com",
    },
    {
      name: "Street Cats Indonesia",
      type: "Community Group",
      location: "Surabaya, Indonesia",
      description: "Caring for stray cats in urban areas",
      website: "https://example.com",
    },
    {
      name: "Wildlife Care Foundation",
      type: "Wildlife Conservation",
      location: "Bali, Indonesia",
      description: "Protecting and rehabilitating wildlife",
      website: "https://example.com",
    },
  ];

  const formatCurrency = (amount: number, currency: string) => {
    if (currency === "IDR") {
      return `Rp ${amount.toLocaleString()}`;
    }
    return `$${amount.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <main>
        {/* Hero Section */}
        {/* <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground">
                Making a Difference
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Our <span className="text-primary">Good Cause</span> Initiatives
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                At Paw Ship, we believe in giving back to the community that has
                given us so much. Every purchase helps support animals in need
                and promotes responsible pet ownership.
              </p>
            </div>
          </div>
        </section> */}

        <section
          className="relative h-[60vh] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/1200x/ca/2f/81/ca2f81f8d4439975c271af2f1abcd3f5.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Overlay hitam */}
          <div className="relative z-10 flex items-center justify-center h-full text-white">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground">
                Making a Difference
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Our <span className="text-primary">Good Cause</span> Initiatives
              </h1>
              {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                At Paw Ship, we believe in giving back to the community that has
                given us so much. Every purchase helps support animals in need
                and promotes responsible pet ownership.
              </p> */}
            </div>
          </div>
        </section>

        {/* Our Initiatives Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <img
                    src="/images/galery/happy-pets-and-animals-in-a-shelter-with-volunteer.png"
                    alt="Animals being cared for at our shelter"
                    className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Our Initiatives 🐾
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive programs designed to make a lasting impact on
                    animal welfare
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Shelter Support Program */}
                  <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Home className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      Shelter Support Program
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Providing safe havens and essential care for abandoned and
                      rescued animals.
                    </p>
                  </div>

                  {/* Stray Animal Care */}
                  <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Heart className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      Stray Animal Care
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Street animal feeding, medical treatment, and spay-neuter
                      programs.
                    </p>
                  </div>

                  {/* Rescue Partnership */}
                  <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Shield className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      Rescue Partnership
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Coordinating with local authorities and volunteers for
                      emergency rescues.
                    </p>
                  </div>

                  {/* Adoption Drives */}
                  <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      Adoption Drives
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Connecting loving families with animals ready for their
                      forever homes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Help */}
        <section
          className="py-20 text-primary-foreground m-10 rounded-3xl"
          style={{ background: `linear-gradient(to right, #FBBD87, #F69784)` }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                How You Can Help
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Every action, no matter how small, makes a difference in an
                animal's life
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-primary-foreground text-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-6 w-6 text-primary" />
                    <span>Shop with Purpose</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every purchase contributes to our good cause fund. 5% of all
                    profits go directly to animal welfare programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground text-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-6 w-6 text-primary" />
                    <span>Direct Donations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Make a direct contribution to our active campaigns or
                    general animal welfare fund.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground text-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-primary" />
                    <span>Spread the Word</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Share our mission with friends and family. Follow us on
                    social media to stay updated on our impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Galery */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Furry Friends 🐾
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet some of the amazing animals we've helped find their forever
                homes
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/galery/orange-tabby-cat-resting-peacefully-on-carpet.png"
                  alt="Orange tabby cat"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/images/galery/small-dog-with-harness-sitting-by-kitchen-counter.png"
                  alt="Small dog with harness"
                  className="w-full h-52 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-4">
                <img
                  src="/images/galery/happy-woman-hugging-white-poodle-on-yellow-couch.png"
                  alt="Woman with poodle"
                  className="w-full h-120 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-4">
                <img
                  src="/images/galery/small-fluffy-dog-standing-in-modern-kitchen.png"
                  alt="Small fluffy dog"
                  className="w-full h-52 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/images/galery/happy-pets-and-animals-in-a-shelter-with-volunteer.png"
                  alt="Man with parrot"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-4">
                <img
                  src="/images/galery/cats-eating-from-food-bowls-on-floor.png"
                  alt="Cats eating"
                  className="w-full h-44 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/images/galery/corgi-dog-eating-from-food-bowl-with-kibble-scatte.png"
                  alt="Corgi eating"
                  className="w-full h-72 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-4">
                <img
                  src="/images/galery/orange-tabby-cat-resting-peacefully-on-carpet.png"
                  alt="Orange tabby cat"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-4">
                <img
                  src="/images/galery/small-dog-with-harness-sitting-by-kitchen-counter.png"
                  alt="Small dog with harness"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-4">
                <img
                  src="/images/galery/cats-eating-from-food-bowls-on-floor.png"
                  alt="Small dog with harness"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-4">
                <img
                  src="/images/galery/small-fluffy-dog-standing-in-modern-kitchen.png"
                  alt="Small dog with harness"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        {/* <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1500+</div>
                <div className="text-primary-foreground/80">Animals Helped</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-primary-foreground/80">
                  Partner Organizations
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Rp 500M</div>
                <div className="text-primary-foreground/80">
                  Donated to Date
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25</div>
                <div className="text-primary-foreground/80">Cities Reached</div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Our Initiatives */}
        {/* <section className="py-20 bg-[#FFF2E2] m-10 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Initiatives
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs designed to make a lasting impact on
                animal welfare
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {initiatives.map((initiative, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r from-[#FBBD87] to-[#F69784] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                    >
                      <initiative.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {initiative.description}
                    </p>
                    <div className="pt-2">
                      <Badge
                        variant="outline"
                        className="text-primary border-primary"
                      >
                        {initiative.impact}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Active Campaigns */}
        {/* <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Active Campaigns
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join us in supporting these ongoing fundraising campaigns
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {campaigns.map((campaign, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={campaign.image || "/placeholder.svg"}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {campaign.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {campaign.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">
                          {Math.round((campaign.raised / campaign.goal) * 100)}%
                        </span>
                      </div>
                      <Progress
                        value={(campaign.raised / campaign.goal) * 100}
                        className="h-2"
                      />
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-primary">
                          {formatCurrency(campaign.raised, campaign.currency)}{" "}
                          raised
                        </span>
                        <span className="text-muted-foreground">
                          of {formatCurrency(campaign.goal, campaign.currency)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        Ends {campaign.endDate}
                      </div>
                      <Button size="sm">Donate Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Partners */}
        {/* <section className="py-20 bg-[#faedea] mx-10 mb-10 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Working together with amazing organizations to create positive
                change
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {partner.name}
                        </h3>
                        <Badge variant="secondary" className="mb-2">
                          {partner.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {partner.location}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-muted-foreground">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
