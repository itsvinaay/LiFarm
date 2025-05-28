import Link from 'next/link'
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-7 w-7 text-emerald-600" />
              <span className="font-bold text-xl text-foreground">Lifarm</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Leading distributor of local vegetables and fruits in Cambodia, expanding to global markets since 2013.
            </p>
            <div className="flex space-x-3">
              <Link 
                href="https://facebook.com" 
                className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link 
                href="https://instagram.com" 
                className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link 
                href="https://linkedin.com" 
                className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
              >
                <Linkedin size={18} />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
              >
                <Twitter size={18} />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Quick Links</h3>
            <nav className="space-y-3">
              <Link 
                href="/" 
                className="block text-muted-foreground hover:text-emerald-600 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="block text-muted-foreground hover:text-emerald-600 transition-colors"
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className="block text-muted-foreground hover:text-emerald-600 transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="block text-muted-foreground hover:text-emerald-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Our Products</h3>
            <nav className="space-y-3">
              <Link 
                href="/products#vegetables" 
                className="block text-muted-foreground hover:text-emerald-600 transition-colors"
              >
                Fresh Vegetables
              </Link>
              <Link 
                href="/products#fruits" 
                className="block text-muted-foreground hover:text-emerald-600 transition-colors"
              >
                Fresh Fruits
              </Link>
              <Link 
                href="/products#processed" 
                className="block text-muted-foreground hover:text-emerald-600 transition-colors"
              >
                Processed Products
              </Link>
              <Link 
                href="/products#export" 
                className="block text-muted-foreground hover:text-emerald-600 transition-colors"
              >
                Export Catalog
              </Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-sm text-foreground font-medium">+855 61 60 80 10</p>
                  <p className="text-xs text-muted-foreground">WhatsApp: +855 16 60 80 10</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">Linauy2014@gmail.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">Phnom Penh, Cambodia</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lifarm F&B Co., LTD. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}