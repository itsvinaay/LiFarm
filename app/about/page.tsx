import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Check, Award, Heart } from 'lucide-react'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg" 
            alt="Farm landscape with workers"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="container relative z-10 pl-4">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
              About Lifarm F&B Co., LTD
            </h1>
            <p className="text-xl text-white drop-shadow-md">
              Our journey from local distribution to global export
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2013, Lifarm began as an ambitious venture to revolutionize 
                Cambodia's agricultural distribution landscape. We quickly established 
                ourselves as the largest local distributor, building strong relationships 
                with farms across the country.
              </p>
              <p className="text-lg text-muted-foreground">
                As our business grew, we recognized the potential to expand beyond distribution. 
                We initiated our own farming operations, implementing sustainable practices 
                and working directly with local farmers to ensure consistent quality and supply.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to be taking the next step in our journey – bringing the 
                freshness and quality of Cambodian produce to global markets through our 
                export initiatives.
              </p>
              <div className="pt-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/contact">Partner With Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg" 
                alt="Lifarm's agricultural initiatives"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission, Vision & Values */}
      <section className="py-16 bg-gray-50 dark:bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Mission, Vision & Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-emerald-600">Mission</span>
              </h3>
              <p className="text-muted-foreground">
                To transform Cambodia's agricultural sector by connecting local farmers 
                with global markets, ensuring sustainable practices, and delivering the 
                freshest produce to customers worldwide.
              </p>
            </div>
            
            <div className="bg-white dark:bg-card p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-emerald-600">Vision</span>
              </h3>
              <p className="text-muted-foreground">
                To be recognized globally as the premier exporter of high-quality 
                Cambodian agricultural products, while creating sustainable 
                economic opportunities for local communities.
              </p>
            </div>
            
            <div className="bg-white dark:bg-card p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-emerald-600">Values</span>
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Quality and freshness in every product</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Sustainability and environmental responsibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Community empowerment and fair partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Innovation in farming and distribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Farms & Community */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Farms & Community</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Lifarm partners with local farmers across five Cambodian provinces, 
              supporting sustainable agricultural practices and community development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 px-4 sm:px-0">
            <div className="relative h-48 sm:h-60 rounded-lg overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg" 
                alt="Farmers working in the field"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="relative h-48 sm:h-60 rounded-lg overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg" 
                alt="Fresh vegetables harvest"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-48 sm:h-60 rounded-lg overflow-hidden">
              <Image 
                src="/assets/about/1.jpg" 
                alt="Farm community collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-48 sm:h-60 rounded-lg overflow-hidden">
              <Image 
                src="/assets/about/2.jpg" 
                alt="Farm community collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-48 sm:h-60 rounded-lg overflow-hidden">
              <Image 
                src="/assets/about/3.jpg" 
                alt="Farm community collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-48 sm:h-60 rounded-lg overflow-hidden">
              <Image 
                src="/assets/about/4.jpg" 
                alt="Farm community collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-48 sm:h-60 rounded-lg overflow-hidden">
              <Image 
                src="/assets/about/5.jpg" 
                alt="Farm community collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-48 sm:h-60 rounded-lg overflow-hidden">
              <Image 
                src="/assets/products/Dry tumeric/7.jpg" 
                alt="Farm community collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-48 sm:h-60 rounded-lg overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg" 
                alt="Community farming initiative"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
          
          <div className="bg-emerald-50 dark:bg-emerald-950/20 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Commitment to Farmers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Fair Compensation</h4>
                    <p className="text-muted-foreground">We ensure farmers receive fair prices for their produce, supporting their livelihoods.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Community Support</h4>
                    <p className="text-muted-foreground">We invest in local communities, providing resources and training.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Sustainable Practices</h4>
                    <p className="text-muted-foreground">We promote environmentally responsible farming methods.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Long-term Partnerships</h4>
                    <p className="text-muted-foreground">We build lasting relationships with our farmers, ensuring stability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-16 bg-gray-50 dark:bg-muted/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate team behind Lifarm's vision and success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image 
                  src="https://images.pexels.com/photos/4498376/pexels-photo-4498376.jpeg" 
                  alt="Lina Uy"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Lina Uy</h3>
                <p className="text-emerald-600">Founder & CEO</p>
                <p className="text-muted-foreground mt-2">
                  Leading Lifarm's vision since 2013 with a passion for sustainable agriculture.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image 
                  src="https://images.pexels.com/photos/3783219/pexels-photo-3783219.jpeg" 
                  alt="Sample Person 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Sambath Mao</h3>
                <p className="text-emerald-600">Head of Operations</p>
                <p className="text-muted-foreground mt-2">
                  Overseeing our farming and distribution operations with expertise.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image 
                  src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg" 
                  alt="Sample Person 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Chanthy Sok</h3>
                <p className="text-emerald-600">International Relations</p>
                <p className="text-muted-foreground mt-2">
                  Building our global partnerships and export initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}