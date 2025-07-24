import type { CollectionConfig } from 'payload'

const Contact: CollectionConfig = {
  slug: 'contact',
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
        // Preview URL for Contact section
        return `${process.env.FRONTEND_URL || 'http://localhost:8081'}/preview/contact/${data?.id || 'new'}`
      },
    },
  },
  labels: {
    singular: 'Contact Section',
    plural: 'Contact Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
      defaultValue: 'Réservez votre démo',
    },
    {
      name: 'subtitle',
      label: 'Section Subtitle',
      type: 'text',
      required: true,
      defaultValue: 'personnalisée gratuite',
    },
    {
      name: 'description',
      label: 'Section Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Découvrez en 30 minutes comment notre IA peut transformer votre centre de formation. Démo adaptée à vos besoins spécifiques.',
    },
    {
      name: 'contactInfo',
      label: 'Contact Information',
      type: 'group',
      fields: [
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'text',
          required: true,
          defaultValue: '01 23 45 67 89',
        },
        {
          name: 'phoneHours',
          label: 'Phone Hours',
          type: 'text',
          required: true,
          defaultValue: 'Lun-Ven 9h-18h',
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'text',
          required: true,
          defaultValue: 'demo@formation-ia.com',
        },
        {
          name: 'emailResponseTime',
          label: 'Email Response Time',
          type: 'text',
          required: true,
          defaultValue: 'Réponse sous 2h',
        },
        {
          name: 'location',
          label: 'Location',
          type: 'text',
          required: true,
          defaultValue: 'Paris & visioconférence',
        },
        {
          name: 'locationNote',
          label: 'Location Note',
          type: 'text',
          required: true,
          defaultValue: 'Démos partout en France',
        },
      ],
    },
    {
      name: 'demoProcess',
      label: 'Demo Process Steps',
      type: 'array',
      minRows: 3,
      maxRows: 5,
      required: true,
      fields: [
        {
          name: 'stepNumber',
          label: 'Step Number',
          type: 'number',
          required: true,
        },
        {
          name: 'title',
          label: 'Step Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Step Description',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        {
          stepNumber: 1,
          title: 'Analyse de vos besoins (10 min)',
          description: 'Compréhension de votre contexte actuel',
        },
        {
          stepNumber: 2,
          title: 'Démonstration personnalisée (15 min)',
          description: "Parcours adapté à votre secteur d'activité",
        },
        {
          stepNumber: 3,
          title: 'Questions & calcul ROI (5 min)',
          description: 'Estimation de votre retour sur investissement',
        },
      ],
    },
    {
      name: 'guarantees',
      label: 'Guarantees',
      type: 'array',
      minRows: 4,
      maxRows: 10,
      required: true,
      fields: [
        {
          name: 'icon',
          label: 'Icon Name',
          type: 'text',
          required: true,
          defaultValue: 'CheckCircle',
          admin: {
            description: 'Use lucide-react icon names like CheckCircle, Shield',
          },
        },
        {
          name: 'text',
          label: 'Guarantee Text',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { icon: 'CheckCircle', text: 'Démo 100% gratuite et sans engagement' },
        { icon: 'CheckCircle', text: 'Réponse garantie sous 2h ouvrées' },
        { icon: 'CheckCircle', text: 'Données 100% sécurisées (RGPD)' },
        { icon: 'Shield', text: 'Aucune prospection commerciale' },
      ],
    },
    {
      name: 'finalCTA',
      label: 'Final CTA',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Final CTA Title',
          type: 'text',
          required: true,
          defaultValue: 'Prêt à transformer votre centre ?',
        },
        {
          name: 'description',
          label: 'Final CTA Description',
          type: 'textarea',
          required: true,
          defaultValue:
            'Rejoignez les 500+ centres qui ont déjà automatisé leur gestion avec notre IA',
        },
        {
          name: 'buttonText',
          label: 'Final CTA Button Text',
          type: 'text',
          required: true,
          defaultValue: 'Commencer maintenant',
        },
      ],
    },
  ],
}

export default Contact
