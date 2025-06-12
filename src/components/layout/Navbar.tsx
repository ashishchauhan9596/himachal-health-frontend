'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '@headlessui/react';
import { Search, Phone, Menu as MenuIcon, ChevronDown, MessageSquare, User } from 'lucide-react';
import { categories } from '@/data/products';
import PhoneNumbersModal from '../PhoneNumbersModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  return (
    <div className="bg-white shadow-sm">
      {/* Main Navigation */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/hhh-logo.png"
                alt="HHH Traders Logo"
                width={100}
                height={100}
                className="w-auto h-14 object-contain"
                priority
              />
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-3xl mx-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-3 border-2 border-green-700 rounded-lg focus:outline-none focus:border-green-600"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <button className="absolute right-0 top-0 h-full px-6 bg-green-700 text-white rounded-r-lg hover:bg-green-800">
                  Search
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/contact"
                className="flex items-center text-gray-700 hover:text-green-700"
              >
                <MessageSquare className="h-5 w-5 mr-1" />
                <span>Send Inquiry</span>
              </Link>
              <button
                type="button"
                onClick={() => setShowPhoneModal(true)}
                className="flex items-center text-gray-700 hover:text-green-700"
              >
                <Phone className="h-5 w-5 mr-1" />
                <span>Call Now</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 h-14 text-sm">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center text-gray-700 hover:text-green-700">
                <span>All Categories</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Menu.Button>
              <Menu.Items className="absolute z-10 mt-2 w-56 bg-white border shadow-lg rounded-md py-1">
                {categories.map((category) => (
                  <Menu.Item key={category.id}>
                    {({ active }) => (
                      <Link
                        href={`/category/${category.slug}`}
                        className={`${
                          active ? 'bg-gray-50 text-green-700' : 'text-gray-700'
                        } block px-4 py-2 text-sm hover:bg-gray-50`}
                      >
                        {category.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>

            {categories.slice(0, 5).map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="text-gray-700 hover:text-green-700 hidden lg:block"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Search Bar - Mobile */}
            <div className="px-4 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Categories - Mobile */}
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-md"
              >
                {category.name}
              </Link>
            ))}

            {/* Actions - Mobile */}
            <div className="border-t pt-4 pb-3">
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-green-700 hover:bg-gray-50 rounded-md"
              >
                Send Inquiry
              </Link>
              <Link
                href="tel:+919216785124"
                className="block px-3 py-2 text-base font-medium text-green-700 hover:bg-gray-50 rounded-md"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      )}
      <PhoneNumbersModal open={showPhoneModal} onClose={() => setShowPhoneModal(false)} color="green" />
    </div>
  );
} 