import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TROTTI PHONE - Réparation Smartphone, Tablette & Ordinateur à Domicile',
  description: 'Service de réparation à domicile pour smartphones, tablettes et ordinateurs. Garantie 3 mois. Intervention du lundi au samedi de 11h à 19h dans Montrouge et environs.',
  keywords: ['réparation smartphone', 'réparation tablette', 'réparation ordinateur', 'domicile', 'Montrouge', 'garantie'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 