import React from 'react'
import Link from 'next/link'
import { Smartphone, MapPin, Phone, Clock, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="h-8 w-8 text-primary-500" />
              <span className="font-bold text-xl">TROTTI PHONE</span>
            </div>
            <p className="text-gray-300 mb-4">
              Spécialiste de la réparation de smartphones, tablettes et ordinateurs à domicile. 
              Service rapide et professionnel avec garantie 3 mois sur toutes nos interventions.
            </p>
            <div className="flex items-center space-x-2 text-primary-500">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">Garantie 3 mois</span>
            </div>
          </div>

          {/* Informations de contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5" />
                <div>
                  <p>178 AVENUE MARX DORMOY</p>
                  <p>92120 MONTROUGE</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <a href="tel:0634122836" className="hover:text-primary-500 transition-colors">
                  06.34.12.28.36
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary-500 mt-0.5" />
                <div>
                  <p>Lundi au Samedi</p>
                  <p>11h - 19h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Liens légaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <div className="space-y-2">
              <Link href="/mentions-legales" className="block text-gray-300 hover:text-primary-500 transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="block text-gray-300 hover:text-primary-500 transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="block text-gray-300 hover:text-primary-500 transition-colors">
                Conditions générales de vente
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TROTTI PHONE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
} 