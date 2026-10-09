// ============================================================
// Donnees centralisees du site DATACOM
// Les champs marques [A COMPLETER] sont provisoires : a remplir
// avec les informations reelles de l'entreprise avant mise en ligne.
// NE JAMAIS inventer de ville, avis, note, certification ou anciennete.
// ============================================================

export const site = {
  nomCommercial: 'DATACOM',
  nomLegal: 'DATACOM SASU',
  slogan: '', // aucun slogan demande
  // Coordonnees - [A COMPLETER]
  telephone: '[TELEPHONE A COMPLETER]',
  telephoneLien: '', // ex: +33600000000 (format E.164) pour le bouton Appeler
  email: '[EMAIL A COMPLETER]',
  adresse: '[ADRESSE A COMPLETER]',
  horaires: '[HORAIRES A COMPLETER]',
  siret: '[SIRET A COMPLETER]',
  responsablePublication: '[RESPONSABLE DE PUBLICATION A COMPLETER]',
  hebergeur: '[HEBERGEUR A COMPLETER]',
  // Zone d'intervention - villes reelles [A COMPLETER], ne rien inventer
  villes: [] as string[],
  zoneTexte: '[ZONE D INTERVENTION A COMPLETER]',
  // Google
  googleBusinessUrl: '', // [A COMPLETER]
  googleAvisUrl: '',     // [A COMPLETER]
  // Reseaux sociaux [A COMPLETER]
  reseaux: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },
};

export const nav = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Nos services',
    href: '#',
    children: [
      { label: 'Electricite generale', href: '/electricite-generale' },
      { label: 'Fibre optique', href: '/fibre-optique' },
    ],
  },
  { label: 'A propos', href: '/a-propos' },
  { label: 'Realisations', href: '/realisations' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];
