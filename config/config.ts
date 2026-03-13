/**
 * PrivateStaffJobs.com â Custom Configuration
 * ---------------------------------------------
 * Brand: Luxury HNWI private staffing Â· AQUAVITA-inspired aesthetic
 * Fonts: Cormorant Garamond (serif headlines via CSS) + Inter (body via config)
 * Palette: Ivory #FAFAF7 Â· Gold #B8956A Â· Charcoal #1A1A1A
 *
 * NOTE: The config loader in index.ts does a SHALLOW merge, so every
 * top-level key here must be a complete object (not a partial).
/**
 * PrivateStaffJobs.com Ã¢ÂÂ Custom Configuration
 * ---------------------------------------------
 * Brand: Luxury HNWI private staffing ÃÂ· AQUAVITA-inspired aesthetic
 * Fonts: Cormorant Garamond (serif headlines via CSS) + Inter (body via config)
 * Palette: Ivory #FAFAF7 ÃÂ· Gold #B8956A ÃÂ· Charcoal #1A1A1A
 *
 * NOTE: The config loader in index.ts does a SHALLOW merge, so every
 * top-level key here must be a complete object (not a partial).
 */

import type { NavConfig, MenuItem } from './config.example';

// The example config uses `as const` which creates very strict literal types.
// We use a type assertion here so we can provide our own values while still
// being structurally compatible at runtime.
export const config = {
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // FONT Ã¢ÂÂ Inter for body; Cormorant Garamond added via globals.css
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  font: {
    family: 'inter' as const,
    useGoogleFonts: true,
    weights: [300, 400, 500, 600],
  },

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // UI Ã¢ÂÂ Colors & Hero Styling
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  ui: {
    // Clean white hero (AQUAVITA style)
    heroBackgroundColor: '#FFFFFF',

    heroGradient: {
      enabled: false,
      type: 'linear' as const,
      direction: 'to bottom',
      colors: [],
      stops: [],
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

    // Hero badge Ã¢ÂÂ gold outline
    heroBadgeVariant: 'outline' as const,
    heroBadgeBgColor: 'transparent',
    heroBadgeTextColor: '#B8956A',
    heroBadgeBorderColor: '#B8956A',

    // Search bar
    heroSearchBgColor: '#FFFFFF',

    // Primary brand color Ã¢ÂÂ warm gold
    primaryColor: '#B8956A',

    // Hero image Ã¢ÂÂ disabled for centered-text layout
    heroImage: {
      enabled: false,
      src: '',
      alt: '',
    },
  },

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // OG IMAGE
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
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

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // MARKETING & SEO
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  badge: 'PRIVATE HOUSEHOLD STAFFING',
  title: 'Where Exceptional Homes Find Exceptional Staff',
  description:
    'The premier destination for private household positions. Connecting distinguished families with world-class estate managers, private chefs, nannies, and personal staff.',

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // JOB ALERTS
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
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
        success: 'Subscription confirmed!',
        error: 'Something went wrong. Please try again.',
      },
    },
    features: {
      show: true,
      items: {
        frequency: {
          title: 'Curated Alerts',
          description: 'Receive hand-selected positions matching your expertise.',
        },
        customization: {
          title: 'Exclusive Positions',
          description: 'Access roles not advertised on public job boards.',
        },
        privacy: {
          title: 'Absolute Discretion',
          description: 'Your search remains completely confidential.',
        },
      },
    },
  },

  // ———————————————————————————————————————————
  // RSS FEED
  // ———————————————————————————————————————————
  rssFeed: {
    enabled: true,
    showInNavigation: true,
    showInFooter: true,
    navigationLabel: 'RSS Feed',
    footerLabel: 'Private Staff Positions',
    title: 'Private Staff Jobs \u2014 Latest Positions',
    descriptionLength: 200,
    formats: {
      rss: true,
      atom: true,
      json: true,
    },
  },

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // SEARCH
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  search: {
    placeholder: 'Search positions, titles, or keywordsÃ¢ÂÂ¦',
    debounceMs: 300,
    showOnAllPages: true,
    ariaLabel: 'Search private staff positions',
  },

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // QUICK STATS
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
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

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // JOB LISTINGS
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  jobListings: {
    defaultPageTitle: 'Private Staff Positions',
    defaultPerPage: 20,
    defaultValidityDays: 60,
    sortOptions: ['newest', 'oldest', 'salary'] as const,
    defaultSortOrder: 'newest' as const,
    labels: {
      perPage: { show: true, text: 'Show' },
      sortOrder: { show: true, text: 'Sort by' },
    },
  },

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // FAQ
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
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
              'Your position is seen by qualified private household professionals actively seeking opportunities Ã¢ÂÂ from experienced estate managers to specialist nannies and private chefs.',
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

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // SCRIPTS Ã¢ÂÂ remove default analytics
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  scripts: {
    head: [],
    body: [],
  },

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // NAVIGATION
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
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
      variant: 'primary' as const,
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
    ] as MenuItem[],
  } as NavConfig,

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // FOOTER
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
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

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // PRICING
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  pricing: {
    enabled: true,
    showInNavigation: true,
    showInFooter: true,
    navigationLabel: 'Pricing',
    badge: 'SIMPLE PRICING',
    title: 'Post Your Position',
    description:
      'Reach qualified private household professionals. No subscriptions Ã¢ÂÂ just straightforward listing fees.',
    heroImage: {
      enabled: false,
      src: '',
      alt: '',
    },
    keywords:
      'private staff pricing, household staffing listing, estate manager recruitment cost',
    currency: 'USD' as const,
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
          type: 'featured' as const,
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
          type: 'featured' as const,
        },
        highlighted: false,
      },
    ],
  },

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // POST JOB BANNER
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  postJobBanner: {
    enabled: true,
    title: 'Looking for Exceptional Household Staff?',
    description: 'Reach qualified private staff professionals. Get quality applications fast.',
    showTrustedBy: false,
    trustedByText: '',
    companyAvatars: [],
    cta: {
      text: 'Post a Position',
      link: '/pricing',
      external: false,
    },
    trustMessage: 'Trusted by families and agencies worldwide',
  },

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // CONTACT
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
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

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // ABOUT
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  about: {
    enabled: true,
    showInNavigation: true,
    label: 'About',
    badge: 'OUR STORY',
    title: 'The Standard in Private Household Staffing',
    description:
      'PrivateStaffJobs was created to bring clarity and professionalism to private household recruitment Ã¢ÂÂ connecting exceptional families with exceptional staff.',
    heroImage: {
      enabled: false,
      src: '',
      alt: '',
    },
    sections: {
      mission: {
        title: 'Our Mission',
        content:
          'To be the most trusted destination for private household staffing Ã¢ÂÂ serving the families, estates, and agencies who expect nothing less than excellence in their hiring process.',
      },
      story: {
        title: 'Our Story',
        content:
          'Private Staff Jobs was founded with a clear purpose: to elevate the standard of private household recruitment. We saw a fragmented market where families struggled to find qualified staff, and talented professionals had no dedicated platform to discover exceptional opportunities.',
      },
      team: {
        title: 'Our Approach',
        content:
          'We combine deep industry knowledge with modern technology to create a recruitment experience that reflects the standards our clients and candidates expect Ã¢ÂÂ discreet, professional, and always focused on quality.',
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

  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  // JOB REPORT
  // Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
  jobReport: {
    enabled: true,
    buttonText: 'Report',
    email: 'support@privatestaffjobs.com',
    emailSubject: 'Position Report: [Job Title]',
    emailMessage:
      'I would like to report the following position:\n\nPosition Title: [Job Title]\nPosition URL: [Job URL]\n\nReason for reporting:',
    showInSidebar: true,
  },
};
 *

import type { NavConfig, MenuItem } from './config.example';

// The example config uses `as const` which creates very strict literal types.
// We use a type assertion here so we can provide our own values while still
// being structurally compatible at runtime.
export const config = {
  // âââââââââââââââââââââââââââââââââââââââââââââ
  // FONT â Inter for body; Cormorant Garamond added via globals.css
  // âââââââââââââââââââââââââââââââââââââââââââââ
  font: {
    family: 'inter' as const,
    useGoogleFonts: true,
    weights: [300, 400, 500, 600],
  },

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // UI â Colors & Hero Styling
  // âââââââââââââââââââââââââââââââââââââââââââââ
  ui: {
    // Clean white hero (AQUAVITA style)
    heroBackgroundColor: '#FFFFFF',

    heroGradient: {
      enabled: false,
      type: 'linear' as const,
      direction: 'to bottom',
      colors: [],
      stops: [],
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

    // Hero badge â gold outline
    heroBadgeVariant: 'outline' as const,
    heroBadgeBgColor: 'transparent',
    heroBadgeTextColor: '#B8956A',
    heroBadgeBorderColor: '#B8956A',

    // Search bar
    heroSearchBgColor: '#FFFFFF',

    // Primary brand color â warm gold
    primaryColor: '#B8956A',

    // Hero image â disabled for centered-text layout
    heroImage: {
      enabled: false,
      src: '',
      alt: '',
    },
  },

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // OG IMAGE
  // âââââââââââââââââââââââââââââââââââââââââââââ
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

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // MARKETING & SEO
  // âââââââââââââââââââââââââââââââââââââââââââââ
  badge: 'PRIVATE HOUSEHOLD STAFFING',
  title: 'Where Exceptional Homes Find Exceptional Staff',
  description:
    'The premier destination for private household positions. Connecting distinguished families with world-class estate managers, private chefs, nannies, and personal staff.',

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // JOB ALERTS
  // âââââââââââââââââââââââââââââââââââââââââââââ
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
        success: 'Subscription confirmed!',
        error: 'Something went wrong. Please try again.',
      },
    },
    features: {
      show: true,
      items: {
        frequency: {
          title: 'Curated Alerts',
          description: 'Receive hand-selected positions matching your expertise.',
        },
        customization: {
          title: 'Exclusive Positions',
          description: 'Access roles not advertised on public job boards.',
        },
        privacy: {
          title: 'Absolute Discretion',
          description: 'Your search remains completely confidential.',
        },
      },
    },
  },

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // JOB LISTINGS
  // âââââââââââââââââââââââââââââââââââââââââââââ
  jobListingsobs â Latest Positions',
    descriptionLength: 200,
    formats: {
      rss: true,
      atom: true,
      json: true,
    },
  },

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // SEARCH
  // âââââââââââââââââââââââââââââââââââââââââââââ
  search: {
    placeholder: 'Search positions, titles, or keywordsâ¦',
    debounceMs: 300,
    showOnAllPages: true,
    ariaLabel: 'Search private staff positions',
  },

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // QUICK STATS
  // âââââââââââââââââââââââââââââââââââââââââââââ
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

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // JOB LISTINGS
  // âââââââââââââââââââââââââââââââââââââââââââââ
  jobListings: {
    defaultPageTitle: 'Private Staff Positions',
    defaultPerPage: 20,
    defaultValidityDays: 60,
    sortOptions: ['newest', 'oldest', 'salary'] as const,
    defaultSortOrder: 'newest' as const,
    labels: {
      perPage: { show: true, text: 'Show' },
      sortOrder: { show: true, text: 'Sort by' },
    },
  },

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // FAQ
  // âââââââââââââââââââââââââââââââââââââââââââââ
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
              'Your position is seen by qualified private household professionals actively seeking opportunities â from experienced estate managers to specialist nannies and private chefs.',
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

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // SCRIPTS â remove default analytics
  // âââââââââââââââââââââââââââââââââââââââââââââ
  scripts: {
    head: [],
    body: [],
  },

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // NAVIGATION
  // âââââââââââââââââââââââââââââââââââââââââââââ
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
      variant: 'primary' as const,
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
    ] as MenuItem[],
  } as NavConfig,

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // FOOTER
  // âââââââââââââââââââââââââââââââââââââââââââââ
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

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // PRICING
  // âââââââââââââââââââââââââââââââââââââââââââââ
  pricing: {
    enabled: true,
    showInNavigation: true,
    showInFooter: true,
    navigationLabel: 'Pricing',
    badge: 'SIMPLE PRICING',
    title: 'Post Your Position',
    description:
      'Reach qualified private household professionals. No subscriptions â just straightforward listing fees.',
    heroImage: {
      enabled: false,
      src: '',
      alt: '',
    },
    keywords:
      'private staff pricing, household staffing listing, estate manager recruitment cost',
    currency: 'USD' as const,
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
          type: 'featured' as const,
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
          type: 'featured' as const,
        },
        highlighted: false,
      },
    ],
  },

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // POST JOB BANNER
  // âââââââââââââââââââââââââââââââââââââââââââââ
  postJobBanner: {
    enabled: true,
    title: 'Looking for Exceptional Household Staff?',
    description: 'Reach qualified private staff professionals. Get quality applications fast.',
    showTrustedBy: false,
    trustedByText: '',
    companyAvatars: [],
    cta: {
      text: 'Post a Position',
      link: '/pricing',
      external: false,
    },
    trustMessage: 'Trusted by families and agencies worldwide',
  },

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // CONTACT
  // âââââââââââââââââââââââââââââââââââââââââââââ
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

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // ABOUT
  // âââââââââââââââââââââââââââââââââââââââââââââ
  about: {
    enabled: true,
    showInNavigation: true,
    label: 'About',
    badge: 'OUR STORY',
    title: 'The Standard in Private Household Staffing',
    description:
      'PrivateStaffJobs was created to bring clarity and professionalism to private household recruitment â connecting exceptional families with exceptional staff.',
    heroImage: {
      enabled: false,
      src: '',
      alt: '',
    },
    sections: {
      mission: {
        title: 'Our Mission',
        content:
          'To be the most trusted destination for private household staffing â serving the families, estates, and agencies who expect nothing less than excellence in their hiring process.',
      },
      story: {
        title: 'Our Story',
        content:
          'Private Staff Jobs was founded with a clear purpose: to elevate the standard of private household recruitment. We saw a fragmented market where families struggled to find qualified staff, and talented professionals had no dedicated platform to discover exceptional opportunities.',
      },
      team: {
        title: 'Our Approach',
        content:
          'We combine deep industry knowledge with modern technology to create a recruitment experience that reflects the standards our clients and candidates expect â discreet, professional, and always focused on quality.',
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

  // âââââââââââââââââââââââââââââââââââââââââââââ
  // JOB REPORT
  // âââââââââââââââââââââââââââââââââââââââââââââ
  jobReport: {
    enabled: true,
    buttonText: 'Report',
    email: 'support@privatestaffjobs.com',
    emailSubject: 'Position Report: [Job Title]',
    emailMessage:
      'I would like to report the following position:\n\nPosition Title: [Job Title]\nPosition URL: [Job URL]\n\nReason for reporting:',
    showInSidebar: true,
  },
};
