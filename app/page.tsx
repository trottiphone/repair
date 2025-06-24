import React from 'react'
import Link from 'next/link'
import { Smartphone, Tablet, Laptop, Shield, Clock, MapPin, Phone, Star, Wrench, Home, Award, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section avec animation */}
      <section className="relative bg-gradient-to-br from-blue-900 via-primary-700 to-purple-900 text-white py-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Service de réparation #1 à Montrouge</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
              Réparation à Domicile
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-blue-100 font-light">
              Smartphones • Tablettes • Ordinateurs
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-100/90 leading-relaxed">
              🏠 Intervention rapide à votre domicile dans Montrouge et environs<br/>
              🛡️ Garantie 3 mois sur toutes nos réparations<br/>
              ⚡ Diagnostic gratuit et devis transparent
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:0634122836" 
                className="btn-primary-modern group"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                <span>06.34.12.28.36</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/contact" className="btn-secondary-modern">
                Demander un devis gratuit
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">300+</div>
                <div className="text-sm text-blue-200">Réparations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">48h</div>
                <div className="text-sm text-blue-200">Délai max</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3 mois</div>
                <div className="text-sm text-blue-200">Garantie</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">96%</div>
                <div className="text-sm text-blue-200">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section améliorée */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-4">
              <Wrench className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">NOS EXPERTISES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Services de Réparation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Intervention professionnelle à domicile avec des pièces de qualité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Smartphone Card */}
            <div className="service-card group">
              <div className="service-card-header bg-gradient-to-br from-blue-500 to-blue-600">
                <Smartphone className="h-12 w-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">Smartphones</h3>
                <p className="text-gray-600 mb-6">
                  Réparation complète de votre smartphone avec garantie
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Remplacement d'écran</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Changement de batterie</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Réparation connecteur</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Déblocage réseau</span>
                  </div>
                </div>
                <div className="price-badge">À partir de 39€</div>
              </div>
            </div>

            {/* Tablet Card */}
            <div className="service-card group">
              <div className="service-card-header bg-gradient-to-br from-purple-500 to-purple-600">
                <Tablet className="h-12 w-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">Tablettes</h3>
                <p className="text-gray-600 mb-6">
                  Expertise sur toutes marques de tablettes
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Réparation écran tactile</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Remplacement batterie</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Réinstallation système</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Réparation boutons</span>
                  </div>
                </div>
                <div className="price-badge">À partir de 59€</div>
              </div>
            </div>

            {/* Laptop Card */}
            <div className="service-card group">
              <div className="service-card-header bg-gradient-to-br from-green-500 to-green-600">
                <Laptop className="h-12 w-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">Ordinateurs</h3>
                <p className="text-gray-600 mb-6">
                  Dépannage et réparation informatique
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Remplacement écran LCD</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Changement clavier</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Nettoyage virus</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Optimisation système</span>
                  </div>
                </div>
                <div className="price-badge">À partir de 79€</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section avec design moderne */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi Choisir TROTTI PHONE ?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Une expertise reconnue et un service client exceptionnel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="advantage-card">
              <div className="advantage-icon bg-white/20">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Service à Domicile</h3>
              <p className="text-primary-100">
                Intervention directement chez vous, confort et praticité garantis
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon bg-white/20">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Intervention Rapide</h3>
              <p className="text-primary-100">
                Diagnostic en 15 min, réparation immédiate dans 80% des cas
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon bg-white/20">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Garantie Premium</h3>
              <p className="text-primary-100">
                3 mois de garantie sur toutes les pièces et la main d'œuvre
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon bg-white/20">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expertise Certifiée</h3>
              <p className="text-primary-100">
                Technicien qualifié avec 5+ ans d'expérience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-600 rounded-full px-4 py-2 mb-4">
              <Star className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">TÉMOIGNAGES CLIENTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Service exceptionnel ! Mon iPhone a été réparé en 30 minutes à mon domicile. Très professionnel et prix honnête."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Marie L.</p>
                  <p className="text-sm text-gray-500">Montrouge</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Réparation de ma tablette Samsung parfaite. Le technicien était très sympa et explique bien le problème."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Pierre D.</p>
                  <p className="text-sm text-gray-500">Malakoff</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Mon PC portable ne démarrait plus. Problème résolu en 1h ! Je recommande vivement ce service."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Sophie R.</p>
                  <p className="text-sm text-gray-500">Châtillon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section modernisée */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Besoin d'une Réparation ?
          </h2>
          <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Diagnostic gratuit • Devis transparent • Intervention rapide
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="contact-info-card">
              <Phone className="h-8 w-8 text-primary-400 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Appelez-nous</h3>
              <a href="tel:0634122836" className="text-primary-300 hover:text-white text-xl font-semibold transition-colors">
                06.34.12.28.36
              </a>
              <p className="text-gray-400 text-sm mt-1">Réponse immédiate</p>
            </div>
            
            <div className="contact-info-card">
              <MapPin className="h-8 w-8 text-primary-400 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Zone d'intervention</h3>
              <p className="text-gray-300">Montrouge et communes</p>
              <p className="text-gray-300">limitrophes</p>
              <p className="text-gray-400 text-sm mt-1">Déplacement gratuit</p>
            </div>
            
            <div className="contact-info-card">
              <Clock className="h-8 w-8 text-primary-400 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Disponibilité</h3>
              <p className="text-gray-300">Lun-Sam 11h-19h</p>
              <p className="text-gray-300">Dimanche sur RDV</p>
              <p className="text-gray-400 text-sm mt-1">Urgences acceptées</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0634122836" className="btn-primary-modern">
              <Phone className="h-5 w-5 mr-2" />
              Appeler maintenant
            </a>
            <Link href="/contact" className="btn-secondary-modern">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}