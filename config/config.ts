/**
 * PrivateStaffJobs.com - Custom Configuration
 * ----------------------------
 * Brand: Luxury HNWI private staffing - AQUAVITA-inspired aesthetic
 * Fonts: Cormorant Garamond (serif headlines via CSS) + Inter (body via config)
 * Palette: Ivory #FAFAF7 - Gold #B8956A - Charcoal #1A1A1A
 *
 * NOTE: The config loader in index.ts does a SHALLOW merge, so every
 * top-level key here must be a complete object (not a partial).
 */
import type { ScriptProps } from 'next/script';
import type { BadgeType } from '@/components/ui/job-badge';
import type { CurrencyCode } from '@/lib/constants/currencies';
// Available font options
export type FontFamily = 'geist' | 'inter' | 'ibm-plex-serif';
// Hero image configuration
type HeroImageConfig = {
  enabled: boolean;
  src?: string;
  alt?: string;
};
// Menu item interface for new flexible menu structure
export type MenuItem = {
  label: string;
  link: string;
  icon?: string;
  dropdown?: boolean;
  items?: MenuItem[];
  external?: boolean;
  // For accessibility
  ariaLabel?: string;
};
// Navigation configuration type
export type NavConfig = {
  title: string;
  logo: {
    enabled: boolean;
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  github: { show: boolean; url: string };
  linkedin: { show: boolean; url: string };
  twitter: { show: boolean; url: string };
  bluesky: { show: boolean; url: string };
  reddit: { show: boolean; url: string };
  postJob: {
    show: boolean;
    label: string;
    link: string;
    external: boolean;
    variant: 'default' | 'primary' | 'outline' | 'secondary' | 'ghost' | 'link';
  };
  menu: MenuItem[];
};
type CustomScript = {
  src: string;
  strategy: ScriptProps['strategy'];
  attributes?: Record<string, string>;
};
// Plan type for pricing configuration
type PricingPlan = {
  name: string;
  price: number;
  billingTerm: string;
  description: string;
  features: string[];
  cta: {
    label: string;
    link: string;
    variant: string;
  };
  badge: {
    text: string;
    type?: BadgeType;
  } | null;
  highlighted: boolean;
};
// FAQ item type for FAQ configuration
type FAQItem = {
  question: string;
  answer: string;
  // Whether the answer contains markdown/rich text
  isRichText?: boolean;
};
// FAQ category type for FAQ configuration
type FAQCategory = {
  title: string;
  items: FAQItem[];
};
export const config = {
  // Font Configuration
  font: {
    family: 'inter' as FontFamily,
    useGoogleFonts: true,
    weights: [300, 400, 500, 600],
  },
  // UI Configuration
  ui: {
    // Clean white hero (AQUAVITA style)
    heroBackgroundColor: '#FFFFFF',
    heroGradient: {
      enabled: false,
      type: 'linear' as 'linear' | 'radial',
      direction: 'to bottom',
      colors: [] as string[],
      stops: [] as string[],
    },
    heroBackgroundImage: {
      enabled: false,
      src: '',
      position: 'center',
      size: 'cover',
      overlay: {
        enabled: false,
        color: '#000000',
        opacity: 0.4,
      },
    },
    // Hero text colors
    heroTitleColor: '#1A1A1A',
    heroSubtitleColor: '#6B6B6B',
    heroStatsColor: '#6B6B6B',
    // Hero badge - gold outline
    heroBadgeVariant: 'outline' as
      | 'default'
      | 'secondary'
      | 'outline'
      | 'destructive',
    heroBadgeBgColor: 'transparent',
    heroBadgeTextColor: '#B8956A',
    heroBadgeBorderColor: '#B8956A',
    // Search bar
    heroSearchBgColor: '#FFFFFF',
    // Primary brand color - warm gold
    primaryColor: '#B8956A',
    // Hero image - disabled for centered-text layout
    heroImage: {
      enabled: false,
      src: '',
      alt: '',
    },
  },
  // Open Graph Image Configuration
  og: {
    enabled: true,
    title: null,
    description: null,
    backgroundColor: '#1A1A1A',
    backgroundOpacity: 1,
    backgroundImage: '',
    gradient: {
      enabled: true,
      color: '#B8956A',
      angle: 135,
      startOpacity: 0.15,
      endOpacity: 0,
    },
    titleColor: '#FFFFFF',
    descriptionColor: '#9A9A9A',
    font: { family: null },
    logo: {
      show: false,
      src: '/logo-light.svg',
      width: 180,
      height: 45,
      position: { top: 40, left: 40 },
    },
    jobs: {
      enabled: true,
      backgroundColor: '#1A1A1A',
      backgroundOpacity: 1,
      backgroundImage: '',
      gradient: {
        enabled: true,
        color: '#B8956A',
        angle: 135,
        startOpacity: 0.15,
        endOpacity: 0,
      },
      titleColor: '#FFFFFF',
      companyColor: null,
      detailsColor: '#9A9A9A',
      font: { family: null },
      logo: {
        show: false,
        src: '/logo-light.svg',
        width: 180,
        height: 45,
      },
      showSalary: true,
      showLocation: true,
      showJobType: true,
    },
  },
  // Marketing & SEO
  badge: 'PRIVATE HOUSEHOLD STAFFING',
  title: 'Where Exceptional Homes Find Exceptional Staff',
  description:
    'The premier destination for private household positions. Connecting distinguished families with world-class estate managers, private chefs, nannies, and personal staff.',
  url:
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://privatestaffjobs.com'),
  // Job Alerts Configuration
  jobAlerts: {
    enabled: true,
    showInNavigation: true,
    showInFooter: true,
    navigationLabel: 'Job Alerts',
    hero: {
      badge: 'STAY INFORMED',
      title: 'Never Miss an Exceptional Position',
      description:
        'Receive curated alerts for private household positions that match your experience and preferences.',
    },
    heroImage: {
      enabled: false,
      src: '',
      alt: '',
    },
    form: {
      heading: 'Set Up Your Alerts',
      description:
        'Tell us what you\'re looking for, and we\'ll deliver relevant positions directly to your inbox.',
      fields: {
        name: {
          label: 'Full Name *',
          placeholder: 'Your full name',
          required: 'Name is required',
        },
        email: {
          label: 'Email Address *',
          placeholder: 'your@email.com',
          required: 'Email is required',
          invalid: 'Please enter a valid email address',
        },
      },
      buttonText: 'Subscribe to Alerts',
      loadingText: 'Subscribing...',
      successHeading: 'You\'re All Set!',
      successDescription:
        'Thank you for subscribing. You\'ll receive curated position alerts matching your preferences.',
      resetButtonText: 'Subscribe with another email',
      toast: {
        success: {
          title: 'Subscription confirmed!',
          description: 'You\'ll now receive position alerts in your inbox.',
        },
        rateLimit: {
          title: 'Rate limit exceeded',
          description: 'Too many requests. Please try again later.',
        },
        error: {
          title: 'Something went wrong',
          description: 'Failed to subscribe to alerts. Please try again.',
        },
      },
    },
    provider: 'encharge',
  },
  // RSS Feed Configuration
  rssFeed: {
    enabled: true,
    showInNavigation: true,
    showInFooter: true,
    navigationLabel: 'RSS Feed',
    footerLabel: 'Private Staff Positions',
    title: 'Private Staff Jobs - Latest Positions',
    descriptionLength: 200,
    formats: {
      rss: true,
      atom: true,
      json: true,
    },
  },
  // Currency Configuration
  currency: {
    defaultCurrency: 'USD' as CurrencyCode,
    allowedCurrencies: null as CurrencyCode[] | null,
  },
  // Search Configuration
  search: {
    placeholder: 'Search positions, titles, or keywords...',
    debounceMs: 300,
    showOnAllPages: true,
    ariaLabel: 'Search private staff positions',
  },
  // Quick Stats Configuration
  quickStats: {
    enabled: true,
    sections: {
      openJobs: {
        enabled: true,
        title: 'Open Positions',
        showNewJobsIndicator: true,
      },
      lastUpdated: {
        enabled: true,
        title: 'Last Updated',
      },
      trending: {
        enabled: true,
        title: 'Top Employers',
        maxCompanies: 5,
      },
    },
  },
  // Job Listings Configuration
  jobListings: {
    defaultPageTitle: 'Private Staff Positions',
    defaultPerPage: 20,
    defaultValidityDays: 60,
    sortOptions: ['newest', 'oldest', 'salary'] as const,
    defaultSortOrder: 'newest' as 'newest' | 'oldest' | 'salary',
    labels: {
      perPage: {
        show: true,
        text: 'Show',
      },
      sortOrder: {
        show: true,
        text: 'Sort by',
      },
    },
  },
  // FAQ Configuration
  faq: {
    enabled: true,
    showInNavigation: false,
    showInFooter: true,
    navigationLabel: 'FAQ',
    badge: 'QUESTIONS & ANSWERS',
    title: 'Frequently Asked Questions',
    description:
      'Everything you need to know about finding or posting private household staff positions.',
    heroImage: {
      enabled: false,
      src: '',
      alt: '',
    },
    keywords:
      'private staff FAQ, household staffing questions, estate manager hiring, private chef recruitment',
    categories: [
      {
        title: 'For Candidates',
        items: [
          {
            question: 'What types of positions are listed?',
            answer:
              'We specialise in private household roles including estate managers, private chefs, household managers, butlers, nannies, personal assistants, chauffeurs, housekeepers, and other domestic staff positions.',
          },
          {
            question: 'Is it free to browse and apply?',
            answer:
              'Yes. Browsing positions and submitting applications is completely free for candidates.',
          },
          {
            question: 'How do I receive alerts for new positions?',
            answer:
              'Visit our Job Alerts page to set up email notifications. You\'ll receive curated updates when positions matching your criteria are posted.',
          },
        ],
      },
      {
        title: 'For Employers',
        items: [
          {
            question: 'How do I post a position?',
            answer:
              'Click \'Post a Position\' in the navigation. Select a plan that fits your needs and your listing will go live after review.',
          },
          {
            question: 'What audience will see my listing?',
            answer:
              'Your position is seen by qualified private household professionals actively seeking opportunities - from experienced estate managers to specialist nannies and private chefs.',
          },
          {
            question: 'Can I feature my listing?',
            answer:
              'Yes. Featured listings appear at the top of search results with enhanced visibility. See our Pricing page for options.',
          },
        ],
      },
    ],
  },
  // Email Provider Configuration
  email: {
    provider: process.env.EMAIL_PROVIDER || 'encharge',
    encharge: {
      writeKey: process.env.ENCHARGE_WRITE_KEY,
      defaultTags: 'job-alerts-subscriber',
      eventName: 'Job Alert Subscription',
    },
  },
  // Scripts Configuration - remove default analytics
  scripts: {
    head: [] as CustomScript[],
    body: [] as CustomScript[],
  },
  // Navigation
  nav: {
    title: 'PrivateStaffJobs',
    logo: {
      enabled: false, // set true once you have a logo file
      src: '/logo.svg',
      width: 160,
      height: 40,
      alt: 'Private Staff Jobs',
    },
    github: { show: false, url: '' },
    linkedin: { show: true, url: 'https://linkedin.com/company/privatestaffjobs' },
    twitter: { show: false, url: '' },
    bluesky: { show: false, url: '' },
    reddit: { show: false, url: '' },
    postJob: {
      show: true,
      label: 'Post a Position',
      link: '/pricing',
      external: false,
      variant: 'primary' as
        | 'default'
        | 'primary'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link',
    },
    menu: [
      { label: 'Browse Positions', link: '/' },
      {
        label: 'Positions',
        link: '/jobs',
        dropdown: true,
        items: [
          { label: 'All Positions', link: '/jobs' },
          { label: 'By Type', link: '/jobs/types' },
          { label: 'By Location', link: '/jobs/locations' },
          { label: 'By Level', link: '/jobs/levels' },
        ],
      },
      { label: 'Pricing', link: '/pricing' },
      { label: 'About', link: '/about' },
      { label: 'Contact', link: '/contact' },
    ],
  } as NavConfig,
  // Footer
  footer: {
    brand: {
      show: true,
      order: 1,
      description:
        'The premier private staffing job board connecting distinguished families and estates with exceptional household professionals.',
      logo: {
        enabled: false,
        src: '/logo-light.svg',
        width: 160,
        height: 40,
        alt: 'Private Staff Jobs',
      },
    },
    columns: [
      {
        id: 'candidates',
        show: true,
        order: 2,
        title: 'For Candidates',
        links: [
          { label: 'Browse All Positions', link: '/' },
          { label: 'Job Alerts', link: '/job-alerts' },
          { label: 'FAQ', link: '/faq' },
        ],
      },
      {
        id: 'employers',
        show: true,
        order: 3,
        title: 'For Employers',
        links: [
          { label: 'Post a Position', link: '/pricing' },
          { label: 'Pricing', link: '/pricing' },
          { label: 'About Us', link: '/about' },
          { label: 'Contact', link: '/contact' },
        ],
      },
      {
        id: 'legal',
        show: true,
        order: 4,
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', link: '/privacy' },
          { label: 'Terms of Service', link: '/terms' },
        ],
      },
    ],
    postJob: {
      show: true,
      title: 'Looking for exceptional household staff?',
      description:
        'Reach qualified private staff professionals actively seeking their next position.',
      button: {
        label: 'Post a Position',
        link: '/pricing',
        external: false,
      },
      learnMoreButton: {
        show: true,
        label: 'View Pricing',
        link: '/pricing',
        external: false,
      },
    },
    copyright: {
      show: true,
      startYear: 2025,
      text: 'Private Staff Jobs. All rights reserved.',
    },
    builtWith: {
      show: false,
      text: '',
      name: '',
      link: '',
      showLogo: false,
    },
    style: {
      backgroundColor: '#1A1A1A',
      textColor: '#9A9A9A',
      headingColor: '#FFFFFF',
      linkColor: '#9A9A9A',
      linkHoverColor: '#B8956A',
      borderColor: '#2C2C2C',
    },
  },
  // Pricing Configuration
  pricing: {
    enabled: true,
    showInNavigation: true,
    showInFooter: true,
    navigationLabel: 'Pricing',
    badge: 'SIMPLE PRICING',
    title: 'Post Your Position',
    description:
      'Reach qualified private household professionals. No subscriptions - just straightforward listing fees.',
    heroImage: {
      enabled: false,
      src: '',
      alt: '',
    },
    keywords:
      'private staff pricing, household staffing listing, estate manager recruitment cost',
    currency: 'USD' as CurrencyCode,
    paymentProcessingText:
      'Payments are processed & secured by Stripe. Price in USD. VAT may apply.',
    paymentMethods: {
      enabled: true,
      icons: [
        { name: 'visa', alt: 'Visa' },
        { name: 'mastercard', alt: 'Mastercard' },
        { name: 'amex', alt: 'American Express' },
        { name: 'applepay', alt: 'Apple Pay' },
        { name: 'googlepay', alt: 'Google Pay' },
      ],
    },
    plans: [
      {
        name: 'Standard',
        price: 149,
        billingTerm: 'per listing',
        description: 'Perfect for a single hire.',
        features: [
          '60-day listing',
          'Included in job alerts',
          'Basic analytics',
          'Email support',
        ],
        cta: {
          label: 'Post Now',
          link: 'https://stripe.com', // Replace with your Stripe payment link
          variant: 'outline',
        },
        badge: null,
        highlighted: false,
      },
      {
        name: 'Featured',
        price: 299,
        billingTerm: 'per listing',
        description: 'Maximum visibility for premium roles.',
        features: [
          '60-day listing',
          'Featured badge & top placement',
          'Priority in job alerts',
          'Detailed analytics',
          'Social media promotion',
          'Dedicated support',
        ],
        cta: {
          label: 'Post Featured',
          link: 'https://stripe.com', // Replace with your Stripe payment link
          variant: 'default',
        },
        badge: {
          text: 'Most Popular',
          type: 'featured' as BadgeType,
        },
        highlighted: true,
      },
      {
        name: 'Agency Pack',
        price: 699,
        billingTerm: '5 listings',
        description: 'For staffing agencies & large estates.',
        features: [
          '5 listings (60 days each)',
          '2 featured slots included',
          'Priority in all alerts',
          'Full analytics suite',
          'Dedicated account manager',
          'Custom employer branding',
        ],
        cta: {
          label: 'Get Started',
          link: 'https://stripe.com', // Replace with your Stripe payment link
          variant: 'outline',
        },
        badge: {
          text: 'Best Value',
          type: 'featured' as BadgeType,
        },
        highlighted: false,
      },
    ],
  },
  // Post Job Banner Configuration
  postJobBanner: {
    enabled: true,
    title: 'Looking for Exceptional Household Staff?',
    description: 'Reach qualified private staff professionals. Get quality applications fast.',
    showTrustedBy: false,
    trustedByText: '',
    companyAvatars: [] as { src: string; alt: string; fallback: string }[],
    cta: {
      text: 'Post a Position',
      link: '/pricing',
      external: false,
    },
    trustMessage: 'Trusted by families and agencies worldwide',
  },
  // Contact Page Configuration
  contact: {
    enabled: true,
    showInNavigation: true,
    showInFooter: true,
    navigationLabel: 'Contact',
    badge: 'GET IN TOUCH',
    title: 'We\'d Love to Hear From You',
    description:
      'Whether you\'re a candidate with questions or an employer looking to post, our team is here to help.',
    heroImage: {
      enabled: false,
      src: '',
      alt: '',
    },
    keywords: 'contact private staff jobs, household staffing support, private recruitment help',
    supportChannels: {
      title: 'How Can We Help?',
      channels: [
        {
          type: 'email',
          title: 'Email Us',
          description:
            'Our team is available to help with any questions about positions or listings.',
          buttonText: 'Send an Email',
          buttonLink: 'mailto:hello@privatestaffjobs.com',
          icon: 'Mail',
        },
        {
          type: 'faq',
          title: 'FAQ',
          description:
            'Find answers to common questions about our platform and services.',
          buttonText: 'View FAQ',
          buttonLink: '/faq',
          icon: 'HelpCircle',
        },
      ],
    },
    contactInfo: {
      title: 'Contact Information',
      description: 'Here\'s how you can reach us directly.',
      companyName: 'Private Staff Jobs',
      email: 'hello@privatestaffjobs.com',
      phone: '',
      address: '',
    },
    schema: {
      description:
        'Get in touch with Private Staff Jobs for questions about private household staffing positions.',
    },
    contact: {
      show: true,
      url: '/contact',
      label: 'Contact Us',
      variant: 'default',
    },
  },
  // About Page Configuration
  about: {
    enabled: true,
    showInNavigation: true,
    label: 'About',
    badge: 'OUR STORY',
    title: 'The Standard in Private Household Staffing',
    description:
      'PrivateStaffJobs was created to bring clarity and professionalism to private household recruitment - connecting exceptional families with exceptional staff.',
    heroImage: {
      enabled: false,
      src: '',
      alt: '',
    },
    sections: {
      mission: {
        title: 'Our Mission',
        content:
          'To be the most trusted destination for private household staffing - serving the families, estates, and agencies who expect nothing less than excellence in their hiring process.',
      },
      story: {
        title: 'Our Story',
        content:
          'Private Staff Jobs was founded with a clear purpose: to elevate the standard of private household recruitment. We saw a fragmented market where families struggled to find qualified staff, and talented professionals had no dedicated platform to discover exceptional opportunities.',
      },
      team: {
        title: 'Our Approach',
        content:
          'We combine deep industry knowledge with modern technology to create a recruitment experience that reflects the standards our clients and candidates expect - discreet, professional, and always focused on quality.',
      },
    },
    contact: {
      show: true,
      url: '/contact',
      label: 'Get in Touch',
      variant: 'default',
      title: 'Get in Touch',
      description:
        'Have questions about posting a position or finding your next role? We\'d love to hear from you.',
    },
    schema: {
      companyName: 'Private Staff Jobs',
      description:
        'The premier job board for private household positions, connecting exceptional families with exceptional staff.',
      logo: '/logo.svg',
    },
  },
  // Jobs Pages Configuration
  jobsPages: {
    directory: {
      heroImage: {
        enabled: false,
        src: '',
        alt: '',
      },
    },
    types: {
      heroImage: {
        enabled: false,
        src: '',
        alt: '',
      },
    },
    levels: {
      heroImage: {
        enabled: false,
        src: '',
        alt: '',
      },
    },
    locations: {
      heroImage: {
        enabled: false,
        src: '',
        alt: '',
      },
    },
    languages: {
      heroImage: {
        enabled: false,
        src: '',
        alt: '',
      },
    },
    dynamicPages: {
      level: {
        heroImage: {
          enabled: false,
          src: '',
          alt: '',
        },
      },
      language: {
        heroImage: {
          enabled: false,
          src: '',
          alt: '',
        },
      },
      type: {
        heroImage: {
          enabled: false,
          src: '',
          alt: '',
        },
      },
      location: {
        heroImage: {
          enabled: false,
          src: '',
          alt: '',
        },
      },
    },
  },
  // Job Report Configuration
  jobReport: {
    enabled: true,
    buttonText: 'Report',
    email: 'support@privatestaffjobs.com',
    emailSubject: 'Position Report: [Job Title]',
    emailMessage:
      'I would like to report the following position:\n\nPosition Title: [Job Title]\nPosition URL: [Job URL]\n\nReason for reporting:',
    showInSidebar: true,
  },
} as const;
export type Config = typeof config;
export default config;
