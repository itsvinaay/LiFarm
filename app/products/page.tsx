import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductGrid } from '@/components/products/product-grid'
import { ProductCategories } from '@/components/products/product-categories'

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/products/hero-image.jpg" 
            alt="Premium products display"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="container relative z-10 pl-4">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
              Premium Products
            </h1>
            <p className="text-xl text-white drop-shadow-md">
              Discover our selection of high-quality Cambodian agricultural products
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto">
          <ProductCategories />
        </div>
      </section>

      {/* Product Listings */}
      <section className="py-16 bg-gray-50 dark:bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 pl-4">Browse Our Products</h2>
          
          <Tabs defaultValue="agarwood" className="space-y-8">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="agarwood">Agarwood</TabsTrigger>
              <TabsTrigger value="cambodia-oily-agarwood">Oily Agarwood</TabsTrigger>
              <TabsTrigger value="dry-turmeric">Dry Turmeric</TabsTrigger>
              <TabsTrigger value="dry-ginger">Dry Ginger</TabsTrigger>
              <TabsTrigger value="cashew-nut">Cashew Nut</TabsTrigger>
            </TabsList>
            
            <TabsContent value="agarwood">
              <ProductGrid category="Agarwood" />
            </TabsContent>
            
            <TabsContent value="cambodia-oily-agarwood">
              <ProductGrid category="Cambodia Oily Agarwood" />
            </TabsContent>
            
            <TabsContent value="dry-turmeric">
              <ProductGrid category="Dry Turmeric" />
            </TabsContent>

            <TabsContent value="dry-ginger">
              <ProductGrid category="Dry Ginger" />
            </TabsContent>

            <TabsContent value="cashew-nut">
              <ProductGrid category="Cashew Nut" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Export Information */}
      <section id="export" className="py-16 bg-white dark:bg-background pl-4">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Export Opportunities</h2>
              <p className="text-lg text-muted-foreground">
                We offer premium Cambodian agricultural products for international markets, 
                ensuring the highest quality and reliability in every shipment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                  <p>Premium quality agarwood and agricultural products</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                  <p>Professional logistics and shipping solutions</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                  <p>Custom packaging and labeling services</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                  <p>International standards compliance guaranteed</p>
                </div>
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contact">Request Export Information</Link>
              </Button>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/assets/products/export-image.jpg" 
                alt="Premium product packaging"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}