# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Positive Performances Web App

## Description
Application web sécurisée construite avec React + Vite.js.  
Permet d’accéder à différents contenus multimédias (vidéos, textes, fichiers) selon le rôle utilisateur : standard, premium ou admin.

## Structure du projet
- **src/components** : Composants réutilisables (SidebarMenu, ContentDisplay, VideoPlayer, ProtectedRoute)
- **src/context** : Gestion des utilisateurs et contenus (AuthContext, ContentContext)
- **src/pages** : Pages principales de l’application
- **public/** : Fichiers statiques (images, favicon)

## Rôles utilisateurs
- `user_standard` : Accès limité (pas de Self Inquiry Tools and Surveys)
- `user_premium` : Accès complet
- `admin` : Gestion complète + Dashboard + Modification de contenus

## Installation
### Prérequis
- Node.js >= 18.x
- npm ou yarn

### Commandes pour installer le projet
```bash
# Cloner le repository
git clone <URL_DU_REPO>
cd positive-performances

# Installer Vite + React
npm create vite@latest . -- --template react
# ou avec yarn
# yarn create vite . --template react

# Installer les dépendances
npm install react-router-dom
npm install axios
npm install @mui/material @emotion/react @emotion/styled 
npm install react-player  
npm install react-icons
npm install sass  

#Lancer le projet par l'invité de commande 
npm run dev

