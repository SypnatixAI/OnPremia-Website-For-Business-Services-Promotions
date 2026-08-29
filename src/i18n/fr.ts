import type {
  ComparisonRow,
  DeploymentMode,
  FaqItem,
  IndustryBenefit,
  IndustryTab,
  NavLink,
  OutcomeCard,
  ProcessPhase,
  ServiceCard,
  SourcedClaim,
  Stat,
  Tuple2,
  Tuple3,
  Tuple4,
} from './types'

/**
 * SOURCE OF TRUTH. Français québécois — rédigé, pas traduit.
 * Toute clé ajoutée ici doit être ajoutée à en.ts, sinon la compilation échoue.
 *
 * Règles de rédaction :
 * - Une idée par section. Titre de 8 mots maximum, une ligne de sous-titre,
 *   trois puces au maximum. Si une phrase n'exprime pas un bénéfice, elle saute.
 * - Voix affirmée. On prend position, on ne décrit pas.
 * - Zéro terme technique en surface : jamais RAG, MCP, LLM, plongements,
 *   pipeline, modèle, Graph. On dit le résultat.
 * - La souveraineté se dit « dans votre périmètre », jamais « vos données ne
 *   quittent jamais votre infrastructure » : le locataire Azure est du nuage.
 */
export const fr = {
  /** Signature de marque. Se décline, ne se dilue pas. */
  signature: 'Votre IA. Vos données. Votre périmètre.',

  meta: {
    title: 'OnPremia — Votre IA. Vos données. Votre périmètre.',
    description:
      'L’IA qui reprend le travail administratif, chez vous : vos serveurs ou votre propre locataire Azure. Québec et Ontario.',
  },

  nav: {
    links: [
      { href: '#resultats', label: 'Résultats' },
      { href: '#services', label: 'Services' },
      { href: '#demo', label: 'Démo' },
      { href: '#comparatif', label: 'Comparatif' },
      { href: '#secteurs', label: 'Secteurs' },
      { href: '#faq', label: 'FAQ' },
    ] as readonly NavLink[],
    cta: 'Réserver un appel',
    menuLabel: 'Menu',
    skipToContent: 'Aller au contenu',
  },

  localeToggle: {
    label: 'Langue',
    switchTo: 'Voir cette page en anglais',
  },

  themeToggle: {
    label: 'Basculer entre le thème clair et sombre',
  },

  hero: {
    eyebrow: 'IA & automatisation · Québec et Ontario',
    headline: 'Rendez à vos équipes le temps que les tâches répétitives leur volent.',
    subhead: 'Chez vous : vos propres serveurs ou votre locataire Azure.',
    ctaPrimary: 'Réserver un appel de 30 min',
    ctaSecondary: 'Voir la démo',
    chips: [
      'Dans votre Microsoft 365',
      'Conçu pour la Loi 25',
      'Sur vos serveurs ou votre Azure',
      'Bilingue',
    ] as Tuple4<string>,
    // Photo réelle, orientée humain plutôt que matériel. Chargée en priorité :
    // c'est l'élément LCP de la page.
    image: '/assets/hero.jpg',
    imageAlt:
      'Une dirigeante de PME travaillant à son ordinateur portable, près d’une fenêtre',
  },

  problem: {
    eyebrow: 'Le vrai blocage',
    title: 'Ce n’est pas l’IA. C’est où vont vos données.',
    /* Le gros chiffre ouvre la phrase que `claim` termine. */
    stat: {
      value: 77,
      suffix: ' %',
      claim:
        'des employés qui utilisent l’IA y collent des données de l’entreprise — dont 82 % via des comptes personnels que l’entreprise ne voit pas.',
      source: 'LayerX, Enterprise AI & SaaS Data Security Report 2025',
      sourceUrl:
        'https://go.layerxsecurity.com/hubfs/LayerX_Enterprise_AI_and_SaaS_Data_Security_Report.pdf',
    } satisfies Stat,
    support: {
      claim:
        'Le Canada se classe parmi les pays les moins confiants envers l’IA au monde, et les Canadiens veulent avant tout pouvoir empêcher que leurs données personnelles servent à entraîner l’IA.',
      source:
        'KPMG International & University of Melbourne, Trust, Attitudes and Use of Artificial Intelligence: A Global Study 2025',
      sourceUrl:
        'https://kpmg.com/ca/en/media/2025/06/canada-lagging-global-peers-in-ai-trust-and-literacy.html',
    } satisfies SourcedClaim,
  },

  outcomes: {
    eyebrow: 'Ce que vous y gagnez',
    title: 'Quatre gains, tout de suite.',
    lead: 'Pas une démo impressionnante. Des heures récupérées chaque semaine.',
    cards: [
      {
        title: 'Vos soirées',
        body: 'Le travail répétitif se fait sans vous. Le volume monte, pas votre charge.',
      },
      {
        title: 'Zéro oubli',
        body: 'La même règle appliquée à chaque dossier, chaque fois.',
      },
      {
        title: 'Réponses en minutes',
        body: 'Vos clients ont leur réponse aujourd’hui, pas demain.',
      },
      {
        title: 'Vos données, chez vous',
        body: 'Rien ne sort de votre périmètre. Jamais.',
      },
    ] as Tuple4<OutcomeCard>,
  },

  sovereignty: {
    eyebrow: 'Notre conviction',
    title: 'Votre IA. Vos données. Votre périmètre.',
    lead: 'On ne déménage pas vos documents pour vous vendre de l’IA.',
    modes: [
      {
        label: 'Sur vos serveurs',
        body: 'Votre matériel, dans vos murs. Rien ne sort de votre réseau.',
      },
      {
        label: 'Dans votre locataire Azure',
        body: 'Oui, c’est de l’infonuagique — mais la vôtre. Votre abonnement, votre région canadienne.',
      },
    ] as Tuple2<DeploymentMode>,
    points: [
      'Vos documents ne sont jamais copiés chez nous.',
      'On n’entraîne rien sur vos données.',
      'Vous coupez l’accès quand vous voulez.',
    ] as Tuple3<string>,
    // Photo réelle, chargée en lazy — la section est sous la ligne de flottaison.
    image: '/assets/difference-humaine.jpg',
    imageAlt:
      'Un dirigeant assis à la table de son entreprise, ordinateur portable ouvert devant lui',
  },

  services: {
    eyebrow: 'Ce qu’on installe',
    title: 'Quatre systèmes qui travaillent pour vous.',
    lead: 'Un processus précis à la fois. En production, pas en diaporama.',
    items: [
      {
        eyebrow: 'Recherche',
        title: 'Retrouver un document en secondes',
        gain: 'Vos équipes arrêtent de fouiller.',
      },
      {
        eyebrow: 'Automatisation',
        title: 'Des courriels triés tout seuls',
        gain: 'Plus rien ne tombe entre deux chaises.',
      },
      {
        eyebrow: 'Rédaction',
        title: 'Des réponses prêtes à envoyer',
        gain: 'Vous relisez au lieu de rédiger.',
      },
      {
        eyebrow: 'Contrôle',
        title: 'Un seul endroit pour tout encadrer',
        gain: 'Vous savez qui utilise quoi, et à quel coût.',
      },
    ] as Tuple4<ServiceCard>,
  },

  demo: {
    eyebrow: 'Démo',
    title: 'Voir la plateforme en action.',
    lead: 'Trois minutes, sans compte à créer.',
    placeholderLabel: 'Vidéo à venir',
    placeholderNote: 'Un cas réel, de bout en bout.',
    cta: 'Réserver une démo en direct',
  },

  comparison: {
    eyebrow: 'Comparatif',
    title: 'Trois façons d’ajouter l’IA.',
    lead: 'Une seule garde vos données chez vous.',
    colOnpremia: 'OnPremia',
    colOnpremiaNote: 'Sur vos serveurs ou votre Azure',
    /** Étiquette de la colonne mise en valeur. */
    recommendedBadge: 'Vos données chez vous',
    colSaas: 'SaaS IA multi-locataire',
    colSaasNote: 'La plateforme d’un fournisseur',
    colDiy: 'Faire soi-même',
    colDiyNote: 'Votre équipe, en plus de sa job',
    rows: [
      {
        criterion: 'Où vivent vos données',
        onpremia: 'Chez vous',
        saas: 'Chez le fournisseur',
        diy: 'Variable, souvent non documenté',
      },
      {
        criterion: 'Qui détient les clés',
        onpremia: 'Vous',
        saas: 'Le fournisseur',
        diy: 'Vous, si quelqu’un s’en occupe',
      },
      {
        criterion: 'Région',
        onpremia: 'Celle que vous choisissez, au Canada',
        saas: 'Celle du fournisseur',
        diy: 'Celle de chaque outil branché',
      },
      {
        criterion: 'Effort pour vous',
        onpremia: 'On construit, on documente, on forme',
        saas: 'Vous configurez et vous surveillez',
        diy: 'Votre équipe, en plus de sa job',
      },
    ] as readonly ComparisonRow[],
  },

  calculator: {
    eyebrow: 'Estimation',
    title: 'Combien de temps vous récupérez.',
    lead: 'Deux chiffres. Ajustez-les à votre réalité.',
    emailsLabel: 'Courriels traités par semaine',
    adminLabel: 'Heures d’administration par semaine',
    rateLabel: 'Coût horaire moyen chargé',
    weeklyLabel: 'Heures récupérées par semaine',
    yearlyLabel: 'Par année',
    valueLabel: 'Valeur annuelle',
    hoursUnit: 'h',
    assumptions:
      'Hypothèse : 2 minutes économisées par courriel et 30 % du temps administratif automatisé.',
    disclaimer: 'Estimation à valider. C’est justement ce que l’audit mesure.',
    cta: 'Valider avec un audit',
  },

  process: {
    eyebrow: 'Notre méthode',
    title: 'On cadre avant de construire.',
    lead: 'On construit, on documente, on forme. Vous gardez le contrôle.',
    phases: [
      {
        step: '01',
        title: 'Audit',
        body: 'Un vrai processus, chiffré. Vous repartez avec le plan, même si on s’arrête là.',
      },
      {
        step: '02',
        title: 'Construction',
        body: 'On bâtit chez vous, autour de vos outils. Vous testez au fur et à mesure.',
      },
      {
        step: '03',
        title: 'Mise en service',
        body: 'On forme votre équipe et on transfère les accès. Vous n’avez pas besoin de nous.',
      },
    ] as Tuple3<ProcessPhase>,
  },

  industries: {
    eyebrow: 'Secteurs',
    title: 'Reconnaissez-vous votre entreprise ?',
    lead: 'Choisissez votre secteur. Voyez ce qui change en premier.',
    tabs: [
      {
        id: 'manufacturier',
        label: 'Manufacturier',
        quote: '« Nos soumissions vivent dans dix endroits différents. »',
        benefits: [
          {
            label: 'Les demandes de prix deviennent des soumissions',
            gain: 'Elle part le jour même, pas la semaine suivante.',
          },
          {
            label: 'Vos fiches techniques répondent à votre place',
            gain: 'La bonne fiche en secondes, sans fouiller dix dossiers.',
          },
          {
            label: 'Les soumissions sans réponse se relancent seules',
            gain: 'Vous ne perdez plus un contrat par simple oubli.',
          },
          {
            label: 'Vos chiffres de production se rassemblent seuls',
            gain: 'Le rapport est prêt sans que personne le monte à la main.',
          },
        ] as Tuple4<IndustryBenefit>,
        outcome: 'Des réponses aux clients en minutes, pas en jours.',
        image: '/assets/secteur-manufacturier.jpg',
        imageAlt: 'Un soudeur au travail sur un établi d’atelier, gerbe d’étincelles',
      },
      {
        id: 'concessionnaires',
        label: 'Concessionnaires',
        quote: '« On perd des ventes parce que personne ne répond assez vite le soir. »',
        benefits: [
          {
            label: 'Chaque demande web reçoit une vraie réponse',
            gain: 'Même à 21 h, même le samedi.',
          },
          {
            label: 'Un appel manqué reçoit une réponse automatique',
            gain: 'Le client n’a pas le temps d’appeler ailleurs.',
          },
          {
            label: 'Les relances repartent avec le bon contexte',
            gain: 'Aucune vente ne s’arrête faute de suivi.',
          },
          {
            label: 'Les rendez-vous au service se prennent seuls',
            gain: 'Votre comptoir arrête de jouer au standard.',
          },
        ] as Tuple4<IndustryBenefit>,
        outcome: 'Aucune demande sans réponse après 17 h.',
        image: '/assets/secteur-concessionnaires.jpg',
        imageAlt:
          'Un conseiller au comptoir d’un atelier automobile, au téléphone devant son écran',
      },
      {
        id: 'comptables',
        label: 'Cabinets comptables',
        quote: '« On réclame des documents plus qu’on ne conseille nos clients. »',
        benefits: [
          {
            label: 'L’accueil d’un nouveau client se déroule seul',
            gain: 'Documents demandés, reçus, classés — sans vous.',
          },
          {
            label: 'Courriels et pièces atterrissent au bon dossier',
            gain: 'Fini les pièces perdues dans une boîte de réception.',
          },
          {
            label: 'Les documents manquants se réclament seuls',
            gain: 'Jusqu’au dernier reçu, sans avoir l’air d’insister.',
          },
          {
            label: 'Les chiffres des reçus et des factures se saisissent seuls',
            gain: 'Vos heures repassent du côté du conseil.',
          },
        ] as Tuple4<IndustryBenefit>,
        outcome: 'La saison des impôts sans les soirées.',
        image: '/assets/secteur-cabinets-comptables.jpg',
        imageAlt: 'Un comptable à son bureau, prenant des notes à côté de son écran',
      },
      {
        id: 'cliniques',
        label: 'Cliniques',
        quote:
          '« La réception passe ses journées au téléphone, et on rate quand même des appels. »',
        benefits: [
          {
            label: 'Rendez-vous, confirmations et rappels partent seuls',
            gain: 'Moins d’absences, sans un appel de plus.',
          },
          {
            label: 'Un appel manqué est rappelé automatiquement',
            gain: 'Plus un seul patient perdu parce que ça sonnait occupé.',
          },
          {
            label: 'Chaque demande arrive à la bonne personne',
            gain: 'La réception arrête de servir de tour de contrôle.',
          },
          {
            label: 'Les formulaires d’accueil sont remplis avant la visite',
            gain: 'Le rendez-vous commence à l’heure, sur le vrai sujet.',
          },
        ] as Tuple4<IndustryBenefit>,
        outcome: 'Moins d’absences, plus de temps clinique.',
        image: '/assets/secteur-cliniques.jpg',
        imageAlt: 'Une réceptionniste souriante derrière le comptoir d’accueil d’une clinique',
      },
    ] as Tuple4<IndustryTab>,
    dataNote: 'En santé et en droit, le périmètre n’est pas théorique. C’est pourquoi on déploie chez vous.',
  },

  proof: {
    eyebrow: 'Réalisations',
    title: 'Des systèmes en production.',
    lead: 'Pas d’étude de cas sans l’accord écrit du client. Demandez-nous des références.',
    askCta: 'Demander des références',
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Ce qu’on nous demande avant de signer.',
    items: [
      {
        q: 'Est-ce que c’est de l’infonuagique ?',
        a: 'Ça dépend du déploiement. Sur vos serveurs, non. Dans votre locataire Azure, oui — mais c’est votre abonnement, vos clés et votre région. On n’héberge rien.',
      },
      {
        q: 'Où sont hébergées nos données ?',
        a: 'Dans l’infrastructure que vous possédez déjà. En Azure, dans la région canadienne de votre choix, confirmée par écrit.',
      },
      {
        q: 'Comment ça se place par rapport à la Loi 25 ?',
        a: 'Garder les renseignements dans votre périmètre réduit les communications à un tiers à encadrer. Ce n’est pas un avis juridique : on documente où vivent les données et qui y accède.',
      },
      {
        q: 'Est-ce que vous entraînez quoi que ce soit sur nos données ?',
        a: 'Non. Vos documents servent à répondre à vos questions, point. C’est écrit au contrat.',
      },
      {
        q: 'Combien ça coûte ?',
        a: 'L’audit donne un prix fixe pour la suite. Pas de facturation à l’heure pour la construction.',
      },
      {
        q: 'Qu’est-ce qui arrive si on arrête ?',
        a: 'Le système est chez vous : il continue de rouler. On transfère les accès et la documentation.',
      },
    ] as readonly FaqItem[],
  },

  contact: {
    eyebrow: 'Prochaine étape',
    title: 'Rendez à vos équipes le temps que les tâches répétitives leur volent.',
    lead: 'Trente minutes. Vous repartez avec un plan, même si on ne travaille jamais ensemble.',
    ctaPrimary: 'Réserver un appel',
    micro: 'Réponse sous 24 h · Français ou anglais · Québec et Ontario',
    form: {
      title: 'Parlez-nous de votre situation',
      description: 'Trois champs. Réponse sous 24 h.',
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      email: 'Courriel',
      emailPlaceholder: 'vous@entreprise.ca',
      message: 'Où votre équipe perd-elle du temps ?',
      messagePlaceholder: 'Décrivez le processus en quelques lignes.',
      submit: 'Envoyer',
      submitting: 'Envoi en cours…',
      success: 'Message reçu. Nous vous répondons sous 24 h.',
      error: 'L’envoi a échoué. Écrivez-nous directement à bonjour@onpremia.ca.',
      errors: {
        nameRequired: 'Entrez votre nom.',
        emailInvalid: 'Entrez une adresse courriel valide.',
        messageShort: 'Décrivez la situation en quelques mots (au moins 10 caractères).',
      },
    },
  },

  footer: {
    region: 'Québec et Ontario',
    rights: 'Tous droits réservés.',
    legalNote:
      'Les mentions relatives à la Loi 25 décrivent notre modèle de déploiement et ne constituent pas un avis juridique.',
    nav: 'Navigation',
    contactHeading: 'Contact',
  },
}
