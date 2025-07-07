import type { CollectionConfig } from 'payload'

const Demo: CollectionConfig = {
  slug: 'demo',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Demo Section',
    plural: 'Demo Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
      defaultValue: "Découvrez l'outil en action",
    },
    {
      name: 'subtitle',
      label: 'Section Subtitle',
      type: 'text',
      required: true,
      defaultValue: 'en 2 minutes',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Voyez comment notre IA transforme concrètement la gestion de votre centre de formation',
    },
    {
      name: 'videoThumbnail',
      label: 'Video Thumbnail URL',
      type: 'text',
      required: true,
      defaultValue: '/dashboard.png',
    },
    {
      name: 'videoTitle',
      label: 'Video Title',
      type: 'text',
      required: true,
      defaultValue: 'Démonstration interactive',
    },
    {
      name: 'videoDescription',
      label: 'Video Description',
      type: 'textarea',
      required: true,
      defaultValue: 'Découvrez toutes les fonctionnalités en 2 minutes',
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      minRows: 3,
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
              'Use lucide-react icon names: Play, Monitor, Smartphone, Tablet, ArrowRight',
          },
          defaultValue: 'Monitor',
        },
        {
          name: 'title',
          label: 'Feature Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Feature Description',
          type: 'textarea',
          required: true,
        },
      ],
      defaultValue: [
        {
          icon: 'Monitor',
          title: 'Dashboard intelligent',
          description: "Vue d'ensemble temps réel de votre centre avec KPIs automatiques",
        },
        {
          icon: 'Smartphone',
          title: 'Mobile-first',
          description: 'Accès complet depuis mobile, tablette ou ordinateur',
        },
        {
          icon: 'Tablet',
          title: 'Interface intuitive',
          description: 'Prise en main immédiate, formation de 30 minutes maximum',
        },
      ],
    },
    {
      name: 'ctaText',
      label: 'CTA Text',
      type: 'text',
      required: true,
      defaultValue: "Tester l'outil en démo personnalisée",
    },
  ],
}

export default Demo
