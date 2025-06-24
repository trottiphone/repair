# TROTTI PHONE - Site Web

Site internet professionnel pour TROTTI PHONE, spécialiste de la réparation de smartphones, tablettes et ordinateurs à domicile.

## 🔧 Services

- **Smartphones** : Réparation d'écran, changement de batterie, connecteurs de charge
- **Tablettes** : Écran tactile, batterie, réinstallation système
- **Ordinateurs** : Réparation matérielle et logicielle

## ✨ Caractéristiques

- ✅ Intervention à domicile uniquement
- ✅ Garantie 3 mois sur toutes les réparations
- ✅ Diagnostic et devis gratuits
- ✅ Intervention sous 24h
- ✅ Zone d'intervention : Montrouge et environs

## 🛠️ Technologies utilisées

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes
- **Vercel** - Hébergement et déploiement

## 📦 Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/site-trottiphone.git
cd site-trottiphone
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🚀 Déploiement sur Vercel

### Méthode automatique (recommandée)

1. Poussez votre code sur GitHub
2. Connectez-vous à [Vercel](https://vercel.com)
3. Importez votre repository GitHub
4. Vercel déploiera automatiquement votre site

### Méthode manuelle

1. Installez Vercel CLI :
```bash
npm i -g vercel
```

2. Déployez :
```bash
vercel
```

## 📁 Structure du projet

```
site-trottiphone/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Page de contact
│   ├── services/
│   │   └── page.tsx          # Page des services
│   ├── mentions-legales/
│   │   └── page.tsx          # Mentions légales
│   ├── politique-confidentialite/
│   │   └── page.tsx          # Politique de confidentialité
│   ├── cgv/
│   │   └── page.tsx          # Conditions générales de vente
│   ├── globals.css           # Styles globaux
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Page d'accueil
├── components/
│   ├── Navbar.tsx            # Navigation
│   └── Footer.tsx            # Pied de page
├── public/                   # Fichiers statiques
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 📞 Contact

**TROTTI PHONE**
- 📍 178 AVENUE MARX DORMOY, 92120 MONTROUGE
- 📱 06.34.12.28.36
- 🕒 Lundi au Samedi : 11h - 19h
- 💻 Intervention à domicile uniquement

## 📄 Pages légales

Le site inclut toutes les pages légales requises :
- Mentions légales
- Politique de confidentialité (conforme RGPD)
- Conditions générales de vente

## 🎨 Personnalisation

### Couleurs

Les couleurs principales peuvent être modifiées dans `tailwind.config.js` :

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
}
```

### Contenu

Pour modifier le contenu, éditez les fichiers correspondants dans le dossier `app/`.

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build l'application pour la production
- `npm run start` - Lance l'application en mode production
- `npm run lint` - Vérifie le code avec ESLint

## 📈 Performance

- ⚡ Next.js App Router pour des performances optimales
- 🎯 Génération statique pour un chargement rapide
- 📱 Design responsive pour tous les appareils
- 🔍 SEO optimisé avec métadonnées appropriées

## 🛡️ Sécurité

- Protection des données personnelles conforme RGPD
- Formulaires sécurisés
- Headers de sécurité configurés

---

*Ce site a été développé pour TROTTI PHONE, votre spécialiste en réparation d'appareils électroniques à domicile.* 