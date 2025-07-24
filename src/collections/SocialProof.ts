import type { CollectionConfig } from 'payload'

const SocialProof: CollectionConfig = {
  slug: 'socialProof',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
      url: ({ data }) => {
        // Preview URL for Social Proof section
        return `${process.env.FRONTEND_URL || 'http://localhost:8081'}/preview/social-proof/${data?.id || 'new'}`
      },
    },
  },
  labels: {
    singular: 'Social Proof Section',
    plural: 'Social Proof Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
      defaultValue: 'Ils ont transformé leur centre',
    },
    {
      name: 'subtitle',
      label: 'Section Subtitle',
      type: 'text',
      required: true,
      defaultValue: 'avec notre IA',
    },
    {
      name: 'stats',
      label: 'Stats',
      type: 'array',
      minRows: 4,
      maxRows: 4,
      required: true,
      fields: [
        {
          name: 'value',
          label: 'Value',
          type: 'number',
          required: true,
        },
        {
          name: 'suffix',
          label: 'Suffix',
          type: 'text',
          required: false,
        },
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { value: 500, suffix: '+', label: 'Centres équipés' },
        { value: 15, suffix: 'h', label: 'Gagnées / semaine' },
        { value: 98, suffix: '%', label: 'Satisfaction client' },
        { value: 24, suffix: '/7', label: 'Support IA' },
      ],
    },
    {
      name: 'testimonials',
      label: 'Testimonials',
      type: 'array',
      minRows: 3,
      maxRows: 10,
      required: true,
      fields: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'role', label: 'Role', type: 'text', required: true },
        { name: 'company', label: 'Company', type: 'text', required: true },
        { name: 'content', label: 'Content', type: 'textarea', required: true },
        { name: 'rating', label: 'Rating', type: 'number', required: true, min: 1, max: 5 },
        { name: 'avatar', label: 'Avatar Text', type: 'text', required: true },
      ],
      defaultValue: [
        {
          name: 'Marie Dubois',
          role: 'Directrice pédagogique',
          company: 'FormationPro Lyon',
          content:
            "Notre productivité a explosé ! 15h de gagnées par semaine, conformité Qualiopi automatique. L'IA anticipe même nos besoins.",
          rating: 5,
          avatar: 'MD',
        },
        {
          name: 'Jean-Pierre Martin',
          role: 'Responsable qualité',
          company: 'Centre Excellence Formation',
          content:
            "Plus jamais de stress pour les audits Qualiopi. L'outil gère tout automatiquement. Nos apprenants ont 30% de meilleurs résultats.",
          rating: 5,
          avatar: 'JPM',
        },
        {
          name: 'Sophie Leclerc',
          role: 'Coordinatrice pédagogique',
          company: 'InnovaForm',
          content:
            "La création de contenus est révolutionnaire. En 10 minutes, j'ai des modules complets personnalisés. Incroyable !",
          rating: 5,
          avatar: 'SL',
        },
      ],
    },
    {
      name: 'partners',
      label: 'Partners',
      type: 'array',
      minRows: 6,
      maxRows: 10,
      required: true,
      fields: [
        {
          name: 'name',
          label: 'Partner Name',
          type: 'text',
          required: true,
        },
        {
          name: 'logo',
          label: 'Partner Logo (Emoji or Text)',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { name: 'Qualiopi', logo: '🏆' },
        { name: 'France Compétences', logo: '🇫🇷' },
        { name: 'OPCO', logo: '💼' },
        { name: 'Pôle Emploi', logo: '👥' },
        { name: 'Région', logo: '🏛️' },
        { name: 'CPF', logo: '📚' },
      ],
    },
  ],
}

export default SocialProof
