'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');

  // Get unique brands
  const brands = Array.from(new Set(products.map(p => p.brand)));

  // Filter products
  const filteredProducts = products.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (selectedBrand && product.brand !== selectedBrand) return false;
    return true;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white border rounded-lg p-4 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-900 font-semibold">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </div>
                {(selectedCategory || selectedBrand) && (
                  <button
                    onClick={() => {
                      setSelectedCategory('');
                      setSelectedBrand('');
                    }}
                    className="text-sm text-green-700 hover:text-green-800"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">Category</h3>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="rounded-full border-gray-300 text-green-700 focus:ring-green-700"
                      />
                      <span className="ml-2 text-sm text-gray-600">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="border-t pt-4 mt-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">Brand</h3>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="radio"
                        checked={selectedBrand === brand}
                        onChange={() => setSelectedBrand(brand)}
                        className="rounded-full border-gray-300 text-green-700 focus:ring-green-700"
                      />
                      <span className="ml-2 text-sm text-gray-600">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 