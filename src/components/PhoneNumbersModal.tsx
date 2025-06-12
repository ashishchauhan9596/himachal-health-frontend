import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface PhoneNumbersModalProps {
  open: boolean;
  onClose: () => void;
  phoneNumbers?: string[];
  color?: string; // e.g. 'green' or 'blue' for button color
}

const defaultNumbers = [
  '+91 92167 85124',
  '+91 82628 63454',
  '+91 86278 20075',
];

export default function PhoneNumbersModal({ open, onClose, phoneNumbers = defaultNumbers, color = 'green' }: PhoneNumbersModalProps) {
  if (!open) return null;
  const btnColor = color === 'blue' ? 'bg-blue-800 hover:bg-blue-900' : 'bg-green-600 hover:bg-green-700';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Contact Numbers</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-3">
          {phoneNumbers.map((number, index) => (
            <Link
              key={index}
              href={`tel:${number.replace(/\s+/g, '')}`}
              className={`block w-full text-center py-3 px-4 ${btnColor} text-white rounded-lg transition-colors`}
              onClick={onClose}
            >
              {number}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 