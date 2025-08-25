import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CreditCard, Smartphone, Building, Truck, RefreshCw, Lock, CheckCircle } from "lucide-react"

export default function PaymentsPage() {
  const paymentMethods = [
    {
      category: "Credit & Debit Cards",
      icon: CreditCard,
      methods: [
        { name: "Visa", logo: "/placeholder.svg?height=40&width=60", fees: "No additional fees" },
        { name: "Mastercard", logo: "/placeholder.svg?height=40&width=60", fees: "No additional fees" },
        { name: "JCB", logo: "/placeholder.svg?height=40&width=60", fees: "No additional fees" },
        { name: "American Express", logo: "/placeholder.svg?height=40&width=60", fees: "No additional fees" },
      ],
    },
    {
      category: "Digital Wallets",
      icon: Smartphone,
      methods: [
        { name: "GoPay", logo: "/placeholder.svg?height=40&width=60", fees: "No additional fees" },
        { name: "OVO", logo: "/placeholder.svg?height=40&width=60", fees: "No additional fees" },
        { name: "DANA", logo: "/placeholder.svg?height=40&width=60", fees: "No additional fees" },
        { name: "LinkAja", logo: "/placeholder.svg?height=40&width=60", fees: "No additional fees" },
        { name: "ShopeePay", logo: "/placeholder.svg?height=40&width=60", fees: "No additional fees" },
      ],
    },
    {
      category: "Bank Transfer",
      icon: Building,
      methods: [
        { name: "BCA", logo: "/placeholder.svg?height=40&width=60", fees: "Standard bank fees apply" },
        { name: "Mandiri", logo: "/placeholder.svg?height=40&width=60", fees: "Standard bank fees apply" },
        { name: "BNI", logo: "/placeholder.svg?height=40&width=60", fees: "Standard bank fees apply" },
        { name: "BRI", logo: "/placeholder.svg?height=40&width=60", fees: "Standard bank fees apply" },
        { name: "CIMB Niaga", logo: "/placeholder.svg?height=40&width=60", fees: "Standard bank fees apply" },
      ],
    },
    {
      category: "Buy Now, Pay Later",
      icon: RefreshCw,
      methods: [
        { name: "Kredivo", logo: "/placeholder.svg?height=40&width=60", fees: "0% interest for 3 months" },
        { name: "Akulaku", logo: "/placeholder.svg?height=40&width=60", fees: "0% interest for 3 months" },
        { name: "Indodana", logo: "/placeholder.svg?height=40&width=60", fees: "0% interest for 3 months" },
      ],
    },
  ]

  const securityFeatures = [
    {
      icon: Shield,
      title: "SSL Encryption",
      description: "All transactions are protected with 256-bit SSL encryption",
    },
    {
      icon: Lock,
      title: "PCI DSS Compliant",
      description: "We meet the highest standards for payment card security",
    },
    {
      icon: CheckCircle,
      title: "Fraud Protection",
      description: "Advanced fraud detection systems protect your transactions",
    },
    {
      icon: RefreshCw,
      title: "Secure Processing",
      description: "Payments processed through trusted payment gateways",
    },
  ]

  const shippingOptions = [
    {
      name: "Standard Delivery",
      duration: "3-5 business days",
      cost: "Free for orders over Rp 200,000",
      description: "Regular delivery to your doorstep",
    },
    {
      name: "Express Delivery",
      duration: "1-2 business days",
      cost: "Rp 25,000",
      description: "Fast delivery for urgent orders",
    },
    {
      name: "Same Day Delivery",
      duration: "Same day (Jakarta only)",
      cost: "Rp 50,000",
      description: "Get your order within hours",
    },
    {
      name: "Store Pickup",
      duration: "Ready in 2 hours",
      cost: "Free",
      description: "Collect from our partner stores",
    },
  ]

  const currencies = [
    { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp", flag: "🇮🇩" },
    { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
    { code: "SGD", name: "Singapore Dollar", symbol: "S$", flag: "🇸🇬" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground">Secure Payments</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Safe & <span className="text-primary">Convenient</span> Payments
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Shop with confidence using your preferred payment method. We support multiple payment options with
                bank-level security to protect your transactions.
              </p>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Payment Methods</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from a wide range of secure payment options
              </p>
            </div>

            <div className="space-y-12">
              {paymentMethods.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                        <category.icon className="h-6 w-6" />
                      </div>
                      <span className="text-2xl">{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {category.methods.map((method, methodIndex) => (
                        <div
                          key={methodIndex}
                          className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow"
                        >
                          <div className="flex items-center space-x-3">
                            <img
                              src={method.logo || "/placeholder.svg"}
                              alt={method.name}
                              className="h-8 w-12 object-contain"
                            />
                            <div>
                              <p className="font-medium text-foreground">{method.name}</p>
                              <p className="text-xs text-muted-foreground">{method.fees}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Security & Protection</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your payment security is our top priority
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping & Delivery */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Shipping & Delivery</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Flexible delivery options to suit your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shippingOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">{option.name}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Duration:</span>
                        <span className="text-sm font-medium">{option.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Cost:</span>
                        <span className="text-sm font-medium text-primary">{option.cost}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Currencies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Supported Currencies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Shop in your preferred currency with automatic location-based pricing
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {currencies.map((currency, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className="text-4xl">{currency.flag}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{currency.code}</h3>
                        <p className="text-sm text-muted-foreground">{currency.name}</p>
                        <p className="text-lg font-bold text-primary">{currency.symbol}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Payment Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How Payment Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Simple and secure checkout process</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Add to Cart",
                    description: "Select your products and add them to your shopping cart",
                  },
                  {
                    step: "2",
                    title: "Choose Payment",
                    description: "Select your preferred payment method from our secure options",
                  },
                  {
                    step: "3",
                    title: "Secure Checkout",
                    description: "Complete your payment through our encrypted checkout process",
                  },
                  {
                    step: "4",
                    title: "Order Confirmation",
                    description: "Receive instant confirmation and tracking information",
                  },
                ].map((step, index) => (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Payment FAQ</h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Common questions about payments and billing
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "Are my payment details secure?",
                  answer:
                    "Yes, we use industry-standard SSL encryption and are PCI DSS compliant to protect your payment information.",
                },
                {
                  question: "Can I save my payment methods?",
                  answer: "Yes, you can securely save your payment methods for faster checkout on future orders.",
                },
                {
                  question: "What if my payment fails?",
                  answer:
                    "If your payment fails, please check your payment details and try again. Contact support if issues persist.",
                },
                {
                  question: "Do you offer refunds?",
                  answer:
                    "Yes, we offer full refunds within 30 days of purchase for unused items in original packaging.",
                },
                {
                  question: "Are there any hidden fees?",
                  answer: "No, all fees are clearly displayed during checkout. We don't charge any hidden fees.",
                },
                {
                  question: "Can I change my payment method after ordering?",
                  answer:
                    "Payment methods cannot be changed after order confirmation. Please contact support for assistance.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-primary-foreground text-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
