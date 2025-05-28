"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MessageSquare, Loader2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      })
      // Reset form here in a real implementation
    }, 1500)
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.pexels.com/photos/5499118/pexels-photo-5499118.jpeg" 
            alt="Vegetables on a market display"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
              Contact Us
            </h1>
            <p className="text-xl text-white drop-shadow-md">
              Get in touch with our team to learn more about our products and services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're interested in our distribution services, export opportunities, 
                or learning more about our farming initiatives, we're here to help. 
                Fill out the form or use our contact information to reach out.
              </p>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">+855 61 60 80 10</p>
                      <p className="text-muted-foreground">+855 16 60 80 10 (WhatsApp, Telegram)</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">Linauy2014@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Contact Person</h3>
                      <p className="text-muted-foreground">Lina Uy</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6 pt-6">
                  <h3 className="font-bold text-xl mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="inquiry">Inquiry Type</Label>
                      <Select defaultValue="general">
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="distribution">Local Distribution</SelectItem>
                          <SelectItem value="export">Export Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please provide details about your inquiry..." 
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our office in Phnom Penh to discuss business opportunities in person
            </p>
          </div>
          
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            {/* In a real implementation, embed an actual Google Map here */}
            <div className="w-full h-full bg-muted relative flex items-center justify-center">
              <Image 
                src="https://images.pexels.com/photos/1732790/pexels-photo-1732790.jpeg" 
                alt="Map placeholder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <p className="text-white text-lg">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}