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
    '+91 82628 63454', // Primary number
    '+91 92167 85124',
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
                <div key={index} className="flex items-center space-x-2">
                  <Link
                    href={`tel:${number.replace(/\s+/g, '')}`}
                    className="flex-1 text-center py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {number}
                  </Link>
                  {index === 0 && (
                    <a
                      href={`https://wa.me/${number.replace(/\s+/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 