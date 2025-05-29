// File: app/products/[category]/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ShieldCheck, Leaf, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { FeaturedProducts } from '@/components/featured-products';

const allProducts = {
  vegetables: [
    {
      id: 'v1',
      name: 'Organic Lettuce',
      description: 'Crisp, locally grown lettuce harvested from our sustainable farms...',
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
      description: 'Vibrant, crisp bell peppers perfect for cooking or fresh consumption...',
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
      description: 'Sweet, ripened bananas grown without pesticides or chemicals...',
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
      description: 'Exotic dragon fruit with sweet flesh and a mild flavor...',
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
      description: 'Naturally sweet dried mango slices, perfect for snacking...',
      origin: 'Kampong Cham Province, Cambodia',
      season: 'Available year-round',
      image: 'https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg',
      nutrition: ['Vitamin A', 'Vitamin C', 'Fiber', 'Antioxidants'],
      uses: ['Snacking', 'Baking', 'Trail mixes', 'Dessert toppings'],
      storage: 'Store in a cool, dry place for up to 6 months'
    }
  ]
};

export function generateStaticParams() {
  const params: { category: string; id: string }[] = [];
  for (const category in allProducts) {
    const products = allProducts[category as keyof typeof allProducts];
    products.forEach(product => {
      params.push({ category, id: product.id });
    });
  }
  return params;
}

export default function Page({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params;
  const categoryProducts = allProducts[category as keyof typeof allProducts] || [];
  const product = categoryProducts.find(p => p.id === id);

  if (!product) return notFound();

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
              {category.charAt(0).toUpperCase() + category.slice(1)}
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
  );
}
