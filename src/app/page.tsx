'use client';

import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Phone, MapPin, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/category/CategoryCard';
import ProductCard from '@/components/product/ProductCard';
import BrandsCarousel from '@/components/brands/BrandsCarousel';
import { categories, products, brands } from '@/data/products';
import { useState } from 'react';
import PhoneNumbersModal from '@/components/PhoneNumbersModal';

export default function Home() {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Himachal Health and Hygiene Traders
                </h1>
              </div>
              <p className="text-xl text-gray-200 mb-8">
                Your trusted partner for industrial cleaning and hygiene solutions
              </p>
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Baddi & Manali, Himachal Pradesh</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href="/contact"
                  className="bg-white text-green-900 px-6 py-3 rounded-md font-semibold hover:bg-green-50 flex items-center"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send Inquiry
                </Link>
                <button
                  type="button"
                  onClick={() => setShowPhoneModal(true)}
                  className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[16/9] w-full group">
                <Image
                  src="/images/hero/chemical.jpg"
                  alt="Professional Cleaning and Hygiene Solutions"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-lg"></div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <p className="text-white text-xl font-semibold text-center px-4">Professional Cleaning and Hygiene Solutions</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="relative aspect-[4/3] w-full group">
                  <Image
                    src="/images/hero/industory.png"
                    alt="Industrial Cleaning"
                    fill
                    className="rounded-lg shadow-md object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <p className="text-white font-medium text-center px-2">Industrial Cleaning</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] w-full group">
                  <Image
                    src="/images/hero/disinfection.jpg"
                    alt="Hygiene Products"
                    fill
                    className="rounded-lg shadow-md object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <p className="text-white font-medium text-center px-2">Hygiene Products</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] w-full group">
                  <Image
                    src="/images/hero/profession-cleaning.png"
                    alt="Professional Solutions"
                    fill
                    className="rounded-lg shadow-md object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <p className="text-white font-medium text-center px-2">Professional Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-900">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-900">500+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-900">50+</div>
              <div className="text-gray-600">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-900">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Categories</h2>
            <Link 
              href="/categories" 
              className="text-green-900 hover:text-green-700 flex items-center"
            >
              View All
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Popular Products</h2>
            <Link 
              href="/products" 
              className="text-green-900 hover:text-green-700 flex items-center"
            >
              View All
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Brands</h2>
            <Link 
              href="/brands" 
              className="text-green-900 hover:text-green-700 flex items-center"
            >
              View All
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          <BrandsCarousel brands={brands} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/quality.jpg"
                  alt="Quality Products"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Products</h3>
              <p className="text-gray-600">Authorized distributor of leading brands</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=100"
                  alt="Pan India Delivery"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pan India Delivery</h3>
              <p className="text-gray-600">Fast and reliable shipping across state himachal pradesh</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=100"
                  alt="Competitive Prices"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Prices</h3>
              <p className="text-gray-600">Best rates for bulk orders</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=100"
                  alt="Expert Support"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Technical guidance and after-sales support</p>
            </div>
          </div>
        </div>
      </section>
      <PhoneNumbersModal open={showPhoneModal} onClose={() => setShowPhoneModal(false)} color="green" />
    </Layout>
  );
}
