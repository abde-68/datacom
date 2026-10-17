# DATACOM - Site vitrine

Site vitrine de **DATACOM SASU**, specialisee en **electricite generale** et **fibre optique** (particuliers et professionnels).

Construit avec **Astro + TypeScript + Tailwind CSS** (site statique, rapide et optimise SEO).

## Prerequis

- Node.js 20+
- npm

## Installation

```bash
npm install
```

## Voir le site en temps reel (apercu local, non public)

```bash
npm run dev
```

Puis ouvrez **http://localhost:4321**. Chaque modification se recharge automatiquement.

## Autres commandes

```bash
npm run build      # genere le site dans dist/
npm run preview    # previsualise le build de production
npm run check      # verification TypeScript / Astro
npm run lint       # lint du code
npm run test       # tests unitaires (Vitest)
npm run test:e2e   # tests navigateur (Playwright)
```

## Structure

```
src/
  components/   Header, Footer, cartes, bouton d'appel, placeholders
  data/         site.ts (coordonnees), services.ts (prestations)
  layouts/      BaseLayout (SEO, Open Graph, Schema.org)
  pages/        index, electricite-generale, fibre-optique, a-propos,
                realisations, faq, contact, mentions-legales,
                politique-de-confidentialite, 404
  styles/       global.css (Tailwind + composants)
public/         logo, favicon, robots.txt
```

## A completer avant mise en ligne

Les valeurs provisoires sont marquees `[A COMPLETER]` :

- **src/data/site.ts** : telephone, email, adresse, horaires, SIRET, responsable de publication, hebergeur, **villes reelles d'intervention**, liens Google Business et avis.
- **astro.config.mjs** : remplacez `site` par votre domaine definitif.
- **public/robots.txt** : mettez a jour l'URL du sitemap.
- **Photos** : remplacez les emplacements `PHOTO A REMPLACER` par vos images reelles et autorisees.
- **Avis clients** : a ajouter manuellement.

> Ne jamais inventer de ville, d'avis, de note, de certification ou d'anciennete.

## Formulaire de devis

Le formulaire (`src/pages/contact.astro`) valide les champs cote client et contient une protection anti-spam (honeypot).
Pour l'envoi reel des emails, branchez une fonction serveur avec un service d'envoi (ex. Resend) et Cloudflare Turnstile.
Les cles privees se placent dans les variables d'environnement (voir `.env.example`), jamais dans le code.

## Deploiement

- **GitLab Pages** : le fichier `.gitlab-ci.yml` publie automatiquement le site depuis la branche `main`.
- **Vercel** : importez le depot, framework detecte = Astro, commande de build `npm run build`, dossier de sortie `dist`.

> Aucune mise en production sans validation. Testez d'abord en local avec `npm run dev`.
