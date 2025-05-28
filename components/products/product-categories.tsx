import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

const categories = [
  {
    id: 'agarwood',
    name: 'Agarwood',
    description: 'Premium quality agarwood products from sustainable sources',
    image: '/assets/products/Agarwood/cover.jpg'
  },
  {
    id: 'cambodia-oily-agarwood',
    name: 'Cambodia Oily Agarwood',
    description: 'Exclusive Cambodian agarwood oil with distinctive properties',
    image: '/assets/products/Cambodia oily agarwood/cover.jpg'
  },
  {
    id: 'dry-turmeric',
    name: 'Dry Turmeric',
    description: 'High-quality dried turmeric for culinary and medicinal use',
    image: '/assets/products/Dry tumeric/cover.jpg'
  },
  {
    id: 'dry-ginger',
    name: 'Dry Ginger',
    description: 'Premium dried ginger products for various applications',
    image: '/assets/products/Dry ginger/cover.jpg'
  },
  {
    id: 'cashew-nut',
    name: 'Cashew Nut',
    description: 'Fresh and processed cashew nuts from Cambodian farms',
    image: '/assets/products/Cashew nut/cover.jpg'
  }
]

export function ProductCategories() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our premium selection of Cambodian agricultural products
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link href={`/products/${category.id}`} key={category.id}>
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-bold text-lg">{category.name}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}