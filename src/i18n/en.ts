import type {
  ComparisonRow,
  DeploymentMode,
  Dictionary,
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
 * Typed as `Dictionary` (derived from fr.ts). A missing or renamed key
 * fails the build instead of falling back silently at runtime.
 */
export const en: Dictionary = {
  meta: {
    title: 'OnPremia — AI deployed inside your perimeter',
    description:
      'OnPremia deploys AI and automation inside your perimeter: your own servers or your own Azure tenant. Quebec and Ontario.',
    ogAlt: 'OnPremia — AI integration and automation for SMBs',
  },

  nav: {
    links: [
      { href: '#services', label: 'Services' },
      { href: '#comparatif', label: 'Compare' },
      { href: '#methode', label: 'Method' },
      { href: '#secteurs', label: 'Industries' },
      { href: '#faq', label: 'FAQ' },
    ] as readonly NavLink[],
    cta: 'Book a call',
    menuLabel: 'Menu',
    closeLabel: 'Close',
    skipToContent: 'Skip to content',
  },

  localeToggle: {
    label: 'Language',
    fr: 'FR',
    en: 'EN',
    switchTo: 'View this page in French',
  },

  hero: {
    eyebrow: 'AI & automation · Quebec and Ontario',
    headline: 'AI that works on your side of the firewall.',
    subhead:
      'We deploy AI and automation inside your perimeter — your own servers or your own Azure tenant. Your documents don’t go to a vendor.',
    ctaPrimary: 'Book a 30-minute call',
    ctaSecondary: 'Request an AI review',
    chips: [
      'Your data, your perimeter',
      'Hosted in Canada',
      'Fixed price, written scope',
      'Delivered in French or English',
    ] as Tuple4<string>,
    // Unsplash: "server rack cabinet technician working"
    imageQuery: 'A technician at a server rack',
    imageAlt: 'Technician working at a server rack',
  },

  problem: {
    eyebrow: 'The blocker',
    title: 'Why SMBs stall on AI.',
    lead: 'It isn’t a shortage of tools. It’s that every tool asks you to send your data somewhere else.',
    cards: [
      {
        title: 'Your data leaves your walls',
        body: 'Most AI tools copy your documents onto a vendor’s servers, in a country you don’t get to choose.',
      },
      {
        title: 'Law 25 becomes your problem',
        body: 'The moment personal information leaves your perimeter, the duty to document and govern it is still yours.',
      },
      {
        title: 'Vendor lock-in',
        body: 'Your processes end up trapped inside a platform. Switching vendors becomes a project rather than a decision.',
      },
      {
        title: 'The busywork continues',
        body: 'While you evaluate, data entry, email triage and follow-ups keep eating hours every single week.',
      },
    ] as Tuple4<ProblemCard>,
    stat: {
      figure: '13.4%',
      claim: 'of Canadian businesses cite cybersecurity or privacy as a barrier to using AI.',
      context:
        'Meanwhile adoption has tripled since 2024, reaching 19.2%. The blocker isn’t interest — it’s where the data has to go.',
      source: 'Statistics Canada, Canadian Survey on Business Conditions, Q2 2026',
      sourceUrl: 'https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2026010-eng.htm',
    } satisfies Stat,
  },

  sovereignty: {
    eyebrow: 'The principle',
    title: 'Your data stays inside your perimeter.',
    lead: 'Your own servers, or your own Azure tenant. Either way: your infrastructure, your keys, your region.',
    body: 'We install the system where your data already lives. The AI comes to your documents; your documents don’t go to the AI. You keep the access, the logs and the control — and you can shut it down without asking us.',
    modes: [
      {
        label: 'On your own servers',
        body: 'Deployed on your hardware, on your premises. Nothing leaves your network.',
      },
      {
        label: 'In your own Azure tenant',
        body: 'Yes, this is cloud — but it’s yours. Your subscription, your keys, your Canadian region. We host nothing.',
      },
    ] as Tuple2<DeploymentMode>,
    points: [
      'Your documents are never copied to OnPremia.',
      'No model training on your data.',
      'Access and activity logs that belong to you.',
    ] as Tuple3<string>,
    // Unsplash: "network server room cables"
    imageQuery: 'Server room, network cabling',
    imageAlt: 'Server room and network cabling',
  },

  services: {
    eyebrow: 'What we build',
    title: 'Four systems, one principle.',
    lead: 'Every engagement starts with one specific process and ends with something running in production.',
    outputLabel: 'What you get',
    bestForLabel: 'Best for',
    items: [
      {
        eyebrow: 'Document search',
        title: 'RAG over your Microsoft 365 data',
        body: 'Your team asks a question in plain language and gets an answer drawn from your own SharePoint documents, with the source cited.',
        output: 'A searchable assistant wired to the documents you already have.',
        bestFor: 'Teams hunting for the right procedure across hundreds of files.',
      },
      {
        eyebrow: 'Automation',
        title: 'Workflow automation (n8n)',
        body: 'Repetitive work — intake, triage, follow-ups, reporting — runs itself, inside the tools you already use.',
        output: 'Processes that run unattended, with exceptions escalated to a human.',
        bestFor: 'Anything done by hand every week, the same way each time.',
      },
      {
        eyebrow: 'Governance',
        title: 'AI policy & control layer',
        body: 'One checkpoint for every model in use: who can do what, with which data, at what cost.',
        output: 'Usage rules enforced automatically, plus a record of who did what.',
        bestFor: 'Organizations where AI is already in use, without oversight.',
      },
      {
        eyebrow: 'Integrations',
        title: 'MCP connections to your systems',
        body: 'We connect AI to the systems you already run — accounting, CRM, ERP, databases — without replacing them.',
        output: 'Your current systems, reachable by AI within defined limits.',
        bestFor: 'Businesses whose information is scattered across several tools.',
      },
    ] as Tuple4<ServiceCard>,
  },

  comparison: {
    eyebrow: 'Compare',
    title: 'Three ways to add AI. One keeps your data at home.',
    lead: 'This compares what actually matters once confidential information is involved.',
    colOnpremia: 'OnPremia',
    colOnpremiaNote: 'Your servers or your tenant',
    colSaas: 'Cloud SaaS AI vendor',
    colSaasNote: 'Multi-tenant platform',
    colDiy: 'Do it yourself',
    colDiyNote: 'Your team, in their spare time',
    rows: [
      {
        criterion: 'Where your data lives',
        onpremia: 'Your infrastructure, your region',
        saas: 'The vendor’s servers',
        diy: 'Varies, often undocumented',
      },
      {
        criterion: 'Who holds the keys',
        onpremia: 'You',
        saas: 'The vendor',
        diy: 'You, if someone maintains them',
      },
      {
        criterion: 'Vendor access to your documents',
        onpremia: 'None',
        saas: 'Per their terms of service',
        diy: 'Depends what got connected',
      },
      {
        criterion: 'Training on your data',
        onpremia: 'Never',
        saas: 'Check the contract',
        diy: 'Check each tool',
      },
      {
        criterion: 'Law 25 exposure',
        onpremia: 'Stays inside your perimeter',
        saas: 'Third-party disclosure to govern',
        diy: 'Rarely documented',
      },
      {
        criterion: 'If you walk away',
        onpremia: 'The system stays with you',
        saas: 'Access cut, data to retrieve',
        diy: 'Depends who built it',
      },
      {
        criterion: 'Who builds it',
        onpremia: 'The founding engineers',
        saas: 'Nobody — you configure it',
        diy: 'Your team, on top of their job',
      },
    ] as readonly ComparisonRow[],
  },

  process: {
    eyebrow: 'Our method',
    title: 'We scope before we build.',
    lead: 'Three phases. You can stop after the first and still walk away with something useful.',
    phases: [
      {
        step: '01',
        title: 'Audit',
        body: 'We walk through one real process with you and determine what can be automated, what shouldn’t be, and where the data lives.',
        deliverable: 'A prioritized, costed plan — yours, with no commitment.',
      },
      {
        step: '02',
        title: 'Build',
        body: 'We build inside your environment, around the tools you already run. You test as we go, not at the end.',
        deliverable: 'The system running, inside your perimeter.',
      },
      {
        step: '03',
        title: 'Launch',
        body: 'We train your team, document how it works and hand over the access. Monthly support is optional.',
        deliverable: 'Your team self-sufficient, with the documentation to stay that way.',
      },
    ] as Tuple3<ProcessPhase>,
  },

  industries: {
    eyebrow: 'Industries',
    title: 'Recognize your business?',
    lead: 'Pick your sector to see what gets automated first.',
    tabs: [
      {
        id: 'manufacturier',
        label: 'Manufacturing',
        quote: '“Our quotes, purchase orders and tracking live in ten different places.”',
        bullets: [
          'Incoming requests read and structured into quotes',
          'Technical sheets searchable in seconds',
          'Production reports compiled automatically',
        ],
        outcome: 'Customer answers in minutes, not days.',
      },
      {
        id: 'concessionnaires',
        label: 'Dealerships',
        quote: '“We lose sales because nobody answers fast enough in the evening.”',
        bullets: [
          'A qualified reply to every web enquiry, 24/7',
          'Structured follow-ups that don’t rely on memory',
          'Service appointments booked automatically',
        ],
        outcome: 'No enquiry left unanswered after 5 p.m.',
      },
      {
        id: 'comptables',
        label: 'Accounting firms',
        quote: '“We chase documents more than we advise our clients.”',
        bullets: [
          'Client intake: email and files routed to the right file',
          'Missing-document chasing until everything lands',
          'Data extraction from receipts and invoices',
        ],
        outcome: 'Tax season without the evenings.',
      },
      {
        id: 'cliniques',
        label: 'Clinics',
        quote: '“Reception is on the phone all day, and we still miss calls.”',
        bullets: [
          'Booking, confirmations and reminders automated',
          'Patient enquiries routed to the right person',
          'Intake forms prepared before the visit',
        ],
        outcome: 'Fewer no-shows, more clinical time.',
      },
    ] as Tuple4<IndustryTab>,
    dataNote:
      'In healthcare and legal, the perimeter question isn’t theoretical. That’s exactly why we deploy on your side of it.',
  },

  founders: {
    eyebrow: 'The team',
    title: 'You talk to the engineers who build it.',
    lead: 'No sales layer, no junior handoff. The founders design, deploy and maintain the work themselves.',
    members: [
      {
        name: 'Giovani Tchibozo',
        role: 'Co-founder',
        focus: 'Architecture and infrastructure',
        linkedIn: null,
        photo: null,
      },
      {
        name: 'Saleck Yessoufou',
        role: 'Co-founder',
        focus: 'Automation and workflows',
        linkedIn: null,
        photo: null,
      },
      {
        name: 'Lazard Houesse',
        role: 'Co-founder',
        focus: 'Back-end and integrations',
        linkedIn: null,
        photo: null,
      },
      // The brief names four co-founders; only three names are known.
      // Add the fourth here — the grid adjusts automatically.
    ] as readonly Founder[],
  },

  proof: {
    eyebrow: 'Work',
    title: 'Systems in production.',
    lead: 'We don’t publish a case study without the client’s written approval.',
    placeholderNote:
      'Rather than show logos and unverifiable numbers, we’ll put you in touch with clients who can speak to the work directly. Ask us for references on the call.',
    askCta: 'Ask for references',
  },

  faq: {
    eyebrow: 'Common questions',
    title: 'What people ask before signing.',
    items: [
      {
        q: 'Is this cloud?',
        a: 'It depends on the deployment. On your own servers, no — nothing leaves your network. In your own Azure tenant, yes, it is cloud: but it’s your subscription, your keys and your region. OnPremia doesn’t host your data and has no standing access to it outside the engagement.',
      },
      {
        q: 'Where is our data hosted?',
        a: 'In infrastructure you already own. For an Azure deployment, in the Canadian region you choose. We confirm the region in writing before we build.',
      },
      {
        q: 'How does this sit with Law 25?',
        a: 'Keeping personal information inside your perimeter reduces the number of third-party disclosures you have to govern and document. This is not legal advice and we don’t give any: we document where data lives and who can reach it, so your privacy officer can do their job.',
      },
      {
        q: 'Do you train models on our data?',
        a: 'No. Your documents are used to answer your questions, never to train a model. It’s written into the contract.',
      },
      {
        q: 'What does it cost?',
        a: 'The audit is the entry point and produces a fixed price for the work that follows, based on actual scope. We don’t bill hourly for the build: scope and price are written down before anything starts.',
      },
      {
        q: 'What happens if we stop?',
        a: 'The system is in your infrastructure, so it keeps running. We hand over access and documentation. There’s no platform to leave.',
      },
      {
        q: 'Does it work in French?',
        a: 'Yes, and it’s the default for our deployments. Anything customer-facing ships in French, English, or both.',
      },
      {
        q: 'How long before it’s running?',
        a: 'The audit takes two to three weeks depending on your availability. Build time depends on scope and is given to you in writing before we start.',
      },
    ] as readonly FaqItem[],
  },

  contact: {
    eyebrow: 'Next step',
    title: 'Thirty minutes. You leave with a plan.',
    lead: 'We look at one of your processes and show you what can be automated — and what shouldn’t be. Useful even if we never work together.',
    ctaPrimary: 'Book a call',
    ctaSecondary: 'Send a message',
    micro: 'Reply within 24 h · French or English · Quebec and Ontario',
    form: {
      title: 'Tell us about your situation',
      description: 'Three fields. We reply within 24 hours.',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@company.ca',
      message: 'Where is your team losing time?',
      messagePlaceholder: 'Describe the process in a few lines.',
      submit: 'Send',
      submitting: 'Sending…',
      success: 'Message received. We’ll reply within 24 hours.',
      error: 'Sending failed. Email us directly at bonjour@onpremia.ca.',
      errors: {
        nameRequired: 'Enter your name.',
        emailInvalid: 'Enter a valid email address.',
        messageShort: 'Describe the situation briefly (at least 10 characters).',
      },
    },
  },

  footer: {
    tagline: 'AI and automation deployed inside your perimeter.',
    region: 'Quebec and Ontario',
    rights: 'All rights reserved.',
    legalNote:
      'References to Law 25 describe our deployment model and do not constitute legal advice.',
    nav: 'Navigation',
    contactHeading: 'Contact',
  },
}
