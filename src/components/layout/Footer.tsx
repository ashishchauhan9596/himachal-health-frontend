'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { openGoogleMaps } from '@/utils/maps';

export default function Footer() {
  const phoneNumbers = [
    '+91 82628 63454', // Primary number
    '+91 92167 85124',
    '+91 86278 20075'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Himachal Health and Hygiene Traders
            </h3>
            <p className="text-sm">
              Leading wholesale supplier of industrial cleaning and hygiene products in Himachal Pradesh
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Phone className="h-5 w-5 mr-2" /> Phone Numbers
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col space-y-3">
                {phoneNumbers.map((number, index) => (
                  <div key={index} className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <Link 
                      href={`tel:${number.replace(/\s+/g, '')}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {number}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <Link 
                  href="mailto:hhh.traders@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  hhh.traders@gmail.com
                </Link>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Locations</h3>
            <div className="space-y-4">
              <div 
                className="flex items-start cursor-pointer hover:text-white transition-colors"
                onClick={() => openGoogleMaps("Plot No.2, Om Sai Complex, Sai Road, Baddi, Distt. Solan, H.P. 173205")}
              >
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <p className="text-sm">
                  Plot No.2, Om Sai Complex, Sai Road, Baddi, Distt. Solan, H.P. 173205
                </p>
              </div>
              <div 
                className="flex items-start cursor-pointer hover:text-white transition-colors"
                onClick={() => openGoogleMaps("Vill. Rangri, Opp. H.P Petrol Pump, Manali, Distt. Kullu, H.P. 175131")}
              >
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <p className="text-sm">
                  Vill. Rangri, Opp. H.P Petrol Pump, Manali, Distt. Kullu, H.P. 175131
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-sm">
            <p>© 2024 Himachal Health and Hygiene Traders. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 