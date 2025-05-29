"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { productData } from '@/data/products'

// Example product data
const featuredProducts = [
  ...productData['Agarwood'].map(product => ({ ...product, category: 'Agarwood' })),
  ...productData['Cashew Nut'].map(product => ({ ...product, category: 'Cashew Nut' })),
  ...productData['Dry Ginger'].map(product => ({ ...product, category: 'Dry Ginger' })),
  ...productData['Dry Turmeric'].map(product => ({ ...product, category: 'Dry Turmeric' })),
]

export function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  
  const filteredProducts = activeFilter === 'all' 
    ? featuredProducts.slice(0, 8)
    : featuredProducts.filter(p => p.category === activeFilter)
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {["all", "Agarwood", "Cashew Nut", "Dry Ginger", "Dry Turmeric"].map((filter) => (
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 p-0">
            <div className="relative h-36 overflow-hidden">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}