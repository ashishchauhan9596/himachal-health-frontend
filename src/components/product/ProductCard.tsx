'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, Phone, X } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);
  const phoneNumbers = [
    '+91 92167 85124',
    '+91 82628 63454',
    '+91 86278 20075'
  ];

  return (
    <>
      <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <Link href={`/product/${product.id}`}>
          <div className="relative aspect-[3/4]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
        <div className="p-4">
          <Link href={`/product/${product.id}`}>
            <h3 className="text-lg font-semibold text-gray-900 hover:text-green-700 mb-2 line-clamp-2">
              {product.name}
            </h3>
          </Link>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium">MOQ:</span>
              <span className="ml-2">{product.moq}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium">Lead Time:</span>
              <span className="ml-2">{product.leadTime}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium">Location:</span>
              <span className="ml-2">{product.location}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Link 
              href="/contact"
              className="flex-1 bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-green-800"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Send Inquiry
            </Link>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
            >
              <Phone className="h-5 w-5" />
            </button>
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
                  className="block w-full text-center py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  {number}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 