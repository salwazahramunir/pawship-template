import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Users,
  Award,
  Shield,
  Star,
  Sparkles,
  Rocket,
  Target,
  Trophy,
} from "lucide-react";

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

  const milestones = [
    {
      year: "2020",
      event:
        "Founded Paw Ship with a mission to provide premium pet products and exceptional service.",
      icon: Rocket,
    },
    {
      year: "2021",
      event:
        "Launched our first product line and established partnerships with trusted pet product manufacturers.",
      icon: Target,
    },
    {
      year: "2022",
      event:
        "Expanded to serve over 500 happy pet families and introduced our quality assurance program.",
      icon: Trophy,
    },
    {
      year: "2023",
      event:
        "Reached 1000+ satisfied customers and launched our community support initiatives.",
      icon: Heart,
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
        </section> */}

        <section
          className="relative h-[50vh] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/7e/56/bf/7e56bf491b5f5940a15a208f0f23a432.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Overlay hitam */}
          <div className="relative z-10 flex items-center justify-center h-full text-white">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground">
                Our Story
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Dedicated to Your Pet's{" "}
                <span className="text-primary">Happiness</span>
              </h1>
              {/* <p className="text-xl  max-w-3xl mx-auto">
                At Paw Ship, we believe every pet deserves the best. Founded by
                pet lovers for pet lovers, we curate premium products that
                enhance the bond between you and your beloved companions.
              </p> */}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(to right, #F69784, #FBBD87)`,
                      }}
                    >
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed pl-15">
                    To provide pet owners with carefully curated, high-quality
                    products that enhance the health, happiness, and wellbeing
                    of their beloved pets while building a supportive community
                    of pet lovers worldwide.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(to right, #FBBD87, #F69784)`,
                      }}
                    >
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed pl-15">
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
                <div
                  className="absolute -bottom-6 -left-6  text-primary-foreground rounded-2xl p-6 shadow-lg"
                  style={{
                    background: `linear-gradient(to right, #FBBD87, #F69784)`,
                  }}
                >
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm">Happy Pets</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Core Values 🐾
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
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r from-[#FBBD87] to-[#F69784] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Journey 🐾
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our mission to improve pet lives
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-8 group"
                  >
                    <div className="flex-shrink-0 relative">
                      <div
                        className="w-24 h-24 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow"
                        style={{
                          background: `linear-gradient(to right, #FBBD87, #F69784)`,
                        }}
                      >
                        {milestone.year}
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: `linear-gradient(to right, #F69784, #FBBD87)`,
                        }}
                      >
                        <milestone.icon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <Card className="flex-1 group-hover:shadow-lg transition-shadow">
                      <CardContent className="p-8">
                        <p className="text-xl text-gray-800 font-medium">
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
        <section
          className="py-20 text-primary-foreground"
          style={{ background: `linear-gradient(to right, #FBBD87, #F69784)` }}
        >
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
