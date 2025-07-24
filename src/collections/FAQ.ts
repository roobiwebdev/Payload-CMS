import type { CollectionConfig } from 'payload'

const FAQ: CollectionConfig = {
  slug: 'faq',
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
        // Preview URL for FAQ section
        return `${process.env.FRONTEND_URL || 'http://localhost:8081'}/preview/faq/${data?.id || 'new'}`
      },
    },
  },
  labels: {
    singular: 'FAQ Section',
    plural: 'FAQ Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
      defaultValue: 'Questions fréquentes',
    },
    {
      name: 'subtitle',
      label: 'Section Subtitle',
      type: 'text',
      required: true,
      defaultValue: 'et réponses expertes',
    },
    {
      name: 'description',
      label: 'Section Description',
      type: 'textarea',
      required: true,
      defaultValue: 'Toutes les réponses à vos questions pour prendre la meilleure décision',
    },
    {
      name: 'faqs',
      label: 'FAQ Items',
      type: 'array',
      minRows: 8,
      maxRows: 20,
      required: true,
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'textarea',
          required: true,
        },
      ],
      defaultValue: [
        {
          question: "Combien de temps faut-il pour implémenter l'outil ?",
          answer:
            "L'implémentation complète prend entre 24h et 48h maximum. Notre équipe technique s'occupe de tout : migration des données, formation de vos équipes (30 minutes), et paramétrage personnalisé. Vous êtes opérationnels en moins de 2 jours.",
        },
        {
          question: "L'outil est-il vraiment conforme Qualiopi ?",
          answer:
            'Absolument. Notre IA est développée en partenariat avec des experts Qualiopi certifiés. Elle respecte automatiquement tous les 32 critères, génère les preuves nécessaires et vous prépare aux audits. Nous garantissons la conformité à 100%.',
        },
        {
          question: 'Que se passe-t-il avec nos données existantes ?',
          answer:
            'Migration sécurisée et automatique de toutes vos données (apprenants, formations, historiques). Aucune perte de données, backup complet avant migration. Vos données restent 100% privées et sécurisées (RGPD compliant).',
        },
        {
          question: "L'IA peut-elle vraiment créer des contenus de qualité ?",
          answer:
            'Notre IA génère des contenus personnalisés basés sur vos spécificités métier. Elle crée : modules de formation, exercices, évaluations, supports visuels. Vous gardez le contrôle total avec possibilité de modification en temps réel.',
        },
        {
          question: 'Quel est le coût réel et y a-t-il des frais cachés ?',
          answer:
            'Tarification transparente tout inclus : plateforme, support 24/7, mises à jour, formation équipe, conformité Qualiopi. Pas de frais cachés. ROI moyen de 300% dès la première année grâce aux 15h/semaine économisées.',
        },
        {
          question: 'Que faire si mon équipe résiste au changement ?',
          answer:
            "Accompagnement humain inclus : formation personnalisée de 30 minutes par personne, support dédié pendant 3 mois, interface ultra-intuitive. 98% de nos clients adoptent l'outil en moins d'une semaine.",
        },
        {
          question: "L'outil fonctionne-t-il pour tous types de formations ?",
          answer:
            "Oui, notre IA s'adapte à tous secteurs : formation professionnelle, continue, apprentissage, reconversion, etc. Elle apprend de vos spécificités métier et s'améliore en continu selon vos besoins.",
        },
        {
          question: "Que se passe-t-il si l'outil ne convient pas ?",
          answer:
            "Garantie satisfait ou remboursé 30 jours. Si l'outil ne vous convient pas, remboursement intégral + récupération de vos données dans leur format d'origine. Zero risque pour vous.",
        },
      ],
    },
    {
      name: 'ctaText',
      label: 'CTA Text',
      type: 'text',
      required: true,
      defaultValue: 'Poser ma question en démo',
    },
  ],
}

export default FAQ
