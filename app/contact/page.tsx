'use client'

import React, { useState } from 'react'
import { MapPin, Phone, Clock, Mail, Send, CheckCircle, Star, Zap } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    appareil: '',
    probleme: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Zap className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">Réponse sous 2h</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Contactez-nous
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Diagnostic gratuit • Intervention rapide • Devis transparent
          </p>
          
          {/* Call to action rapide */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="tel:0634122836" 
              className="btn-primary-modern group"
            >
              <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              <span>06.34.12.28.36</span>
            </a>
            <div className="text-blue-200 text-sm self-center">ou remplissez le formulaire ci-dessous</div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cartes d'informations */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Garanties */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Nos Garanties</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Diagnostic gratuit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Devis transparent</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Garantie 3 mois</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Paiement après réparation</span>
                </div>
              </div>
            </div>

            {/* Contact rapide */}
            <div className="contact-info-modern">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Appelez-nous</h3>
                  <a href="tel:0634122836" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
                    06.34.12.28.36
                  </a>
                  <p className="text-gray-600 text-sm">
                    Réponse immédiate • 7j/7
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Zone d'intervention</h3>
                  <p className="text-gray-600">
                    Montrouge et communes limitrophes
                  </p>
                  <p className="text-green-600 text-sm font-medium">
                    Déplacement gratuit
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Disponibilité</h3>
                  <p className="text-gray-600">
                    Lun-Sam 11h-19h<br/>
                    Dimanche sur RDV
                  </p>
                  <p className="text-purple-600 text-sm font-medium">
                    Urgences acceptées
                  </p>
                </div>
              </div>
            </div>

            {/* Zone d'intervention */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                Villes desservies
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {['Montrouge', 'Malakoff', 'Châtillon', 'Bagneux', 'Arcueil', 'Gentilly', 'Paris 14e', 'Vanves'].map((ville) => (
                  <div key={ville} className="bg-white px-3 py-2 rounded-lg text-center font-medium text-gray-700 shadow-sm">
                    {ville}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire amélioré */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Demander un Devis Gratuit
                </h2>
                <p className="text-gray-600">
                  Remplissez ce formulaire pour recevoir votre devis personnalisé
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Message envoyé !</h3>
                  <p className="text-gray-600">Nous vous recontacterons dans les 2 heures.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="nom" className="form-label">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Votre nom et prénom"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="telephone" className="form-label">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="06 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="appareil" className="form-label">
                      Type d'appareil *
                    </label>
                    <select
                      id="appareil"
                      name="appareil"
                      required
                      value={formData.appareil}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Sélectionnez votre appareil</option>
                      <option value="smartphone">📱 Smartphone</option>
                      <option value="tablette">📟 Tablette</option>
                      <option value="ordinateur">💻 Ordinateur portable</option>
                      <option value="autre">🔧 Autre</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="probleme" className="form-label">
                      Problème rencontré *
                    </label>
                    <input
                      type="text"
                      id="probleme"
                      name="probleme"
                      required
                      value={formData.probleme}
                      onChange={handleChange}
                      placeholder="Ex: Écran cassé, ne s'allume plus, batterie faible..."
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message complémentaire
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                      placeholder="Décrivez plus précisément le problème ou vos questions..."
                    ></textarea>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                      <div className="text-sm text-blue-700">
                        <p className="font-medium mb-1">Engagement qualité :</p>
                        <p>Diagnostic gratuit • Devis sans engagement • Intervention sous 24h • Garantie 3 mois</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-submit-modern w-full group"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    <span>Envoyer ma demande</span>
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    En envoyant ce formulaire, vous acceptez d'être recontacté dans le cadre de votre demande.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Section testimonial rapide */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl italic mb-4">
            "Service exceptionnel ! Réparation de mon iPhone en 30 minutes à domicile. 
            Très professionnel et prix honnête."
          </blockquote>
          <cite className="text-primary-200">- Marie L., Montrouge</cite>
        </div>
      </div>
    </div>
  )
} 