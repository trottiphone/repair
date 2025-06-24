import React from 'react'
import Link from 'next/link'
import { Smartphone, Tablet, Laptop, Shield, Clock, Phone, Star, Wrench, CheckCircle, ArrowRight, Zap } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-primary-700 to-purple-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Wrench className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Expertise technique garantie</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
              Nos Services
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-blue-100 font-light">
              Réparation Professionnelle à Domicile
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-100/90 leading-relaxed">
              🔧 Intervention rapide dans Montrouge et environs<br/>
              🛡️ Garantie 3 mois sur toutes les réparations<br/>
              ⚡ Diagnostic gratuit et devis transparent
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>

      {/* Services détaillés avec design moderne */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Smartphones */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
                <Smartphone className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">SMARTPHONES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Réparation Smartphones
              </h2>
            </div>

            <div className="service-card group mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Image */}
                <div className="lg:col-span-1 flex justify-center items-center">
                  <div className="relative">
                    <img 
                      src="https://i.ibb.co/kVxLLr6N/Chat-GPT-Image-24-juin-2025-16-47-54.png" 
                      alt="Réparation Smartphone" 
                      className="w-full max-w-sm h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl"></div>
                    <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      À partir de 39€
                    </div>
                  </div>
                </div>
                
                {/* Contenu */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
                        <Wrench className="h-6 w-6 mr-2" />
                        Réparations courantes
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Remplacement d'écran</p>
                            <p className="text-sm text-gray-600">LCD, OLED, tactile - Toutes marques</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Changement de batterie</p>
                            <p className="text-sm text-gray-600">Batteries certifiées avec garantie</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Connecteur de charge</p>
                            <p className="text-sm text-gray-600">Réparation rapide et durable</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Haut-parleur/Micro</p>
                            <p className="text-sm text-gray-600">Audio parfait garanti</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
                        <Star className="h-6 w-6 mr-2" />
                        Marques supportées
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-4 rounded-xl text-center font-bold shadow-lg hover:scale-105 transition-transform">
                          📱 iPhone
                        </div>
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl text-center font-bold shadow-lg hover:scale-105 transition-transform">
                          📱 Samsung
                        </div>
                        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-xl text-center font-bold shadow-lg hover:scale-105 transition-transform">
                          📱 Huawei
                        </div>
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-xl text-center font-bold shadow-lg hover:scale-105 transition-transform">
                          📱 Xiaomi
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                        <div className="flex items-center text-green-700">
                          <Shield className="h-5 w-5 mr-2" />
                          <span className="font-semibold">Garantie 3 mois incluse</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablettes */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-purple-100 text-purple-600 rounded-full px-4 py-2 mb-4">
                <Tablet className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">TABLETTES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Réparation Tablettes
              </h2>
            </div>

            <div className="service-card group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Image */}
                <div className="lg:col-span-1 flex justify-center items-center">
                  <div className="relative">
                    <img 
                      src="https://i.ibb.co/23GgQfxB/Chat-GPT-Image-24-juin-2025-17-17-18.png" 
                      alt="Réparation Tablette" 
                      className="w-full max-w-sm h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
                    <div className="absolute -bottom-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      À partir de 59€
                    </div>
                  </div>
                </div>
                
                {/* Contenu */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
                        <Wrench className="h-6 w-6 mr-2" />
                        Services proposés
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 group hover:bg-purple-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Remplacement écran tactile</p>
                            <p className="text-sm text-gray-600">Toutes tailles et technologies</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-purple-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Changement de batterie</p>
                            <p className="text-sm text-gray-600">Batteries haute capacité</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-purple-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Réparation port de charge</p>
                            <p className="text-sm text-gray-600">USB-C, Lightning, Micro-USB</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-purple-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Réinstallation système</p>
                            <p className="text-sm text-gray-600">iOS, Android, Windows</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-purple-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Réparation boutons et caméras</p>
                            <p className="text-sm text-gray-600">Boutons volume, home, caméras</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
                        <Star className="h-6 w-6 mr-2" />
                        Types de tablettes
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow hover:scale-105 transform duration-200">
                          🍎 iPad (toutes générations)
                        </div>
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow hover:scale-105 transform duration-200">
                          📱 Samsung Galaxy Tab
                        </div>
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow hover:scale-105 transform duration-200">
                          🔥 Huawei MediaPad
                        </div>
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow hover:scale-105 transform duration-200">
                          💻 Lenovo Tab
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-xl">
                        <div className="flex items-center text-purple-700">
                          <Shield className="h-5 w-5 mr-2" />
                          <span className="font-semibold">Garantie 3 mois incluse</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ordinateurs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-green-100 text-green-600 rounded-full px-4 py-2 mb-4">
                <Laptop className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">ORDINATEURS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Réparation Ordinateurs
              </h2>
            </div>

            <div className="service-card group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Image */}
                <div className="lg:col-span-1 flex justify-center items-center">
                  <div className="relative">
                    <img 
                      src="https://i.ibb.co/d0HTgPF9/Chat-GPT-Image-24-juin-2025-17-21-14.png" 
                      alt="Réparation Ordinateur" 
                      className="w-full max-w-sm h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl"></div>
                    <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      À partir de 79€
                    </div>
                  </div>
                </div>
                
                {/* Contenu */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
                        <Wrench className="h-6 w-6 mr-2" />
                        Réparations matérielles
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Remplacement écran LCD/LED</p>
                            <p className="text-sm text-gray-600">Toutes tailles et résolutions</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Changement clavier</p>
                            <p className="text-sm text-gray-600">AZERTY, QWERTY, rétroéclairé</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Connecteur d'alimentation</p>
                            <p className="text-sm text-gray-600">Réparation charge et batterie</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Remplacement ventilateur</p>
                            <p className="text-sm text-gray-600">Refroidissement optimal</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Upgrade RAM/SSD</p>
                            <p className="text-sm text-gray-600">Performance améliorée</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
                        <Star className="h-6 w-6 mr-2" />
                        Services logiciels
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Suppression virus/malwares</p>
                            <p className="text-sm text-gray-600">Nettoyage complet sécurisé</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Optimisation performances</p>
                            <p className="text-sm text-gray-600">Startup et registre optimisés</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Installation Windows/Mac</p>
                            <p className="text-sm text-gray-600">Système propre avec pilotes</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Récupération de données</p>
                            <p className="text-sm text-gray-600">Disques dur endommagés</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-semibold text-gray-800">Configuration réseau</p>
                            <p className="text-sm text-gray-600">WiFi, Ethernet, imprimantes</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                        <div className="flex items-center text-green-700">
                          <Shield className="h-5 w-5 mr-2" />
                          <span className="font-semibold">Garantie 3 mois incluse</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Garantie et Modalités modernisée */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Shield className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Engagement qualité</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Garantie et Modalités
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Notre engagement pour votre satisfaction totale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="advantage-card">
              <div className="advantage-icon bg-white/20">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Garantie 3 Mois</h3>
              <p className="text-primary-100">
                Toutes nos réparations sont garanties 3 mois pièces et main d'œuvre
              </p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon bg-white/20">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Intervention Rapide</h3>
              <p className="text-primary-100">
                Intervention sous 48h, du lundi au samedi de 11h à 19h
              </p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon bg-white/20">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Service à Domicile</h3>
              <p className="text-primary-100">
                Déplacement gratuit dans Montrouge et communes limitrophes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action final */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt pour une Réparation ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactez-nous maintenant pour un diagnostic gratuit
          </p>
          
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