"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Truck, ShieldCheck, Leaf } from 'lucide-react'
import { FeaturedProducts } from '@/components/featured-products'

// Simplified product data
const allProducts = {
  vegetables: [
    {
      id: 'v1',
      name: 'Organic Lettuce',
      description: 'Crisp, locally grown lettuce harvested from our sustainable farms. Our lettuce is cultivated without harmful pesticides, ensuring a clean and healthy product for consumers. Rich in vitamins A and K, it\'s perfect for salads, sandwiches, and wraps.',
      origin: 'Kandal Province, Cambodia',
      season: 'Year-round',
      image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg',
      nutrition: ['Vitamin A', 'Vitamin K', 'Folate', 'Iron'],
      uses: ['Salads', 'Sandwiches', 'Wraps', 'Garnishes'],
      storage: 'Refrigerate at 1-4°C for up to 7 days'
    },
    {
      id: 'v2',
      name: 'Red Bell Peppers',
      description: 'Vibrant, crisp bell peppers perfect for cooking or fresh consumption. Our peppers are grown with care to ensure optimal sweetness and crunch. They\'re an excellent source of vitamins C and A, adding both nutrition and color to your dishes.',
      origin: 'Battambang Province, Cambodia',
      season: 'Year-round, peak from June to September',
      image: 'https://images.pexels.com/photos/4022083/pexels-photo-4022083.jpeg',
      nutrition: ['Vitamin C', 'Vitamin A', 'Vitamin B6', 'Folate'],
      uses: ['Salads', 'Stir-fries', 'Stuffed peppers', 'Roasting'],
      storage: 'Refrigerate at 7-10°C for up to 2 weeks'
    }
  ],
  fruits: [
    {
      id: 'f1',
      name: 'Organic Bananas',
      description: 'Sweet, ripened bananas grown without pesticides or chemicals. Our bananas are cultivated with traditional methods that respect both the environment and human health. Rich in potassium and fiber, they\'re nature\'s perfect snack.',
      origin: 'Kampong Speu Province, Cambodia',
      season: 'Year-round',
      image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg',
      nutrition: ['Potassium', 'Vitamin B6', 'Vitamin C', 'Fiber'],
      uses: ['Fresh eating', 'Smoothies', 'Baking', 'Desserts'],
      storage: 'Room temperature until ripe, then refrigerate to extend shelf life'
    },
    {
      id: 'f2',
      name: 'Dragon Fruit',
      description: 'Exotic dragon fruit with sweet flesh and a mild flavor. This stunning fruit not only looks beautiful but is packed with antioxidants, fiber, and vitamins. The white flesh is dotted with tiny black seeds that add a pleasant crunch.',
      origin: 'Kampot Province, Cambodia',
      season: 'May to October',
      image: 'https://images.pexels.com/photos/2907428/pexels-photo-2907428.jpeg',
      nutrition: ['Vitamin C', 'Iron', 'Magnesium', 'Fiber'],
      uses: ['Fresh eating', 'Fruit salads', 'Smoothies', 'Garnishes'],
      storage: 'Refrigerate for up to 5 days'
    }
  ],
  processed: [
    {
      id: 'p1',
      name: 'Dried Mango Slices',
      description: 'Naturally sweet dried mango slices, perfect for snacking. Made from our premium mangoes at peak ripeness, these dried slices retain the fruit\'s natural sweetness without added sugars. They\'re a convenient way to enjoy the taste of fresh mangoes year-round.',
      origin: 'Kampong Cham Province, Cambodia',
      season: 'Available year-round',
      image: 'https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg',
      nutrition: ['Vitamin A', 'Vitamin C', 'Fiber', 'Antioxidants'],
      uses: ['Snacking', 'Baking', 'Trail mixes', 'Dessert toppings'],
      storage: 'Store in a cool, dry place for up to 6 months'
    }
  ]
};

export default function ProductDetail() {
  const { category, id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    if (category && id && typeof category === 'string' && typeof id === 'string') {
      const categoryProducts = allProducts[category as keyof typeof allProducts] || [];
      const foundProduct = categoryProducts.find(p => p.id === id);
      setProduct(foundProduct || null);
    }
    setLoading(false);
  }, [category, id]);
  
  if (loading) {
    return (
      <div className="container py-20 text-center">
        <p>Loading product details...</p>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Button>
          <Link href="/products">Return to Products</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container py-12">
      <Button variant="ghost" className="mb-8">
        <Link href="/products" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image 
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="inline-block px-3 py-1 text-sm bg-emerald-100 text-emerald-800 rounded-full mb-3 dark:bg-emerald-900/30 dark:text-emerald-300">
              {typeof category === 'string' ? category.charAt(0).toUpperCase() + category.slice(1) : ''}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          </div>
          
          <p className="text-lg text-muted-foreground">{product.description}</p>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <span className="font-semibold">Origin:</span>
              <span>{product.origin}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Season:</span>
              <span>{product.season}</span>
            </div>
          </div>
          
          <Separator />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-muted/20 rounded-lg">
              <Truck className="h-8 w-8 text-emerald-600 mb-2" />
              <h3 className="font-semibold">Export Ready</h3>
              <p className="text-sm text-muted-foreground">Available for international shipping</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-muted/20 rounded-lg">
              <ShieldCheck className="h-8 w-8 text-emerald-600 mb-2" />
              <h3 className="font-semibold">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">Rigorous quality control processes</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-muted/20 rounded-lg">
              <Leaf className="h-8 w-8 text-emerald-600 mb-2" />
              <h3 className="font-semibold">Sustainably Farmed</h3>
              <p className="text-sm text-muted-foreground">Eco-friendly growing practices</p>
            </div>
          </div>
          
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/contact">Inquire About This Product</Link>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Nutritional Benefits</h2>
            <ul className="space-y-2">
              {product.nutrition.map((item: string, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Common Uses</h2>
            <ul className="space-y-2">
              {product.uses.map((item: string, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Storage Recommendations</h2>
            <p>{product.storage}</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <FeaturedProducts />
      </div>
    </div>
  )
}