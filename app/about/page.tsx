import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, Shield, Star } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Pet-First Philosophy",
      description:
        "Every decision we make is guided by what's best for pets and their wellbeing.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "We rigorously test all products to ensure they meet our high safety and quality standards.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description:
        "Building a supportive community of pet lovers, owners, and care professionals.",
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description:
        "Committed to providing exceptional customer service and support at every touchpoint.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Veterinarian turned entrepreneur with 15 years of experience in pet care and product development.",
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former product designer at leading pet brands, passionate about creating innovative pet solutions.",
    },
    {
      name: "Lisa Rodriguez",
      role: "Customer Success Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dedicated to ensuring every customer and their pet has the best possible experience with our products.",
    },
    {
      name: "David Kim",
      role: "Supply Chain Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in sustainable sourcing and ethical manufacturing practices in the pet industry.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      event: "Paw Ship founded with a mission to improve pet lives",
    },
    { year: "2021", event: "Launched first product line of premium harnesses" },
    {
      year: "2022",
      event: "Expanded to 500+ products and 10,000+ happy customers",
    },
    {
      year: "2023",
      event: "Introduced reseller program and international shipping",
    },
    { year: "2024", event: "Reached 50+ retail partners and 1,000+ resellers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground">
                Our Story
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Dedicated to Your Pet's{" "}
                <span className="text-primary">Happiness</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                At Paw Ship, we believe every pet deserves the best. Founded by
                pet lovers for pet lovers, we curate premium products that
                enhance the bond between you and your beloved companions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To provide pet owners with carefully curated, high-quality
                    products that enhance the health, happiness, and wellbeing
                    of their beloved pets while building a supportive community
                    of pet lovers worldwide.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Our Vision
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the most trusted global platform for premium pet
                    products, where every purchase contributes to better lives
                    for pets and supports responsible pet ownership practices.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://i.pinimg.com/1200x/0f/41/82/0f4182d09adb53e3ef70131ffde3b35e.jpg"
                  alt="Happy pets with their owners"
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm">Happy Pets</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and every decision we
                make
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center border-0 bg-background shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        {/* <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate pet lovers working together to make a difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {member.bio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our mission to improve pet lives
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                    <Card className="flex-1">
                      <CardContent className="p-6">
                        <p className="text-lg text-foreground">
                          {milestone.event}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-primary-foreground/80">Happy Pets</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-primary-foreground/80">
                  Premium Products
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-primary-foreground/80">
                  Retail Partners
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.8</div>
                <div className="text-primary-foreground/80 flex items-center justify-center">
                  <Star className="h-5 w-5 mr-1 fill-current" />
                  Average Rating
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
