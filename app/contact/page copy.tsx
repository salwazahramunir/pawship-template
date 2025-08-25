"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones, Package, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "hello@pawship.id",
      hours: "24/7 Response",
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+62 123 456 7890",
      hours: "Mon-Fri 9AM-6PM",
      color: "bg-green-500",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat support",
      contact: "+62 123 456 7890",
      hours: "Mon-Fri 9AM-9PM",
      color: "bg-green-600",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      description: "Meet us in person",
      contact: "Jakarta, Indonesia",
      hours: "Mon-Fri 9AM-5PM",
      color: "bg-red-500",
    },
  ]

  const departments = [
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Product questions, order help, returns",
      email: "support@pawship.id",
    },
    {
      icon: Package,
      title: "Order & Shipping",
      description: "Order status, shipping, delivery issues",
      email: "orders@pawship.id",
    },
    {
      icon: Users,
      title: "Reseller Program",
      description: "Partnership opportunities, wholesale inquiries",
      email: "resellers@pawship.id",
    },
    {
      icon: Mail,
      title: "General Inquiries",
      description: "Press, partnerships, general questions",
      email: "hello@pawship.id",
    },
  ]

  const faqs = [
    {
      question: "What are your shipping options?",
      answer: "We offer standard (3-5 days) and express (1-2 days) shipping across Indonesia.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to Singapore, Malaysia, and other Southeast Asian countries.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer 30-day returns for unused items in original packaging.",
    },
    {
      question: "How can I become a reseller?",
      answer: "Visit our reseller page or contact resellers@pawship.id for partnership opportunities.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground">Get in Touch</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                We're Here to <span className="text-primary">Help</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about our products or need assistance? Our friendly team is ready to help you and your
                pet find exactly what you need.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the best way to reach us - we're here to help!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${method.color} text-white`}
                    >
                      <method.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                      <p className="font-medium text-foreground">{method.contact}</p>
                      <p className="text-sm text-muted-foreground">{method.hours}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Departments */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="orders">Order & Shipping</SelectItem>
                          <SelectItem value="reseller">Reseller Program</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Subject *</label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                      <Textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Departments */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Departments</h3>
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                              <dept.icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground mb-1">{dept.title}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                              <p className="text-sm font-medium text-primary">{dept.email}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>Office Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">
                        Email support is available 24/7 with responses within 24 hours.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Quick answers to common questions</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
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
