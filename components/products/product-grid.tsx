import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const productData = {
  Agarwood: [
    {
      id: 'ag1',
      name: 'Premium Agarwood',
      description: 'High-quality agarwood sourced from sustainable forests.',
      image: '/assets/products/Agarwood/1.jpg'
    },
    {
      id: 'ag2',
      name: 'Agarwood Chips',
      description: 'Pure agarwood chips perfect for incense and aromatherapy.',
      image: '/assets/products/Agarwood/2.jpg'
    },
    {
      id: 'ag3',
      name: 'Agarwood Oil',
      description: 'Pure agarwood essential oil with rich, complex fragrance.',
      image: '/assets/products/Agarwood/3.jpg'
    },  {
      id: 'ag4',
      name: 'Agarwood Chips',
      description: 'Pure agarwood chips perfect for incense and aromatherapy.',
      image: '/assets/products/Agarwood/4.jpg'
    },  {
      id: 'ag5',
      name: 'Agarwood Chips',
      description: 'Pure agarwood chips perfect for incense and aromatherapy.',
      image: '/assets/products/Agarwood/5.jpg'
    },
    {
      id: 'ag6',
      name: 'Agarwood Chips',
      description: 'Pure agarwood chips perfect for incense and aromatherapy.',
      image: '/assets/products/Agarwood/6.jpg'
    },
    {
      id: 'ag7',
      name: 'Agarwood Chips',
      description: 'Pure agarwood chips perfect for incense and aromatherapy.',
      image: '/assets/products/Agarwood/7.jpg'
    },
    {
      id: 'ag8',
      name: 'Agarwood Chips',
      description: 'Pure agarwood chips perfect for incense and aromatherapy.',
      image: '/assets/products/Agarwood/8.jpg'
    },
    {
      id: 'ag9',
      name: 'Agarwood Chips',
      description: 'Pure agarwood chips perfect for incense and aromatherapy.',
      image: '/assets/products/Agarwood/9.jpg'
    },
    {
      id: 'ag10',
      name: 'Agarwood Chips',
      description: 'Pure agarwood chips perfect for incense and aromatherapy.',
      image: '/assets/products/Agarwood/10.jpg'
    },
    {
      id: 'ag11',
      name: 'Agarwood Chips',
      description: 'Pure agarwood chips perfect for incense and aromatherapy.',
      image: '/assets/products/Agarwood/11.jpg'
    },
    {
      id: 'ag12',
      name: 'Agarwood Chips',
      description: 'Pure agarwood chips perfect for incense and aromatherapy.',
      image: '/assets/products/Agarwood/12.jpg'
    },
  ],
  "Cambodia Oily Agarwood": [
    {
      id: 'coa1',
      name: 'Cambodian Premium Oil',
      description: 'Exclusive Cambodian agarwood oil with distinctive aroma.',
      image: '/assets/products/Cambodia oily agarwood/premium-oil.jpg'
    },
    {
      id: 'coa2',
      name: 'Traditional Oil Blend',
      description: 'Traditional Cambodian agarwood oil blend.',
      image: '/assets/products/Cambodia oily agarwood/oil-blend.jpg'
    }
  ],
  "Dry Turmeric": [
    {
      id: 'dt1',
      name: 'Ground Turmeric',
      description: 'Finely ground dry turmeric powder for cooking and health.',
      image: '/assets/products/Dry tumeric/1.jpg'
    },
    {
      id: 'dt2',
      name: 'Turmeric Root',
      description: 'Whole dried turmeric root for traditional use.',
      image: '/assets/products/Dry tumeric/2.jpg'
    },
    {
      id: 'dt3',
      name: 'Ground Turmeric',
      description: 'Finely ground dry turmeric powder for cooking and health.',
      image: '/assets/products/Dry tumeric/3.jpg'
    },{
      id: 'dt4',
      name: 'Ground Turmeric',
      description: 'Finely ground dry turmeric powder for cooking and health.',
      image: '/assets/products/Dry tumeric/4.jpg'
    },{
      id: 'dt5',
      name: 'Ground Turmeric',
      description: 'Finely ground dry turmeric powder for cooking and health.',
      image: '/assets/products/Dry tumeric/5.jpg'
    },{
      id: 'dt6',
      name: 'Ground Turmeric',
      description: 'Finely ground dry turmeric powder for cooking and health.',
      image: '/assets/products/Dry tumeric/6.jpg'
    },{
      id: 'dt7',
      name: 'Ground Turmeric',
      description: 'Finely ground dry turmeric powder for cooking and health.',
      image: '/assets/products/Dry tumeric/7.jpg'
    },{
      id: 'dt8',
      name: 'Ground Turmeric',
      description: 'Finely ground dry turmeric powder for cooking and health.',
      image: '/assets/products/Dry tumeric/8.jpg'
    },{
      id: 'dt9',
      name: 'Ground Turmeric',
      description: 'Finely ground dry turmeric powder for cooking and health.',
      image: '/assets/products/Dry tumeric/9.jpg'
    },
    {
      id: 'dt10',
      name: 'Ground Turmeric',
      description: 'Finely ground dry turmeric powder for cooking and health.',
      image: '/assets/products/Dry tumeric/10.jpg'
    },
    {
      id: 'dt11',
      name: 'Ground Turmeric',
      description: 'Finely ground dry turmeric powder for cooking and health.',
      image: '/assets/products/Dry tumeric/11.jpg'
    },
    {
      id: 'dt12',
      name: 'Ground Turmeric',
      description: 'Finely ground dry turmeric powder for cooking and health.',
      image: '/assets/products/Dry tumeric/12.jpg'
    },
    {
      id: 'dt13',
      name: 'Ground Turmeric',
      description: 'Finely ground dry turmeric powder for cooking and health.',
      image: '/assets/products/Dry tumeric/13.jpg'
    },
  ],
  "Dry Ginger": [
    {
      id: 'dg1',
      name: 'Dried Ginger Slices',
      description: 'Premium dried ginger slices for tea and cooking.',
      image: '/assets/products/Dry ginger/1.jpg'
    },
    {
      id: 'dg2',
      name: 'Ginger Powder',
      description: 'Fine ginger powder for culinary and medicinal use.',
      image: '/assets/products/Dry ginger/2.jpg'
    },{
      id: 'dg3',
      name: 'Ginger Powder',
      description: 'Fine ginger powder for culinary and medicinal use.',
      image: '/assets/products/Dry ginger/3.jpg'
    },{
      id: 'dg4',
      name: 'Ginger Powder',
      description: 'Fine ginger powder for culinary and medicinal use.',
      image: '/assets/products/Dry ginger/4.jpg'
    },{
      id: 'dg5',
      name: 'Ginger Powder',
      description: 'Fine ginger powder for culinary and medicinal use.',
      image: '/assets/products/Dry ginger/5.jpg'
    },{
      id: 'dg6',
      name: 'Ginger Powder',
      description: 'Fine ginger powder for culinary and medicinal use.',
      image: '/assets/products/Dry ginger/6.jpg'
    }
  ],
  "Cashew Nut": [
    {
      id: 'cn1',
      name: 'Raw Cashews',
      description: 'Premium raw cashew nuts from Cambodia.',
      image: '/assets/products/Cashew nut/1.jpg'
    },
    {
      id: 'cn2',
      name: 'Roasted Cashews',
      description: 'Perfectly roasted cashew nuts with natural flavor.',
      image: '/assets/products/Cashew nut/2.jpg'
    },
    {
      id: 'cn3',
      name: 'Roasted Cashews',
      description: 'Perfectly roasted cashew nuts with natural flavor.',
      image: '/assets/products/Cashew nut/3.jpg'
    }
  ]
};

interface ProductGridProps {
  category: 'Agarwood' | 'Cambodia Oily Agarwood' | 'Dry Turmeric' | 'Dry Ginger' | 'Cashew Nut';
}

export function ProductGrid({ category }: ProductGridProps) {
  const products = productData[category] || [];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="object-cover"
              priority
            />
          </div>
          <CardContent className="p-5 space-y-3">
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-muted-foreground text-sm">{product.description}</p>
            <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/20">
              <Link href={`/products/${category}/${product.id}`}>
                View Details
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}