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
            src="/assets/products/Cashew nut/cover.jpg" 
            
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
              {/* <TabsTrigger value="cambodia-oily-agarwood">Oily Agarwood</TabsTrigger> */}
              <TabsTrigger value="dry-turmeric">Dry Turmeric</TabsTrigger>
              <TabsTrigger value="dry-ginger">Dry Ginger</TabsTrigger>
              <TabsTrigger value="cashew-nut">Cashew Nut</TabsTrigger>
            </TabsList>
            
            <TabsContent value="agarwood">
              <ProductGrid category="Agarwood" />
            </TabsContent>
            
            {/* <TabsContent value="cambodia-oily-agarwood">
              <ProductGrid category="Cambodia Oily Agarwood" />
            </TabsContent> */}
            
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
      <section id="export" className="py-16 bg-white dark:bg-background px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold">Export Opportunities</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                We offer premium Cambodian agricultural products for international markets, 
                ensuring the highest quality and reliability in every shipment.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-600 mt-2"></div>
                  <p className="text-sm md:text-base">Premium quality agarwood and agricultural products</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-600 mt-2"></div>
                  <p className="text-sm md:text-base">Professional logistics and shipping solutions</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-600 mt-2"></div>
                  <p className="text-sm md:text-base">Custom packaging and labeling services</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-600 mt-2"></div>
                  <p className="text-sm md:text-base">International standards compliance guaranteed</p>
                </div>
              </div>
              <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contact">Request Export Information</Link>
              </Button>
            </div>
            
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2 mb-6 lg:mb-0">
              <Image 
                src="/assets/products/Cashew nut/3.jpg" 
                alt="Premium product packaging"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}