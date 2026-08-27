import type {
  ComparisonRow,
  DeploymentMode,
  FaqItem,
  Founder,
  IndustryTab,
  NavLink,
  ProblemCard,
  ProcessPhase,
  ServiceCard,
  Stat,
  Tuple2,
  Tuple3,
  Tuple4,
} from './types'

/**
 * SOURCE OF TRUTH. Français québécois — rédigé, pas traduit.
 * Toute clé ajoutée ici doit être ajoutée à en.ts, sinon la compilation échoue.
 */
export const fr = {
  meta: {
    title: 'OnPremia — L’IA déployée dans votre périmètre',
    description:
      'OnPremia déploie l’IA et l’automatisation dans le périmètre de votre entreprise : vos serveurs ou votre propre locataire Azure. Québec et Ontario.',
    ogAlt: 'OnPremia — intégration IA et automatisation pour PME',
  },

  nav: {
    links: [
      { href: '#services', label: 'Services' },
      { href: '#comparatif', label: 'Comparatif' },
      { href: '#methode', label: 'Méthode' },
      { href: '#secteurs', label: 'Secteurs' },
      { href: '#faq', label: 'FAQ' },
    ] as readonly NavLink[],
    cta: 'Réserver un appel',
    menuLabel: 'Menu',
    closeLabel: 'Fermer',
    skipToContent: 'Aller au contenu',
  },

  localeToggle: {
    label: 'Langue',
    fr: 'FR',
    en: 'EN',
    switchTo: 'Voir cette page en anglais',
  },

  hero: {
    eyebrow: 'IA & automatisation · Québec et Ontario',
    headline: 'L’IA qui travaille chez vous, pas ailleurs.',
    subhead:
      'Nous déployons l’IA et l’automatisation dans votre périmètre — vos serveurs ou votre propre locataire Azure. Vos documents ne partent pas chez un fournisseur.',
    ctaPrimary: 'Réserver un appel de 30 min',
    ctaSecondary: 'Demander une revue IA',
    chips: [
      'Vos données, votre périmètre',
      'Hébergé au Canada',
      'Prix fixe, portée écrite',
      'Service en français ou en anglais',
    ] as Tuple4<string>,
    // Unsplash : "server rack cabinet technician working"
    imageQuery: 'Un technicien devant une baie de serveurs',
    imageAlt: 'Technicien travaillant devant une baie de serveurs',
  },

  problem: {
    eyebrow: 'Le blocage',
    title: 'Ce qui empêche les PME d’avancer sur l’IA.',
    lead: 'Ce n’est pas le manque d’outils. C’est que les outils demandent de sortir vos données de chez vous.',
    cards: [
      {
        title: 'Vos données sortent de vos murs',
        body: 'La plupart des outils d’IA copient vos documents sur les serveurs d’un fournisseur, dans un pays que vous ne choisissez pas.',
      },
      {
        title: 'La Loi 25 devient votre problème',
        body: 'Dès qu’un renseignement personnel quitte votre périmètre, l’obligation de le documenter et de l’encadrer reste la vôtre.',
      },
      {
        title: 'La dépendance au fournisseur',
        body: 'Vos processus finissent enfermés dans une plateforme. Changer de fournisseur devient un projet, pas une décision.',
      },
      {
        title: 'Le travail répétitif continue',
        body: 'Pendant les évaluations, la saisie, le tri de courriels et les relances continuent de gruger des heures chaque semaine.',
      },
    ] as Tuple4<ProblemCard>,
    stat: {
      figure: '13,4 %',
      claim:
        'des entreprises canadiennes citent la cybersécurité ou la confidentialité comme frein à l’utilisation de l’IA.',
      context:
        'Pendant ce temps, l’adoption a triplé depuis 2024 pour atteindre 19,2 %. Le frein n’est pas l’intérêt — c’est l’endroit où vivent les données.',
      source:
        'Statistique Canada, Enquête canadienne sur la situation des entreprises, 2ᵉ trimestre 2026',
      sourceUrl: 'https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2026010-fra.htm',
    } satisfies Stat,
  },

  sovereignty: {
    eyebrow: 'Le principe',
    title: 'Vos données restent dans votre périmètre.',
    lead: 'Vos serveurs ou votre propre locataire Azure. Dans les deux cas : votre infrastructure, vos clés, votre région.',
    body: 'Nous installons le système là où vos données vivent déjà. L’IA vient à vos documents ; vos documents ne vont pas à l’IA. Vous gardez l’accès, les journaux et le contrôle — et vous pouvez tout arrêter sans nous demander la permission.',
    modes: [
      {
        label: 'Sur vos serveurs',
        body: 'Déploiement sur votre matériel, dans vos locaux. Rien ne sort de votre réseau.',
      },
      {
        label: 'Dans votre locataire Azure',
        body: 'Oui, c’est de l’infonuagique — mais la vôtre. Votre abonnement, vos clés, votre région canadienne. Nous n’hébergeons rien.',
      },
    ] as Tuple2<DeploymentMode>,
    points: [
      'Vos documents ne sont jamais copiés chez OnPremia.',
      'Aucun entraînement de modèle sur vos données.',
      'Journaux d’accès et d’activité qui vous appartiennent.',
    ] as Tuple3<string>,
    // Unsplash : "network server room cables"
    imageQuery: 'Salle de serveurs, câblage réseau',
    imageAlt: 'Salle de serveurs et câblage réseau',
  },

  services: {
    eyebrow: 'Ce que nous construisons',
    title: 'Quatre systèmes, un même principe.',
    lead: 'Chaque mandat commence par un processus précis et se termine par quelque chose qui roule en production.',
    outputLabel: 'Ce que vous obtenez',
    bestForLabel: 'Pour qui',
    items: [
      {
        eyebrow: 'Recherche documentaire',
        title: 'RAG sur vos données Microsoft 365',
        body: 'Votre équipe pose une question en français et obtient la réponse tirée de vos propres documents SharePoint, avec la source citée.',
        output: 'Un assistant interrogeable, branché sur vos documents existants.',
        bestFor: 'Les équipes qui cherchent la bonne procédure dans des centaines de fichiers.',
      },
      {
        eyebrow: 'Automatisation',
        title: 'Flux de travail automatisés (n8n)',
        body: 'Les tâches répétitives — intake, tri, relances, rapports — s’exécutent seules, dans vos outils actuels.',
        output: 'Des processus qui roulent sans intervention, avec les exceptions remontées.',
        bestFor: 'Les processus faits à la main chaque semaine, toujours de la même façon.',
      },
      {
        eyebrow: 'Encadrement',
        title: 'Couche de contrôle et politique IA',
        body: 'Un point de passage unique pour tous les modèles utilisés : qui peut faire quoi, avec quelles données, à quel coût.',
        output: 'Des règles d’usage appliquées automatiquement, et une trace de qui a fait quoi.',
        bestFor: 'Les organisations où l’IA s’utilise déjà, sans encadrement.',
      },
      {
        eyebrow: 'Intégrations',
        title: 'Connexions MCP à vos systèmes',
        body: 'Nous relions l’IA à vos systèmes existants — comptabilité, CRM, ERP, bases de données — sans les remplacer.',
        output: 'Vos systèmes actuels, accessibles à l’IA de façon encadrée.',
        bestFor: 'Les entreprises dont l’information est éparpillée entre plusieurs logiciels.',
      },
    ] as Tuple4<ServiceCard>,
  },

  comparison: {
    eyebrow: 'Comparatif',
    title: 'Trois façons d’ajouter l’IA. Une seule garde vos données chez vous.',
    lead: 'Le tableau compare ce qui compte réellement quand un renseignement confidentiel est en jeu.',
    colOnpremia: 'OnPremia',
    colOnpremiaNote: 'Vos serveurs ou votre locataire',
    colSaas: 'Fournisseur SaaS infonuagique',
    colSaasNote: 'Plateforme multi-locataire',
    colDiy: 'À l’interne',
    colDiyNote: 'Votre équipe, sur son temps',
    rows: [
      {
        criterion: 'Où vivent vos données',
        onpremia: 'Votre infrastructure, votre région',
        saas: 'Les serveurs du fournisseur',
        diy: 'Variable, souvent non documenté',
      },
      {
        criterion: 'Qui détient les clés',
        onpremia: 'Vous',
        saas: 'Le fournisseur',
        diy: 'Vous, si quelqu’un s’en occupe',
      },
      {
        criterion: 'Accès du fournisseur à vos documents',
        onpremia: 'Aucun',
        saas: 'Selon les conditions d’utilisation',
        diy: 'Selon les outils branchés',
      },
      {
        criterion: 'Entraînement sur vos données',
        onpremia: 'Jamais',
        saas: 'À vérifier au contrat',
        diy: 'À vérifier par outil',
      },
      {
        criterion: 'Portée Loi 25',
        onpremia: 'Reste dans votre périmètre',
        saas: 'Communication à un tiers à encadrer',
        diy: 'Rarement documentée',
      },
      {
        criterion: 'Si vous arrêtez',
        onpremia: 'Le système reste chez vous',
        saas: 'Accès coupé, données à rapatrier',
        diy: 'Dépend de la personne qui l’a bâti',
      },
      {
        criterion: 'Qui construit',
        onpremia: 'Les ingénieurs fondateurs',
        saas: 'Personne — vous configurez',
        diy: 'Votre équipe, en plus de sa job',
      },
    ] as readonly ComparisonRow[],
  },

  process: {
    eyebrow: 'Notre méthode',
    title: 'On cadre avant de construire.',
    lead: 'Trois phases. Vous pouvez arrêter après la première et repartir avec quelque chose d’utile.',
    phases: [
      {
        step: '01',
        title: 'Audit',
        body: 'Nous analysons un processus réel avec vous et déterminons ce qui peut être automatisé, ce qui ne devrait pas l’être, et où vivent les données.',
        deliverable: 'Un plan priorisé et chiffré, à vous, sans engagement.',
      },
      {
        step: '02',
        title: 'Construction',
        body: 'Nous bâtissons dans votre environnement, autour de vos outils actuels. Vous testez au fur et à mesure, pas à la fin.',
        deliverable: 'Le système en fonction, dans votre périmètre.',
      },
      {
        step: '03',
        title: 'Mise en service',
        body: 'Nous formons votre équipe, documentons le fonctionnement et transférons les accès. Le suivi mensuel est optionnel.',
        deliverable: 'Votre équipe autonome, et la documentation pour le rester.',
      },
    ] as Tuple3<ProcessPhase>,
  },

  industries: {
    eyebrow: 'Secteurs',
    title: 'Reconnaissez-vous votre entreprise ?',
    lead: 'Choisissez votre secteur pour voir ce qui s’automatise en premier.',
    tabs: [
      {
        id: 'manufacturier',
        label: 'Manufacturier',
        quote: '« Nos soumissions, nos bons de commande et notre suivi vivent dans dix endroits différents. »',
        bullets: [
          'Demandes entrantes lues et structurées en devis',
          'Fiches techniques interrogeables en quelques secondes',
          'Rapports de production compilés automatiquement',
        ],
        outcome: 'Des réponses aux clients en minutes, pas en jours.',
      },
      {
        id: 'concessionnaires',
        label: 'Concessionnaires',
        quote: '« On perd des ventes parce que personne ne répond assez vite le soir. »',
        bullets: [
          'Réponse qualifiée à chaque demande web, 24/7',
          'Relances structurées, sans dépendre d’une mémoire',
          'Rendez-vous au service pris automatiquement',
        ],
        outcome: 'Aucune demande sans réponse après 17 h.',
      },
      {
        id: 'comptables',
        label: 'Cabinets comptables',
        quote: '« On réclame des documents plus qu’on ne conseille nos clients. »',
        bullets: [
          'Intake client : courriels et pièces classés au bon dossier',
          'Relance des documents manquants jusqu’à réception',
          'Extraction des données de reçus et de factures',
        ],
        outcome: 'La saison des impôts sans les soirées.',
      },
      {
        id: 'cliniques',
        label: 'Cliniques',
        quote: '« La réception passe ses journées au téléphone, et on rate quand même des appels. »',
        bullets: [
          'Rendez-vous, confirmations et rappels automatisés',
          'Demandes patients triées vers la bonne personne',
          'Formulaires d’accueil préparés avant la visite',
        ],
        outcome: 'Moins d’absences, plus de temps clinique.',
      },
    ] as Tuple4<IndustryTab>,
    dataNote:
      'En santé et en droit, la question du périmètre n’est pas théorique. C’est exactement pourquoi nous déployons chez vous.',
  },

  founders: {
    eyebrow: 'L’équipe',
    title: 'Vous parlez aux ingénieurs qui construisent.',
    lead: 'Pas de vendeur, pas de junior délégué. Les fondateurs conçoivent, déploient et maintiennent eux-mêmes.',
    members: [
      {
        name: 'Giovani Tchibozo',
        role: 'Cofondateur',
        focus: 'Architecture et infrastructure',
        linkedIn: null,
        photo: null,
      },
      {
        name: 'Saleck Yessoufou',
        role: 'Cofondateur',
        focus: 'Automatisation et flux de travail',
        linkedIn: null,
        photo: null,
      },
      {
        name: 'Lazard Houesse',
        role: 'Cofondateur',
        focus: 'Back-end et intégrations',
        linkedIn: null,
        photo: null,
      },
      // Le brief mentionne quatre cofondateurs; seuls trois noms sont connus.
      // Ajouter le quatrième ici — la grille s'ajuste automatiquement.
    ] as readonly Founder[],
  },

  proof: {
    eyebrow: 'Réalisations',
    title: 'Des systèmes en production.',
    lead: 'Nous ne publions pas d’étude de cas sans l’accord écrit du client.',
    /* Études de cas à venir — pour chacune : client, problème, ce qui a été bâti,
       un résultat mesuré, et l’autorisation écrite d’être nommé. */
    placeholderNote:
      'Plutôt que d’afficher des logos et des chiffres invérifiables, nous vous mettons en contact avec des clients qui peuvent parler du travail directement. Demandez-nous des références lors de l’appel.',
    askCta: 'Demander des références',
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Ce qu’on nous demande avant de signer.',
    items: [
      {
        q: 'Est-ce que c’est de l’infonuagique ?',
        a: 'Ça dépend du déploiement. Sur vos serveurs, non — rien ne quitte votre réseau. Dans votre locataire Azure, oui, c’est de l’infonuagique : mais c’est votre abonnement, vos clés et votre région. OnPremia n’héberge pas vos données et n’y a pas accès en dehors du mandat.',
      },
      {
        q: 'Où sont hébergées nos données ?',
        a: 'Dans l’infrastructure que vous possédez déjà. Pour un déploiement Azure, dans la région canadienne de votre choix. Nous confirmons la région par écrit avant la construction.',
      },
      {
        q: 'Comment ça se place par rapport à la Loi 25 ?',
        a: 'Garder les renseignements dans votre périmètre réduit le nombre de communications à un tiers que vous devez encadrer et documenter. Ce n’est pas un avis juridique et nous n’en donnons pas : nous documentons où vivent les données et qui y accède, pour que votre responsable de la protection des renseignements personnels puisse faire son travail.',
      },
      {
        q: 'Est-ce que vous entraînez des modèles sur nos données ?',
        a: 'Non. Vos documents servent à répondre à vos questions, jamais à entraîner un modèle. C’est écrit au contrat.',
      },
      {
        q: 'Combien ça coûte ?',
        a: 'L’audit est l’étape d’entrée et donne un prix fixe pour la suite, établi selon la portée réelle. Nous ne facturons pas à l’heure pour la construction : la portée et le prix sont écrits avant de commencer.',
      },
      {
        q: 'Qu’est-ce qui arrive si on arrête ?',
        a: 'Le système est dans votre infrastructure : il continue de fonctionner. Nous transférons les accès et la documentation. Il n’y a pas de plateforme à quitter.',
      },
      {
        q: 'Est-ce que ça fonctionne en français ?',
        a: 'Oui, et c’est la langue par défaut de nos déploiements. Les interfaces destinées à vos clients sont livrées en français, en anglais, ou les deux.',
      },
      {
        q: 'Combien de temps avant que ça roule ?',
        a: 'L’audit prend de deux à trois semaines selon vos disponibilités. La durée de construction dépend de la portée et vous est donnée par écrit avant de commencer.',
      },
    ] as readonly FaqItem[],
  },

  contact: {
    eyebrow: 'Prochaine étape',
    title: 'Trente minutes. Vous repartez avec un plan.',
    lead: 'Nous regardons un de vos processus et vous montrons ce qui peut être automatisé — et ce qui ne devrait pas l’être. Utile même si nous ne travaillons jamais ensemble.',
    ctaPrimary: 'Réserver un appel',
    ctaSecondary: 'Écrire un message',
    micro: 'Réponse sous 24 h · Français ou anglais · Québec et Ontario',
    form: {
      title: 'Parlez-nous de votre situation',
      description: 'Trois champs. On vous répond sous 24 h.',
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
    tagline: 'IA et automatisation déployées dans votre périmètre.',
    region: 'Québec et Ontario',
    rights: 'Tous droits réservés.',
    legalNote:
      'Les mentions relatives à la Loi 25 décrivent notre modèle de déploiement et ne constituent pas un avis juridique.',
    nav: 'Navigation',
    contactHeading: 'Contact',
  },
}
