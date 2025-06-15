'use client';

import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { openGoogleMaps } from '@/utils/maps';
import { useState } from 'react';
import { sendEmail } from '@/utils/email';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Your message has been sent successfully! We will get back to you soon.'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const phoneNumbers = [
    '+91 82628 63454', // Primary number
    '+91 92167 85124',
    '+91 86278 20075'
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Company Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-800 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone Numbers</h3>
                    <div className="space-y-1">
                      {phoneNumbers.map((number, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <a 
                            href={`tel:${number.replace(/\s+/g, '')}`}
                            className="text-gray-600 hover:text-blue-800 transition-colors"
                          >
                            {number}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-800 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:hhh.traders@gmail.com"
                      className="text-gray-600 hover:text-blue-800 transition-colors"
                    >
                      hhh.traders@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-800 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Locations</h3>
                    <p 
                      className="text-gray-600 mb-3 cursor-pointer hover:text-blue-800 transition-colors"
                      onClick={() => openGoogleMaps("Plot No.2, Om Sai Complex, Sai Road, Baddi, Distt. Solan, H.P. 173205")}
                    >
                      Plot No.2, Om Sai Complex, Sai Road, Baddi, Distt. Solan, H.P. 173205
                    </p>
                    <p 
                      className="text-gray-600 cursor-pointer hover:text-blue-800 transition-colors"
                      onClick={() => openGoogleMaps("Vill. Rangri, Opp. H.P Petrol Pump, Manali, Distt. Kullu, H.P. 175131")}
                    >
                      Vill. Rangri, Opp. H.P Petrol Pump, Manali, Distt. Kullu, H.P. 175131
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embeds */}
            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d709.1978915639534!2d76.81246595246813!3d30.95179272890013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDU3JzA2LjYiTiA3NsKwNDgnNDguMCJF!5e0!3m2!1sen!2sin!4v1749983878671!5m2!1sen!2sin&zoom=15&maptype=roadmap&controls=zoom"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HHH Traders Location"
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              <div className="text-center text-sm text-gray-600">
                <p>Click on the map to view in full screen</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {status.type && (
                <div className={`p-4 rounded-md ${
                  status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {status.message}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
} 