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
          <div className="max-w-3xl space-y-6 px-4 md:px-0 lg:pl-4">
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/85561608010"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M12.004 2.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.464 3.484 1.345 4.997l-1.409 5.151 5.273-1.384c1.478.805 3.153 1.236 4.788 1.236h.001c5.523 0 9.997-4.474 9.997-9.997s-4.474-9.997-9.997-9.997zm5.803 15.8c-.243.687-1.423 1.354-1.963 1.438-.502.08-1.145.114-1.845-.117-.426-.14-1.008-.328-1.747-.641-3.073-1.312-5.086-4.377-5.242-4.59-.154-.213-1.25-1.664-1.25-3.179 0-1.514.797-2.26 1.08-2.57.283-.31.617-.387.823-.387.206 0 .412.002.593.011.191.009.447-.072.7.535.253.607.857 2.099.933 2.253.076.154.127.336.025.549-.102.213-.153.336-.305.515-.153.18-.321.401-.457.54-.153.154-.312.32-.134.627.178.308.792 1.304 1.698 2.112 1.168 1.03 2.153 1.354 2.461 1.508.308.154.486.128.667-.076.18-.204.772-.899.98-1.206.208-.308.412-.254.7-.153.287.102 1.814.857 2.127 1.012.313.154.522.229.597.357.076.128.076.74-.167 1.427z"/>
        </svg>
      </a>
    </>
  )
}