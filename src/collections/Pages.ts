import { CollectionConfig } from 'payload/types'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

interface PageData {
  slug?: string
  title?: string
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status'],
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
      url: ({ data }: { data: PageData }) => {
        // This will be the preview URL that opens in the live preview pane
        return `${process.env.FRONTEND_URL || 'http://localhost:5173'}/preview/${data?.slug || 'home'}`
      },
    },
  },
  access: {
    read: ({ req }) => {
      // Allow public read for published pages
      if (req.query?.draft) {
        // For draft/preview access, check if it's a preview request
        return (req as any).isPreview === true
      }
      return true
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug for the page (e.g., "home", "about")',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'badge',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'subtitle',
          type: 'textarea',
        },
        {
          name: 'ctaPrimary',
          type: 'text',
        },
        {
          name: 'ctaSecondary',
          type: 'text',
        },
        {
          name: 'trustIndicators',
          type: 'array',
          fields: [
            {
              name: 'icon',
              type: 'text',
            },
            {
              name: 'text',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'benefits',
      type: 'array',
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'icon',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'metric',
          type: 'text',
        },
      ],
    },
    {
      name: 'socialProof',
      type: 'group',
      fields: [
        {
          name: 'stats',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'value',
              type: 'text',
            },
          ],
        },
        {
          name: 'testimonials',
          type: 'array',
          fields: [
            {
              name: 'id',
              type: 'text',
            },
            {
              name: 'name',
              type: 'text',
            },
            {
              name: 'role',
              type: 'text',
            },
            {
              name: 'company',
              type: 'text',
            },
            {
              name: 'content',
              type: 'textarea',
            },
            {
              name: 'rating',
              type: 'number',
              min: 1,
              max: 5,
            },
            {
              name: 'avatar',
              type: 'text',
            },
          ],
        },
        {
          name: 'partners',
          type: 'array',
          fields: [
            {
              name: 'id',
              type: 'text',
            },
            {
              name: 'name',
              type: 'text',
            },
            {
              name: 'logo',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'demo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'subtitle',
          type: 'textarea',
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            {
              name: 'icon',
              type: 'text',
            },
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
          ],
        },
      ],
    },
    {
      name: 'beforeAfter',
      type: 'group',
      fields: [
        {
          name: 'before',
          type: 'array',
          fields: [
            {
              name: 'text',
              type: 'text',
            },
          ],
        },
        {
          name: 'after',
          type: 'array',
          fields: [
            {
              name: 'text',
              type: 'text',
            },
          ],
        },
        {
          name: 'roi',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'value',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'faq',
      type: 'array',
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'question',
          type: 'text',
        },
        {
          name: 'answer',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'subtitle',
          type: 'textarea',
        },
        {
          name: 'phone',
          type: 'text',
        },
        {
          name: 'email',
          type: 'email',
        },
        {
          name: 'address',
          type: 'text',
        },
        {
          name: 'process',
          type: 'array',
          fields: [
            {
              name: 'step',
              type: 'number',
            },
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
          ],
        },
        {
          name: 'guarantees',
          type: 'array',
          fields: [
            {
              name: 'icon',
              type: 'text',
            },
            {
              name: 'text',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'keywords',
          type: 'text',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, req, operation }) => {
        // This hook will be used to trigger live preview updates
        if (operation === 'update') {
          // You can add webhook logic here if needed
          console.log('Page updated:', doc.slug)
        }
      },
    ],
  },
}

export default Pages
