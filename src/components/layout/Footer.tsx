import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
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
                <div>
                  <p>+91 92167 85124</p>
                  <p>+91 82628 63454</p>
                  <p>+91 86278 20075</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <p>hhh.traders@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Locations</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <p className="text-sm">
                  Plot No.2, Om Sai Complex, Sai Road, Baddi, Distt. Solan, H.P. 173205
                </p>
              </div>
              <div className="flex items-start">
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