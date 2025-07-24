import { Payload } from 'payload'

export const seedSamplePage = async (payload: Payload) => {
  try {
    // Check if sample page already exists
    const existingPage = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: 'home' },
      },
    })

    if (existingPage.docs.length > 0) {
      console.log('Sample page already exists, skipping...')
      return
    }

    // Create sample page
    const samplePage = await payload.create({
      collection: 'pages',
      data: {
        title: 'Home Page',
        slug: 'home',
        status: 'draft',
        hero: {
          badge: "L'IA révolutionnaire pour centres de formation",
          title: "Automatisez votre centre avec l'IA",
          subtitle:
            'Gagnez 15h par semaine grâce à notre outil IA tout-en-un : gestion administrative automatique, conformité Qualiopi, création de contenus et suivi des apprenants.',
          ctaPrimary: 'Réserver une démo gratuite',
          ctaSecondary: 'Voir la démonstration (2min)',
          trustIndicators: [
            { icon: 'users', text: '500+ centres déjà équipés' },
            { icon: 'shield', text: 'Conformité Qualiopi garantie' },
            { icon: 'headphones', text: 'Support IA 24/7' },
          ],
        },
        benefits: [
          {
            id: 'time-saving',
            icon: 'Clock',
            title: 'Gain de temps radical',
            description:
              "Économisez 15h par semaine grâce à l'automatisation complète des tâches administratives répétitives.",
            metric: '75% de temps économisé',
          },
          {
            id: 'qualiopi',
            icon: 'Shield',
            title: 'Conformité Qualiopi automatique',
            description:
              "Notre IA s'assure que tous vos processus respectent automatiquement les critères Qualiopi en temps réel.",
            metric: '100% de conformité',
          },
        ],
        socialProof: {
          stats: [
            { label: 'Centres équipés', value: '500+' },
            { label: 'Gagnées / semaine', value: '15h' },
            { label: 'Satisfaction client', value: '98%' },
            { label: 'Support IA', value: '24/7' },
          ],
          testimonials: [
            {
              id: 'marie-dubois',
              name: 'Marie Dubois',
              role: 'Directrice pédagogique',
              company: 'FormationPro Lyon',
              content:
                "Notre productivité a explosé ! 15h de gagnées par semaine, conformité Qualiopi automatique. L'IA anticipe même nos besoins.",
              rating: 5,
              avatar: 'MD',
            },
          ],
          partners: [
            { id: 'qualiopi', name: 'Qualiopi', logo: '🏆' },
            { id: 'france-competences', name: 'France Compétences', logo: '🇫🇷' },
          ],
        },
        demo: {
          title: "Découvrez l'outil en action en 2 minutes",
          subtitle:
            'Voyez comment notre IA transforme concrètement la gestion de votre centre de formation',
          features: [
            {
              icon: 'Monitor',
              title: 'Dashboard intelligent',
              description: "Vue d'ensemble temps réel de votre centre avec KPIs automatiques",
            },
          ],
        },
        beforeAfter: {
          before: [
            { text: '15h/semaine perdues en tâches administratives' },
            { text: 'Stress permanent des audits Qualiopi' },
          ],
          after: [
            { text: '15h/semaine libérées pour la pédagogie' },
            { text: 'Conformité Qualiopi automatique et garantie' },
          ],
          roi: [
            { label: 'ROI', value: '300%' },
            { label: 'Économies mensuelles', value: '€3000' },
          ],
        },
        faq: [
          {
            id: 'implementation-time',
            question: "Combien de temps faut-il pour implémenter l'outil ?",
            answer:
              "L'implémentation complète prend entre 24h et 48h maximum. Notre équipe technique s'occupe de tout : migration des données, formation de vos équipes (30 minutes), et paramétrage personnalisé.",
          },
        ],
        contact: {
          title: 'Réservez votre démo personnalisée gratuite',
          subtitle:
            'Découvrez en 30 minutes comment notre IA peut transformer votre centre de formation. Démo adaptée à vos besoins spécifiques.',
          phone: '01 23 45 67 89',
          email: 'demo@formation-ia.com',
          address: 'Paris & visioconférence',
          process: [
            {
              step: 1,
              title: 'Analyse de vos besoins (10 min)',
              description: 'Compréhension de votre contexte actuel',
            },
            {
              step: 2,
              title: 'Démonstration personnalisée (15 min)',
              description: "Parcours adapté à votre secteur d'activité",
            },
            {
              step: 3,
              title: 'Questions & calcul ROI (5 min)',
              description: 'Estimation de votre retour sur investissement',
            },
          ],
          guarantees: [
            { icon: 'CheckCircle', text: 'Démo 100% gratuite et sans engagement' },
            { icon: 'Clock', text: 'Réponse garantie sous 2h ouvrées' },
            { icon: 'Shield', text: 'Données 100% sécurisées (RGPD)' },
            { icon: 'Shield', text: 'Aucune prospection commerciale' },
          ],
        },
        meta: {
          title: 'IA pour Centres de Formation - Automatisation Qualiopi',
          description:
            "Automatisez votre centre de formation avec l'IA. Gain de 15h/semaine, conformité Qualiopi automatique, gestion administrative intelligente.",
          keywords: 'IA, formation, Qualiopi, automatisation, centre de formation',
        },
      },
    })

    console.log('Sample page created successfully:', samplePage.id)
  } catch (error) {
    console.error('Error creating sample page:', error)
  }
}
