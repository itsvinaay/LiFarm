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
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/about/3.jpg" 
            alt="Farm community collaboration"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              Get in touch with our team to learn more about our products and services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Whether you're interested in our distribution services, export opportunities, 
                  or learning more about our farming initiatives, we're here to help. 
                  Fill out the form or use our contact information to reach out.
                </p>
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 sm:p-3 rounded-full shrink-0">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-base sm:text-lg">Phone</h3>
                        <div className="space-y-0.5">
                          <p className="text-sm sm:text-base text-muted-foreground">+855 61 60 80 10</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">+855 16 60 80 10 (WhatsApp, Telegram)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 sm:p-3 rounded-full shrink-0">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-base sm:text-lg">Email</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">Linauy2014@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 sm:p-3 rounded-full shrink-0">
                        <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-base sm:text-lg">Contact Person</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">Lina Uy</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">Send Us a Message</h3>
                  <form
                    action="https://getform.io/f/bgdlpqma"
                    method="POST"
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm sm:text-base">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="Enter your first name" required className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm sm:text-base">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Enter your last name" required className="text-sm sm:text-base" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="Enter your email address" required className="text-sm sm:text-base" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
                      <Input id="phone" name="phone" placeholder="Enter your phone number" className="text-sm sm:text-base" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiry" className="text-sm sm:text-base">Inquiry Type</Label>
                      <Select name="inquiry" defaultValue="general">
                        <SelectTrigger className="text-sm sm:text-base">
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
                      <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Please provide details about your inquiry..." 
                        rows={4}
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-sm sm:text-base"
                    >
                      Send Message
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251237.16391582278!2d104.72460114698394!3d11.579705121838408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh%2C%20Cambodja!5e0!3m2!1spt-PT!2sin!4v1748498063511!5m2!1spt-PT!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}