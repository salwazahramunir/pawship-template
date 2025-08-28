import React from "react";
import {
  CreditCard,
  Smartphone,
  Building,
  Shield,
  Globe,
  CheckCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Payments = () => {
  const currencies = [
    {
      code: "USD",
      name: "US Dollar",
      symbol: "$",
      countries: ["United States", "International"],
      flag: "🇺🇸",
    },
    {
      code: "IDR",
      name: "Indonesian Rupiah",
      symbol: "Rp",
      countries: ["Indonesia"],
      flag: "🇮🇩",
    },
    {
      code: "SGD",
      name: "Singapore Dollar",
      symbol: "S$",
      countries: ["Singapore"],
      flag: "🇸🇬",
    },
    {
      code: "AUD",
      name: "Australian Dollar",
      symbol: "A$",
      countries: ["Australia"],
      flag: "🇦🇺",
    },
    {
      code: "HKD",
      name: "Hong Kong Dollar",
      symbol: "HK$",
      countries: ["Hong Kong"],
      flag: "🇭🇰",
    },
  ];

  const paymentMethods = [
    {
      category: "Credit & Debit Cards",
      icon: CreditCard,
      methods: [
        {
          name: "Visa",
          logo: "💳",
          available: ["USD", "IDR", "SGD", "AUD", "HKD"],
        },
        {
          name: "Mastercard",
          logo: "💳",
          available: ["USD", "IDR", "SGD", "AUD", "HKD"],
        },
        {
          name: "American Express",
          logo: "💳",
          available: ["USD", "SGD", "AUD", "HKD"],
        },
        { name: "JCB", logo: "💳", available: ["USD", "HKD"] },
      ],
    },
    {
      category: "Digital Wallets",
      icon: Smartphone,
      methods: [
        { name: "PayPal", logo: "💙", available: ["USD", "SGD", "AUD", "HKD"] },
        {
          name: "Apple Pay",
          logo: "🍎",
          available: ["USD", "SGD", "AUD", "HKD"],
        },
        {
          name: "Google Pay",
          logo: "🟢",
          available: ["USD", "SGD", "AUD", "HKD"],
        },
        { name: "GrabPay", logo: "🟢", available: ["SGD"] },
        { name: "OVO", logo: "🟣", available: ["IDR"] },
        { name: "GoPay", logo: "🟢", available: ["IDR"] },
        { name: "DANA", logo: "🔵", available: ["IDR"] },
      ],
    },
    {
      category: "Bank Transfer",
      icon: Building,
      methods: [
        {
          name: "Local Bank Transfer",
          logo: "🏦",
          available: ["IDR", "SGD", "AUD", "HKD"],
        },
        { name: "International Wire", logo: "🌐", available: ["USD"] },
        {
          name: "SWIFT Transfer",
          logo: "⚡",
          available: ["USD", "SGD", "AUD", "HKD"],
        },
      ],
    },
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "SSL Encryption",
      description: "All transactions are protected with 256-bit SSL encryption",
    },
    {
      icon: CheckCircle,
      title: "PCI Compliance",
      description: "We meet the highest standards for payment card security",
    },
    {
      icon: Globe,
      title: "Fraud Protection",
      description: "Advanced fraud detection systems protect your purchases",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      {/* <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-primary text-primary-foreground">
              Secure Payments
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Safe & <span className="text-primary">Convenient</span> Payments
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Shop with confidence using your preferred payment method. We
              support multiple payment options with bank-level security to
              protect your transactions.
            </p>
          </div>
        </div>
      </section> */}

      <section
        className="relative h-[60vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/3f/b3/f8/3fb3f8ff5e7096d729bfe920797fc829.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Overlay hitam */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-primary text-primary-foreground">
              Secure Payments
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Safe & <span className="text-primary">Convenient</span> Payments
            </h1>
            {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Shop with confidence using your preferred payment method. We
              support multiple payment options with bank-level security to
              protect your transactions.
            </p> */}
          </div>
        </div>
      </section>

      {/* Supported Currencies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Supported Currencies
            </h2>
            <p className="text-xl text-gray-600">
              We automatically detect your location and display prices in your
              local currency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {currencies.map((currency, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{currency.flag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {currency.code}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{currency.name}</p>
                <p className="text-orange-500 font-semibold text-lg">
                  {currency.symbol}
                </p>
                <div className="mt-3">
                  {currency.countries.map((country, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-1 mb-1"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50  mx-10 rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Payment Methods
            </h2>
            <p className="text-xl text-gray-600">
              Choose from a variety of secure payment options
            </p>
          </div>

          <div className="space-y-12">
            {paymentMethods.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.methods.map((method, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-2xl">{method.logo}</span>
                        <span className="font-semibold text-gray-900">
                          {method.name}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {method.available.map((curr, currIdx) => (
                          <span
                            key={currIdx}
                            className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs"
                          >
                            {curr}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Security is Our Priority
            </h2>
            <p className="text-xl text-gray-600">
              We use industry-leading security measures to protect your payment
              information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Payment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Payment Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, secure, and fast checkout process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Add to Cart</h3>
              <p className="text-gray-600 text-sm">
                Select your favorite products and add them to your cart
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Select Payment</h3>
              <p className="text-gray-600 text-sm">
                Choose your preferred payment method from our secure options
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Complete Order</h3>
              <p className="text-gray-600 text-sm">
                Confirm your order and receive instant confirmation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Payment FAQ
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                Are my payment details secure?
              </h3>
              <p className="text-gray-600">
                Yes, we use industry-standard SSL encryption and are PCI DSS
                compliant. We never store your full credit card details on our
                servers.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                Can I change my currency after placing an order?
              </h3>
              <p className="text-gray-600">
                Currency must be selected before checkout. Once an order is
                placed, the currency cannot be changed. Please contact customer
                service if you need assistance.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                Do you charge foreign transaction fees?
              </h3>
              <p className="text-gray-600">
                We don't charge foreign transaction fees, but your bank or card
                issuer may apply their own fees for international transactions.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                How long does payment processing take?
              </h3>
              <p className="text-gray-600">
                Most payments are processed instantly. Bank transfers may take
                1-3 business days to clear depending on your bank and location.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Payments;
