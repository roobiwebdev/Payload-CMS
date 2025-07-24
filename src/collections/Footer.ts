import type { CollectionConfig } from 'payload'

const Footer: CollectionConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'companyName',
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
        // Preview URL for Footer section
        return `${process.env.FRONTEND_URL || 'http://localhost:8081'}/preview/footer/${data?.id || 'new'}`
      },
    },
  },
  labels: {
    singular: 'Footer',
    plural: 'Footers',
  },
  fields: [
    {
      name: 'companyName',
      label: 'Company Name',
      type: 'text',
      required: true,
      defaultValue: 'FormationIA',
    },
    {
      name: 'companyDescription',
      label: 'Company Description',
      type: 'textarea',
      required: true,
      defaultValue:
        "L'intelligence artificielle au service de votre centre de formation. Automatisation, conformité et excellence pédagogique.",
    },
    {
      name: 'socialLinks',
      label: 'Social Links',
      type: 'array',
      minRows: 3,
      maxRows: 5,
      required: true,
      fields: [
        {
          name: 'platform',
          label: 'Platform',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g. Linkedin, Twitter, Youtube',
          },
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true,
          defaultValue: '#',
        },
      ],
      defaultValue: [
        { platform: 'Linkedin', url: '#' },
        { platform: 'Twitter', url: '#' },
        { platform: 'Youtube', url: '#' },
      ],
    },
    {
      name: 'solutionLinks',
      label: 'Solution Links',
      type: 'array',
      minRows: 5,
      maxRows: 10,
      required: true,
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true,
          defaultValue: '#',
        },
      ],
      defaultValue: [
        { label: 'Fonctionnalités', url: '#' },
        { label: 'Conformité Qualiopi', url: '#' },
        { label: 'Création de contenus IA', url: '#' },
        { label: 'Analytics prédictifs', url: '#' },
        { label: 'Support 24/7', url: '#' },
      ],
    },
    {
      name: 'resourcesLinks',
      label: 'Resources Links',
      type: 'array',
      minRows: 5,
      maxRows: 10,
      required: true,
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true,
          defaultValue: '#',
        },
      ],
      defaultValue: [
        { label: "Centre d'aide", url: '#' },
        { label: 'Documentation', url: '#' },
        { label: "Cas d'usage", url: '#' },
        { label: 'Webinaires', url: '#' },
        { label: 'Blog', url: '#' },
      ],
    },
    {
      name: 'contactInfo',
      label: 'Contact Information',
      type: 'group',
      fields: [
        {
          name: 'phone',
          label: 'Phone',
          type: 'text',
          required: true,
          defaultValue: '01 23 45 67 89',
        },
        {
          name: 'email',
          label: 'Email',
          type: 'text',
          required: true,
          defaultValue: 'contact@formation-ia.com',
        },
        {
          name: 'address',
          label: 'Address',
          type: 'textarea',
          required: true,
          defaultValue: '123 Avenue Innovation\n75001 Paris, France',
        },
      ],
    },
    {
      name: 'bottomLinks',
      label: 'Bottom Links',
      type: 'array',
      minRows: 4,
      maxRows: 10,
      required: true,
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true,
          defaultValue: '#',
        },
      ],
      defaultValue: [
        { label: 'Mentions légales', url: '#' },
        { label: 'Politique de confidentialité', url: '#' },
        { label: 'CGU', url: '#' },
        { label: 'Cookies', url: '#' },
      ],
    },
  ],
}

export default Footer
