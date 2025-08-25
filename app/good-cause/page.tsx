import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, Users, PawPrintIcon as Paw, Gift, Target, Calendar, MapPin, ExternalLink } from "lucide-react"

export default function GoodCausePage() {
  const initiatives = [
    {
      title: "Shelter Support Program",
      description: "Monthly donations of food, toys, and care products to local animal shelters",
      impact: "500+ shelter animals helped monthly",
      icon: Heart,
      color: "bg-red-500",
    },
    {
      title: "Rescue Partnership",
      description: "Collaborating with rescue organizations to provide essential supplies",
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
      description: "Sponsoring adoption events and providing starter kits for new pet parents",
      impact: "200+ successful adoptions facilitated",
      icon: Gift,
      color: "bg-purple-500",
    },
  ]

  const campaigns = [
    {
      title: "Winter Warmth Campaign",
      description: "Providing warm bedding and clothing for shelter animals during cold months",
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
  ]

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
  ]

  const formatCurrency = (amount: number, currency: string) => {
    if (currency === "IDR") {
      return `Rp ${amount.toLocaleString()}`
    }
    return `$${amount.toLocaleString()}`
  }

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground">Making a Difference</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Our <span className="text-primary">Good Cause</span> Initiatives
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                At Paw Ship, we believe in giving back to the community that has given us so much. Every purchase helps
                support animals in need and promotes responsible pet ownership.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1500+</div>
                <div className="text-primary-foreground/80">Animals Helped</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-primary-foreground/80">Partner Organizations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Rp 500M</div>
                <div className="text-primary-foreground/80">Donated to Date</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25</div>
                <div className="text-primary-foreground/80">Cities Reached</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Initiatives */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Initiatives</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs designed to make a lasting impact on animal welfare
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${initiative.color} text-white`}
                    >
                      <initiative.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{initiative.title}</h3>
                    <p className="text-muted-foreground text-sm">{initiative.description}</p>
                    <div className="pt-2">
                      <Badge variant="outline" className="text-primary border-primary">
                        {initiative.impact}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Active Campaigns */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Active Campaigns</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join us in supporting these ongoing fundraising campaigns
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {campaigns.map((campaign, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={campaign.image || "/placeholder.svg"}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{campaign.title}</h3>
                      <p className="text-muted-foreground text-sm">{campaign.description}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{Math.round((campaign.raised / campaign.goal) * 100)}%</span>
                      </div>
                      <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-primary">
                          {formatCurrency(campaign.raised, campaign.currency)} raised
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
        </section>

        {/* Partners */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Partners</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Working together with amazing organizations to create positive change
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{partner.name}</h3>
                        <Badge variant="secondary" className="mb-2">
                          {partner.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {partner.location}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={partner.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-muted-foreground">{partner.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Help */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">How You Can Help</h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Every action, no matter how small, makes a difference in an animal's life
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
                    Every purchase contributes to our good cause fund. 5% of all profits go directly to animal welfare
                    programs.
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
                    Make a direct contribution to our active campaigns or general animal welfare fund.
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
                    Share our mission with friends and family. Follow us on social media to stay updated on our impact.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="secondary">
                Get Involved Today
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
