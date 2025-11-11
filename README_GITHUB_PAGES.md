# 📋 Carnet de Compétences – Yohann EKAMBIE SOUAMY

Portfolio professionnel présentant expériences, compétences, engagements et CV d'un ingénieur en cybersécurité et réseaux (ESAIP ING4).

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Créer un repository GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Connectez-vous à votre compte
3. Cliquez sur **"+"** en haut à droite → **"New repository"**
4. Nommez le repository : `portfolio-yohann` (ou le nom que vous préférez)
5. Sélectionnez **"Public"** (pour que le site soit accessible)
6. Cliquez sur **"Create repository"**

### Étape 2 : Préparer les fichiers

1. **Téléchargez tous les fichiers du projet** depuis le Management Dashboard
2. Décompressez l'archive
3. Ouvrez un terminal dans le dossier du projet

### Étape 3 : Initialiser Git et pousser le code

Exécutez ces commandes dans le terminal :

```bash
# Initialiser Git
git init

# Ajouter la branche principale
git branch -M main

# Ajouter l'URL du repository (remplacez USERNAME par votre nom GitHub)
git remote add origin https://github.com/USERNAME/portfolio-yohann.git

# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Initial commit: Portfolio professionnel"

# Pousser le code vers GitHub
git push -u origin main
```

### Étape 4 : Configurer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **"Settings"** (Paramètres)
3. Dans le menu de gauche, sélectionnez **"Pages"**
4. Sous **"Source"**, sélectionnez :
   - **Branch** : `main`
   - **Folder** : `/ (root)`
5. Cliquez sur **"Save"**

### Étape 5 : Attendre le déploiement

GitHub Pages va automatiquement construire et déployer votre site. Cela prend généralement **1-2 minutes**.

Votre portfolio sera accessible à : `https://USERNAME.github.io/portfolio-yohann`

(Remplacez `USERNAME` par votre nom d'utilisateur GitHub)

---

## 📁 Structure du Projet

```
portfolio-yohann/
├── client/
│   ├── public/              # Assets statiques
│   ├── src/
│   │   ├── pages/           # Pages du portfolio
│   │   │   ├── Home.tsx
│   │   │   ├── Experiences.tsx
│   │   │   ├── Competences.tsx
│   │   │   ├── Engagements.tsx
│   │   │   └── CV.tsx
│   │   ├── App.tsx          # Routeur principal
│   │   └── index.css        # Styles globaux
│   └── index.html
├── package.json
└── README.md
```

---

## 🎨 Personnalisation

### Modifier les informations personnelles

Éditer les fichiers suivants :

- **Home.tsx** : Présentation générale
- **Experiences.tsx** : Vos expériences professionnelles
- **Competences.tsx** : Vos compétences
- **Engagements.tsx** : Vos engagements
- **CV.tsx** : Informations de contact

### Ajouter votre CV en PDF

1. Placez votre fichier PDF dans `client/public/`
2. Nommez-le : `CV_Yohann_EKAMBIE_SOUAMY.pdf`
3. Le lien de téléchargement fonctionnera automatiquement

### Modifier les couleurs

Éditez `client/src/index.css` pour personnaliser la palette de couleurs.

---

## 🔧 Commandes Utiles

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

---

## 📞 Support et Maintenance

- **Email** : yohann.ekambie@esaip.org
- **LinkedIn** : [Yohann EKAMBIE SOUAMY](https://www.linkedin.com/in/yohann-ekambie-souamy)
- **GitHub** : [Yohann-Nelu](https://github.com/Yohann-Nelu)

---

## 📄 Licence

© 2025 Yohann EKAMBIE SOUAMY – Tous droits réservés

---

## ✅ Checklist de Déploiement

- [ ] Repository créé sur GitHub
- [ ] Fichiers poussés vers GitHub
- [ ] GitHub Pages activé (Settings → Pages)
- [ ] Site accessible à `https://USERNAME.github.io/portfolio-yohann`
- [ ] CV en PDF ajouté dans `client/public/`
- [ ] Tous les liens fonctionnent correctement
- [ ] Navigation fluide entre les pages

---

**Bon déploiement ! 🚀**
