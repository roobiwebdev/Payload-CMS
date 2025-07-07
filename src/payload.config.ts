// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Hero from './collections/Hero'
import Benefits from './collections/Benefits'
import SocialProof from './collections/SocialProof'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Environment variables
const dbUrl = process.env.DATABASE_URI || ''
const secret = process.env.SECRET || ''
// Validate required environment variables
if (!dbUrl) {
  throw new Error('DATABASE_URI environment variable is required')
}

if (!secret) {
  throw new Error('SECRET environment variable is required')
}

// Log configuration (remove in production)
console.log('Payload Config:')
console.log('- Database URI:', dbUrl ? 'SET' : 'NOT SET')
console.log('- Secret:', secret ? 'SET' : 'NOT SET')

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Hero, Benefits, SocialProof],
  editor: lexicalEditor(),
  secret: secret,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: dbUrl,
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  // --- CORS settings to allow local and deployed frontends ---
  cors: [
    'https://ai-booking-nexus.vercel.app', // <-- ADD THIS LINE
    'https://payload-cms-ai-booking.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:8080',
  ],
})
