import type { CollectionConfig } from 'payload'

const Hero: CollectionConfig = {
  slug: 'hero',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'mainTitle',
  },
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'iframeUrl',
      label: 'Background Iframe URL',
      type: 'text',
      required: false,
      defaultValue: 'https://peaceful-brand-237536.framer.app/second',
    },
    {
      name: 'badgeText',
      label: 'Badge Text',
      type: 'text',
      required: true,
      defaultValue: "L'IA révolutionnaire pour centres de formation",
    },
    {
      name: 'mainTitle',
      label: 'Main Title (before gradient)',
      type: 'text',
      required: true,
      defaultValue: 'Automatisez votre centre',
    },
    {
      name: 'gradientTitle',
      label: 'Main Title (gradient part)',
      type: 'text',
      required: true,
      defaultValue: "avec l'IA",
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'textarea',
      required: true,
      defaultValue:
        'Gagnez 15h par semaine grâce à notre outil IA tout-en-un : gestion administrative automatique, conformité Qualiopi, création de contenus et suivi des apprenants.',
    },
    {
      name: 'primaryCtaText',
      label: 'Primary CTA Text',
      type: 'text',
      required: true,
      defaultValue: 'Réserver une démo gratuite',
    },
    {
      name: 'primaryCtaLink',
      label: 'Primary CTA Link',
      type: 'text',
      required: false,
      defaultValue: '#contact',
    },
    {
      name: 'secondaryCtaText',
      label: 'Secondary CTA Text',
      type: 'text',
      required: false,
      defaultValue: 'Voir la démonstration (2min)',
    },
    {
      name: 'secondaryCtaLink',
      label: 'Secondary CTA Link',
      type: 'text',
      required: false,
      defaultValue: '#demo',
    },
    {
      name: 'trustIndicators',
      label: 'Trust Indicators',
      type: 'array',
      minRows: 1,
      maxRows: 5,
      required: false,
      fields: [
        {
          name: 'text',
          label: 'Indicator Text',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { text: '500+ centres déjà équipés' },
        { text: 'Conformité Qualiopi garantie' },
        { text: 'Support IA 24/7' },
      ],
    },
    {
      name: 'showScrollIndicator',
      label: 'Show Scroll Indicator',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}

export default Hero
