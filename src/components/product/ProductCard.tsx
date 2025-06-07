'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, Phone } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
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
          <button className="flex-1 bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-green-800">
            <MessageSquare className="h-4 w-4 mr-2" />
            Send Inquiry
          </button>
          <Link 
            href={`tel:+919216785124`}
            className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
          >
            <Phone className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
} 