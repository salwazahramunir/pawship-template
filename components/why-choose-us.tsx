import { Card, CardContent } from "@/components/ui/card"
import { Shield, Truck, Heart, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All products are carefully selected and tested for safety and durability",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable shipping to get products to your pets faster",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every product is chosen with your pet's happiness and comfort in mind",
  },
  {
    icon: Award,
    title: "Expert Approved",
    description: "Recommended by veterinarians and pet care professionals",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Why Choose Paw Ship?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best for your beloved pets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center border-0 bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300"
            >
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
