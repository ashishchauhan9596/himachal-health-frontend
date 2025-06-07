import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Category } from '@/data/products';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48">
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {category.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {category.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {category.productCount} Products
            </span>
            <ChevronRight className="h-5 w-5 text-blue-900" />
          </div>
        </div>
      </div>
    </Link>
  );
} 