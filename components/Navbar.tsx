'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Smartphone, Menu, X, Phone, Clock } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Smartphone className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl text-gray-900">TROTTI PHONE</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>06.34.12.28.36</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Lun-Sam 11h-19h</span>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2 border-t mt-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                  <Phone className="h-4 w-4" />
                  <span>06.34.12.28.36</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Lun-Sam 11h-19h</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 