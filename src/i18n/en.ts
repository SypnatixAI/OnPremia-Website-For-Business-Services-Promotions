import type {
  ComparisonRow,
  DeploymentMode,
  Dictionary,
  FaqItem,
  IndustryBenefit,
  IndustryTab,
  NavLink,
  OutcomeCard,
  ProcessPhase,
  ServiceCard,
  ServicePoint,
  SourcedClaim,
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
  signature: 'Your AI. Your data. Your perimeter.',

  meta: {
    title: 'OnPremia — Your AI. Your data. Your perimeter.',
    description:
      'AI that takes over the admin work, at your place: your own servers or your own Azure tenant. Quebec and Ontario.',
  },

  nav: {
    links: [
      { href: '#resultats', label: 'Results' },
      { href: '#services', label: 'Services' },
      { href: '#demo', label: 'Demo' },
      { href: '#comparatif', label: 'Compare' },
      { href: '#secteurs', label: 'Industries' },
      { href: '#faq', label: 'FAQ' },
    ] as readonly NavLink[],
    cta: 'Book a call',
    menuLabel: 'Menu',
    skipToContent: 'Skip to content',
  },

  localeToggle: {
    label: 'Language',
    switchTo: 'View this page in French',
  },

  themeToggle: {
    label: 'Switch between light and dark theme',
  },

  hero: {
    eyebrow: 'AI & automation · Quebec and Ontario',
    headline: 'Give your team back the hours repetitive work steals.',
    subhead: 'At your place: your own servers or your own Azure tenant.',
    ctaPrimary: 'Book a 30-minute call',
    ctaSecondary: 'Watch the demo',
    chips: [
      'Inside your Microsoft 365',
      'Built for Law 25',
      'Your servers or your Azure',
      'Bilingual',
    ] as Tuple4<string>,
    // Real photo, human rather than hardware. Loaded eagerly: it is the LCP
    // element of the page.
    image: '/assets/hero.jpg',
    imageAlt: 'A small-business owner working on her laptop by a window',
  },

  problem: {
    eyebrow: 'The real blocker',
    title: 'It was never the AI. It’s where your data goes.',
    stat: {
      value: 77,
      suffix: '%',
      claim:
        'of employees using AI paste company data into it — 82% of it through personal accounts the company can’t see.',
      source: 'LayerX, Enterprise AI & SaaS Data Security Report 2025',
      sourceUrl:
        'https://go.layerxsecurity.com/hubfs/LayerX_Enterprise_AI_and_SaaS_Data_Security_Report.pdf',
    } satisfies Stat,
    support: {
      claim:
        'Canada ranks among the least trusting countries toward AI in the world, and Canadians’ top demand is to stop their personal data from being used to train AI.',
      source:
        'KPMG International & University of Melbourne, Trust, Attitudes and Use of Artificial Intelligence: A Global Study 2025',
      sourceUrl:
        'https://kpmg.com/ca/en/media/2025/06/canada-lagging-global-peers-in-ai-trust-and-literacy.html',
    } satisfies SourcedClaim,
  },

  outcomes: {
    eyebrow: 'What you get out of it',
    title: 'Four gains, right away.',
    lead: 'Not an impressive demo. Hours back, every week.',
    cards: [
      {
        title: 'Your evenings',
        body: 'The repetitive work runs without you. Volume grows, your workload doesn’t.',
      },
      {
        title: 'Nothing slips',
        body: 'The same rule on every file, every time.',
      },
      {
        title: 'Answers in minutes',
        body: 'Your customers hear back today, not tomorrow.',
      },
      {
        title: 'Your data, with you',
        body: 'Nothing leaves your perimeter. Ever.',
      },
    ] as Tuple4<OutcomeCard>,
  },

  sovereignty: {
    eyebrow: 'What we believe',
    title: 'Your AI. Your data. Your perimeter.',
    lead: 'We don’t move your documents somewhere else to sell you AI.',
    modes: [
      {
        label: 'On your own servers',
        body: 'Your hardware, on your premises. Nothing leaves your network.',
      },
      {
        label: 'In your own Azure tenant',
        body: 'Yes, this is cloud — but it’s yours. Your subscription, your Canadian region.',
      },
    ] as Tuple2<DeploymentMode>,
    points: [
      'Your documents are never copied to us.',
      'We train nothing on your data.',
      'You cut off access whenever you want.',
    ] as Tuple3<string>,
    // Real photo, lazy-loaded — the section sits below the fold.
    image: '/assets/difference-humaine.jpg',
    imageAlt: 'A business owner sitting at his company table, laptop open in front of him',
  },

  services: {
    eyebrow: 'What we install',
    title: 'Four systems that work for you.',
    lead: 'One specific process at a time. In production, not in a slide deck.',
    detailCta: 'See the detail',
    items: [
      {
        eyebrow: 'Search',
        title: 'Your documents answer your questions',
        gain: 'Your teams stop digging.',
        points: [
          {
            label: 'All your documentation, asked in plain language',
            detail: 'You ask in plain English; the right answer comes back with its source.',
          },
          {
            label: 'Contracts and reports summarized in seconds',
            detail: 'Summarized and compared against each other, however long the file.',
          },
          {
            label: 'Scattered information pulled into one reliable source',
            detail: 'What lives across every one of your tools, gathered in a single place.',
          },
        ] as Tuple3<ServicePoint>,
      },
      {
        eyebrow: 'Automation',
        title: 'Your processes run end to end',
        gain: 'From the first request to the closed file.',
        points: [
          {
            label: 'Incoming requests qualified and routed',
            detail: 'Every prospect is assessed and sent to the right person, instantly.',
          },
          {
            label: 'Full client onboarding, the moment it is signed',
            detail: 'The file is created, access opens and the steps start on their own.',
          },
          {
            label: 'Invoices and data handled with no entry',
            detail: 'Read, verified, matched against orders and filed; your numbers come together on their own.',
          },
        ] as Tuple3<ServicePoint>,
      },
      {
        eyebrow: 'Drafting',
        title: 'Your documents prepare themselves',
        gain: 'You approve, you no longer write.',
        points: [
          {
            label: 'Contracts and documents pre-filled, ready to review',
            detail: 'Generated from the file; all that is left is to read and sign.',
          },
          {
            label: 'Client reports built automatically',
            detail: 'Client reports and management reports, built from your own data.',
          },
          {
            label: 'Recurring answers prepared in your name',
            detail: 'Prepared in advance, in your name and by your rules.',
          },
        ] as Tuple3<ServicePoint>,
      },
      {
        eyebrow: 'Control',
        title: 'Your AI policies, under your control',
        gain: 'You decide who uses what, and at what cost.',
        points: [
          {
            label: 'Rules of use and access by role',
            detail: 'Your policies enforced across the company, guardrails included.',
          },
          {
            label: 'AI costs tracked and capped',
            detail: 'Tracked, capped and attributed to each team, with no surprises.',
          },
          {
            label: 'Everything stays inside your perimeter. Nothing leaves it.',
            detail: 'Every action governed and logged, on your servers or your own Azure.',
          },
        ] as Tuple3<ServicePoint>,
      },
    ] satisfies Tuple4<ServiceCard>,
  },

  demo: {
    eyebrow: 'Demo',
    title: 'See the platform in action.',
    lead: 'Three minutes, no account required.',
    placeholderLabel: 'Video coming',
    placeholderNote: 'One real case, end to end.',
    cta: 'Book a live demo',
  },

  comparison: {
    eyebrow: 'Compare',
    title: 'Three ways to add AI.',
    lead: 'One keeps your data at home.',
    colOnpremia: 'OnPremia',
    colOnpremiaNote: 'Your servers or your Azure',
    /** Label on the highlighted column. */
    recommendedBadge: 'Your data stays with you',
    colSaas: 'Multi-tenant AI SaaS',
    colSaasNote: 'A vendor’s platform',
    colDiy: 'Do it yourself',
    colDiyNote: 'Your team, on top of their job',
    rows: [
      {
        criterion: 'Where your data lives',
        onpremia: 'With you',
        saas: 'With the vendor',
        diy: 'Varies, often undocumented',
      },
      {
        criterion: 'Who holds the keys',
        onpremia: 'You',
        saas: 'The vendor',
        diy: 'You, if someone maintains them',
      },
      {
        criterion: 'Region',
        onpremia: 'The one you choose, in Canada',
        saas: 'Wherever the vendor runs',
        diy: 'Wherever each connected tool runs',
      },
      {
        criterion: 'Effort on your side',
        onpremia: 'We build it, document it, train your team',
        saas: 'You configure it and you watch it',
        diy: 'Your team, on top of their job',
      },
    ] as readonly ComparisonRow[],
  },

  calculator: {
    eyebrow: 'Estimate',
    title: 'How much time you get back.',
    lead: 'Two numbers. Adjust them to your reality.',
    emailsLabel: 'Emails handled per week',
    adminLabel: 'Admin hours per week',
    rateLabel: 'Average loaded hourly cost',
    weeklyLabel: 'Hours back per week',
    yearlyLabel: 'Per year',
    valueLabel: 'Annual value',
    hoursUnit: 'h',
    assumptions: 'Assumption: 2 minutes saved per email and 30% of admin time automated.',
    disclaimer: 'An estimate to validate. That’s exactly what the audit measures.',
    cta: 'Validate it with an audit',
  },

  process: {
    eyebrow: 'Our method',
    title: 'We scope before we build.',
    lead: 'We build it, we document it, we train you. You keep control.',
    phases: [
      {
        step: '01',
        title: 'Audit',
        body: 'One real process, costed. You keep the plan, even if we stop there.',
      },
      {
        step: '02',
        title: 'Build',
        body: 'We build at your place, around your tools. You test as we go.',
      },
      {
        step: '03',
        title: 'Launch',
        body: 'We train your team and hand over the access. You don’t need us.',
      },
    ] as Tuple3<ProcessPhase>,
  },

  industries: {
    eyebrow: 'Industries',
    title: 'Recognize your business?',
    lead: 'Pick your sector. See what changes first.',
    tabs: [
      {
        id: 'manufacturier',
        label: 'Manufacturing',
        quote: '“Our quotes live in ten different places.”',
        benefits: [
          {
            label: 'Price requests turn into quotes',
            gain: 'It goes out the same day, not next week.',
          },
          {
            label: 'Your technical sheets answer for you',
            gain: 'The right sheet in seconds, not across ten folders.',
          },
          {
            label: 'Unanswered quotes chase themselves',
            gain: 'You stop losing contracts to a simple oversight.',
          },
          {
            label: 'Your production numbers pull themselves together',
            gain: 'The report is ready without anyone building it.',
          },
        ] as Tuple4<IndustryBenefit>,
        outcome: 'Customer answers in minutes, not days.',
        image: '/assets/secteur-manufacturier.jpg',
        imageAlt: 'A welder working at a shop-floor bench, sparks flying',
      },
      {
        id: 'concessionnaires',
        label: 'Dealerships',
        quote: '“We lose sales because nobody answers fast enough in the evening.”',
        benefits: [
          {
            label: 'Every web enquiry gets a real answer',
            gain: 'Even at 9 p.m., even on a Saturday.',
          },
          {
            label: 'A missed call gets an automatic reply',
            gain: 'The customer never gets around to calling elsewhere.',
          },
          {
            label: 'Follow-ups go back out with the full context',
            gain: 'No sale stalls for lack of a follow-up.',
          },
          {
            label: 'Service appointments book themselves',
            gain: 'Your counter stops working as a switchboard.',
          },
        ] as Tuple4<IndustryBenefit>,
        outcome: 'No enquiry left unanswered after 5 p.m.',
        image: '/assets/secteur-concessionnaires.jpg',
        imageAlt: 'A service advisor at an auto shop counter, on the phone at his screen',
      },
      {
        id: 'comptables',
        label: 'Accounting firms',
        quote: '“We chase documents more than we advise our clients.”',
        benefits: [
          {
            label: 'Onboarding a new client runs itself',
            gain: 'Documents asked for, received, filed — without you.',
          },
          {
            label: 'Email and paperwork land in the right client file',
            gain: 'No more attachments lost in an inbox.',
          },
          {
            label: 'Missing documents chase themselves',
            gain: 'Down to the last receipt, without you nagging.',
          },
          {
            label: 'Receipt and invoice figures enter themselves',
            gain: 'Your hours move back to advising.',
          },
        ] as Tuple4<IndustryBenefit>,
        outcome: 'Tax season without the evenings.',
        image: '/assets/secteur-cabinets-comptables.jpg',
        imageAlt: 'An accountant at his desk, taking notes beside his monitor',
      },
      {
        id: 'cliniques',
        label: 'Clinics',
        quote: '“Reception is on the phone all day, and we still miss calls.”',
        benefits: [
          {
            label: 'Booking, confirmations and reminders go out on their own',
            gain: 'Fewer no-shows, without one extra phone call.',
          },
          {
            label: 'A missed call gets called back automatically',
            gain: 'No patient lost to a busy signal.',
          },
          {
            label: 'Every request reaches the right person',
            gain: 'Reception stops being air traffic control.',
          },
          {
            label: 'Intake forms are filled in before the visit',
            gain: 'The appointment starts on time, on the real issue.',
          },
        ] as Tuple4<IndustryBenefit>,
        outcome: 'Fewer no-shows, more clinical time.',
        image: '/assets/secteur-cliniques.jpg',
        imageAlt: 'A smiling receptionist behind the front desk of a clinic',
      },
    ] as Tuple4<IndustryTab>,
    dataNote:
      'In healthcare and legal, the perimeter isn’t theoretical. That’s why we deploy at your place.',
  },

  proof: {
    eyebrow: 'Work',
    title: 'Systems in production.',
    lead: 'No case study without the client’s written approval. Ask us for references.',
    askCta: 'Ask for references',
  },

  faq: {
    eyebrow: 'Common questions',
    title: 'What people ask before signing.',
    items: [
      {
        q: 'Is this cloud?',
        a: 'It depends on the deployment. On your own servers, no. In your own Azure tenant, yes — but it’s your subscription, your keys and your region. We host nothing.',
      },
      {
        q: 'Where is our data hosted?',
        a: 'In infrastructure you already own. On Azure, in the Canadian region you choose, confirmed in writing.',
      },
      {
        q: 'How does this sit with Law 25?',
        a: 'Keeping personal information inside your perimeter reduces the third-party disclosures you have to govern. This isn’t legal advice: we document where data lives and who can reach it.',
      },
      {
        q: 'Do you train anything on our data?',
        a: 'No. Your documents are used to answer your questions, full stop. It’s written into the contract.',
      },
      {
        q: 'What does it cost?',
        a: 'The audit produces a fixed price for the work that follows. No hourly billing for the build.',
      },
      {
        q: 'What happens if we stop?',
        a: 'The system is yours and keeps running. We hand over access and documentation.',
      },
    ] as readonly FaqItem[],
  },

  contact: {
    eyebrow: 'Next step',
    title: 'Give your team back the hours repetitive work steals.',
    lead: 'Thirty minutes. You leave with a plan, even if we never work together.',
    ctaPrimary: 'Book a call',
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
    region: 'Quebec and Ontario',
    rights: 'All rights reserved.',
    legalNote:
      'References to Law 25 describe our deployment model and do not constitute legal advice.',
    nav: 'Navigation',
    contactHeading: 'Contact',
  },
}
