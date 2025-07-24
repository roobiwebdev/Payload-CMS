import type { CollectionConfig } from 'payload'

const BeforeAfter: CollectionConfig = {
  slug: 'beforeAfter',
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
        // Preview URL for Before/After section
        return `${process.env.FRONTEND_URL || 'http://localhost:8081'}/preview/before-after/${data?.id || 'new'}`
      },
    },
  },
  labels: {
    singular: 'Before/After Section',
    plural: 'Before/After Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
      defaultValue: 'Avant / Après',
    },
    {
      name: 'subtitle',
      label: 'Section Subtitle',
      type: 'text',
      required: true,
      defaultValue: "l'intégration de notre IA",
    },
    {
      name: 'description',
      label: 'Section Description',
      type: 'textarea',
      required: true,
      defaultValue: 'Découvrez la transformation radicale de votre quotidien professionnel',
    },
    {
      name: 'beforeItems',
      label: 'Before Items',
      type: 'array',
      minRows: 8,
      maxRows: 20,
      required: true,
      fields: [
        {
          name: 'text',
          label: 'Before Item Text',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { text: '15h/semaine perdues en tâches administratives' },
        { text: 'Stress permanent des audits Qualiopi' },
        { text: 'Création manuelle de contenus (2-3 jours/module)' },
        { text: 'Suivi des apprenants sur Excel' },
        { text: 'Gestion des plannings complexe' },
        { text: 'Réponses aux questions répétitives' },
        { text: 'Rapports manuels chronophages' },
        { text: "Risque d'erreurs humaines" },
      ],
    },
    {
      name: 'afterItems',
      label: 'After Items',
      type: 'array',
      minRows: 8,
      maxRows: 20,
      required: true,
      fields: [
        {
          name: 'text',
          label: 'After Item Text',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { text: '15h/semaine libérées pour la pédagogie' },
        { text: 'Conformité Qualiopi automatique et garantie' },
        { text: "Contenus générés en 10 minutes par l'IA" },
        { text: 'Suivi intelligent et prédictif des apprenants' },
        { text: 'Planification automatisée et optimisée' },
        { text: 'Assistant IA 24/7 pour toutes les questions' },
        { text: 'Rapports automatiques et KPIs temps réel' },
        { text: "Zéro erreur grâce à l'automatisation" },
      ],
    },
    {
      name: 'roiStats',
      label: 'ROI Stats',
      type: 'array',
      minRows: 3,
      maxRows: 5,
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
        { value: 300, suffix: '%', label: 'Dès la première année' },
        { value: 15, suffix: 'h', label: 'Économisées par semaine' },
        { value: 3000, suffix: '€', label: 'Économies mensuelles moyennes' },
      ],
    },
    {
      name: 'ctaText',
      label: 'CTA Text',
      type: 'text',
      required: true,
      defaultValue: 'Calculer mon ROI personnalisé',
    },
  ],
}

export default BeforeAfter
