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
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-1" />
                <div className="space-y-1">
                  {phoneNumbers.map((number, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Link 
                        href={`tel:${number.replace(/\s+/g, '')}`}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {number}
                      </Link>
                      {index === 0 && (
                        <a
                          href={`https://wa.me/${number.replace(/\s+/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300"
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
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
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