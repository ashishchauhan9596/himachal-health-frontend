import Layout from '@/components/layout/Layout';
import { brands } from '@/data/products';
import Image from 'next/image';

export default function BrandsPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Brand Partners</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div key={brand.id} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="h-40 flex items-center justify-center mb-4">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-900">{brand.name}</h2>
                <p className="text-gray-600 mt-2">Authorized Channel Partner</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 