import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Phone, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { products } from '@/data/products';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-lg text-blue-800 font-semibold mb-4">{product.brand}</p>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Minimum Order Quantity</span>
                <span className="font-semibold">{product.moq}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Lead Time</span>
                <span className="font-semibold text-blue-800">{product.leadTime}</span>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4 mb-8">
              <button className="w-full flex items-center justify-center px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900">
                <Send className="h-5 w-5 mr-2" />
                Send Inquiry
              </button>
              <button className="w-full flex items-center justify-center px-6 py-3 border border-blue-800 text-blue-800 rounded-md hover:bg-blue-50">
                <Phone className="h-5 w-5 mr-2" />
                Call Supplier
              </button>
              <button className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Details</h2>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.tags.map((tag, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 