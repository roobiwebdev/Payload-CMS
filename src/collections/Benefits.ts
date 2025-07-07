import type { CollectionConfig } from 'payload'

const Benefits: CollectionConfig = {
  slug: 'benefits',
  access: {
    read: () => true, // Public read access
  },
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Benefits Section',
    plural: 'Benefits Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
      defaultValue: 'Transformez votre centre',
    },
    {
      name: 'subtitle',
      label: 'Section Subtitle',
      type: 'textarea',
      required: true,
      defaultValue:
        'Découvrez comment notre IA révolutionne la gestion de votre centre de formation',
    },
    {
      name: 'benefits',
      label: 'Benefits Cards',
      type: 'array',
      minRows: 6,
      maxRows: 10,
      required: true,
      fields: [
        {
          name: 'icon',
          label: 'Icon Name',
          type: 'text',
          required: true,
          admin: {
            description:
              'Use icon names from lucide-react like Clock, Shield, Brain, Users, BarChart3, Zap',
          },
        },
        {
          name: 'title',
          label: 'Card Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Card Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'metric',
          label: 'Card Metric',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        {
          icon: 'Clock',
          title: 'Gain de temps radical',
          description:
            "Économisez 15h par semaine grâce à l'automatisation complète des tâches administratives répétitives.",
          metric: '75% de temps économisé',
        },
        {
          icon: 'Shield',
          title: 'Conformité Qualiopi automatique',
          description:
            "Notre IA s'assure que tous vos processus respectent automatiquement les critères Qualiopi en temps réel.",
          metric: '100% de conformité',
        },
        {
          icon: 'Brain',
          title: 'Création de contenus intelligente',
          description:
            'Générez des modules de formation, évaluations et supports pédagogiques adaptés à vos apprenants.',
          metric: '10x plus rapide',
        },
        {
          icon: 'Users',
          title: 'Suivi personnalisé des apprenants',
          description:
            "IA qui analyse les performances et propose des parcours d'apprentissage personnalisés pour chaque apprenant.",
          metric: '85% de satisfaction',
        },
        {
          icon: 'BarChart3',
          title: 'Analytics prédictifs',
          description:
            'Anticipez les difficultés, identifiez les risques de décrochage et optimisez vos formations en continu.',
          metric: "30% d'amélioration",
        },
        {
          icon: 'Zap',
          title: 'Support IA 24/7',
          description:
            'Assistant intelligent disponible en permanence pour vous et vos équipes, réponses instantanées garanties.',
          metric: 'Disponible 24/7',
        },
      ],
    },
    {
      name: 'ctaText',
      label: 'CTA Text',
      type: 'text',
      required: true,
      defaultValue: 'Découvrir ces bénéfices en démo',
    },
  ],
}

export default Benefits
