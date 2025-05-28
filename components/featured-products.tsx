"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// Example product data
const featuredProducts = [
  {
    id: 1,
    name: 'Fresh Lettuce',
    category: 'vegetables',
    image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg',
    description: 'Crisp, locally grown lettuce harvested from our sustainable farms.'
  },
  {
    id: 2,
    name: 'Organic Bananas',
    category: 'fruits',
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg',
    description: 'Sweet, ripened bananas grown without pesticides or chemicals.'
  },
  {
    id: 3,
    name: 'Red Bell Peppers',
    category: 'vegetables',
    image: 'https://images.pexels.com/photos/4022083/pexels-photo-4022083.jpeg',
    description: 'Vibrant, crisp bell peppers perfect for cooking or fresh consumption.'
  },
  {
    id: 4,
    name: 'Dragon Fruit',
    category: 'fruits',
    image: 'https://images.pexels.com/photos/2907428/pexels-photo-2907428.jpeg',
    description: 'Exotic dragon fruit with sweet flesh and a mild flavor.'
  },
  {
    id: 5,
    name: 'Fresh Spinach',
    category: 'vegetables',
    image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg',
    description: 'Nutrient-rich spinach leaves harvested at peak freshness.'
  },
  {
    id: 6,
    name: 'Ripe Mangoes',
    category: 'fruits',
    image: 'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg',
    description: 'Sweet, juicy mangoes from Cambodian farms, perfect for desserts or fresh eating.'
  }
]

export function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  
  const filteredProducts = activeFilter === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(p => p.category === activeFilter)
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {['all', 'vegetables', 'fruits'].map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            variant={activeFilter === filter ? "default" : "outline"}
            className={cn(
              activeFilter === filter ? "bg-emerald-600 hover:bg-emerald-700" : "",
              "capitalize"
            )}
          >
            {filter}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
              <Button variant="link" className="p-0 text-emerald-600 dark:text-emerald-500 hover:text-emerald-800 font-medium">
                <Link href={`/products/${product.id}`} className="flex items-center gap-1">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}