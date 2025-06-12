'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, Send, MessageCircle, CheckCircle2, X } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { products } from '@/data/products';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [showModal, setShowModal] = useState(false);
  const phoneNumbers = [
    '+91 92167 85124',
    '+91 82628 63454',
    '+91 86278 20075'
  ];

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
              <Link 
                href="/contact"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Inquiry
              </Link>
              <button 
                onClick={() => setShowModal(true)}
                className="w-full flex items-center justify-center px-6 py-3 border border-blue-800 text-blue-800 rounded-md hover:bg-blue-50"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Supplier
              </button>
              <Link 
                href="https://wa.me/919216785124"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Link>
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

      {/* Phone Numbers Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Contact Numbers</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3">
              {phoneNumbers.map((number, index) => (
                <Link
                  key={index}
                  href={`tel:${number.replace(/\s+/g, '')}`}
                  className="block w-full text-center py-3 px-4 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
                >
                  {number}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
} 