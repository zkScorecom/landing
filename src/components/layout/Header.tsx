import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export function Header() {
  // Marketing site header - always show basic navigation
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
            </div>
              <span className="text-xl font-bold text-gray-900">Anylayer</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/docs" className="text-gray-600 hover:text-gray-900 font-medium">
              Documentation
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-gray-900 font-medium">
              News
            </Link>
            <Link href="/builder" className="text-gray-600 hover:text-gray-900 font-medium">
              Builder
            </Link>
          </nav>

          {/* Launch App Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://app.anylayer.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


