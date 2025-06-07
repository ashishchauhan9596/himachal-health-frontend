'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { Filter, ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { categories, products } from '@/data/products';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === category.id);
  const brands = Array.from(new Set(categoryProducts.map((p) => p.brand)));

  const filteredProducts = selectedBrands.length > 0
    ? categoryProducts.filter((p) => selectedBrands.includes(p.brand))
    : categoryProducts;

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <Layout>
      {/* Category Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          <p className="text-gray-600 mt-2">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-900 font-semibold">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </div>
                {selectedBrands.length > 0 && (
                  <button
                    onClick={() => setSelectedBrands([])}
                    className="text-sm text-blue-900 hover:text-blue-700"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Brand Filter */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">Brand</h3>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="rounded border-gray-300 text-blue-900 focus:ring-blue-900"
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
            <div className="bg-white border rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="text-gray-600">
                  Showing {filteredProducts.length} products
                </div>
                <select className="border rounded-md text-sm p-2">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 