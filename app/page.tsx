import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Truck, Users, ArrowRight, Check } from "lucide-react"
import { FeaturedProducts } from '@/components/featured-products'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/products/Dry tumeric/1.jpg" 
            alt="Fresh vegetables at a farm"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6 pl-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-md">
              Freshness from Cambodian Farms, Delivered Worldwide
            </h1>
            <p className="text-xl text-white drop-shadow-md">
              Leading distributor of local vegetables and fruits, expanding to global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/products">Explore Our Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Lifarm Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Lifarm?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the freshest produce while supporting local communities and expanding to global markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-card border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Locally Sourced & Fresh</h3>
                <p className="text-muted-foreground">
                  Directly from our farms and trusted local communities, ensuring the highest quality and freshness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-card border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reliable Distribution & Export</h3>
                <p className="text-muted-foreground">
                  Serving local businesses and expanding globally with efficient logistics and quality assurance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-card border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Supporting Local Farmers</h3>
                <p className="text-muted-foreground">
                  Building a sustainable agricultural ecosystem through fair partnerships and community development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
     
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50 dark:bg-muted/20">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="pl-4">
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">
                Discover our selection of fresh, high-quality produce
              </p>
            </div>
            <Button variant="link" className="text-emerald-600 dark:text-emerald-500 font-medium">
              <Link href="/products" className="flex items-center gap-1">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <FeaturedProducts />
        </div>
      </section>


      {/* Our Commitment Section */}
      <section className="py-16 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/assets/products/Agarwood/1.jpg" 
                alt="Farmers working in the field"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Commitment</h2>
              <p className="text-lg text-muted-foreground">
                Since 2013, Lifarm has been dedicated to revolutionizing Cambodia's agricultural landscape. 
                Our journey started as a local distributor and has evolved into a comprehensive 
                initiative that combines farming, distribution, and now, global export.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                  <p>Partnerships with farmers across 5 Cambodian provinces</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                  <p>Sustainable farming practices that respect the environment</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                  <p>Support for local communities through fair trade principles</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                  <p>Rigorous quality control from farm to distribution</p>
                </div>
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Partner with Lifarm?</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Whether you're interested in our distribution services, export opportunities, 
            or learning more about our farming initiatives, we're here to help.
          </p>
          <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-emerald-700">
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}