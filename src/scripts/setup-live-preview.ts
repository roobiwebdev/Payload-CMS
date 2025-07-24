import { getPayload } from 'payload'
import { seedSamplePage } from '../seed/sample-page'

const setupLivePreview = async () => {
  try {
    console.log('🚀 Setting up Live Preview...')

    // Initialize Payload
    const payload = await getPayload({
      // Your payload config
    })

    // Seed sample page
    await seedSamplePage(payload)

    console.log('✅ Live Preview setup completed!')
    console.log('')
    console.log('📋 Next steps:')
    console.log('1. Set environment variables:')
    console.log('   - PREVIEW_TOKEN=your-secret-token')
    console.log('   - FRONTEND_URL=http://localhost:5173')
    console.log('')
    console.log('2. Start your frontend with:')
    console.log('   - VITE_PAYLOAD_URL=http://localhost:3000')
    console.log('   - VITE_PREVIEW_TOKEN=your-secret-token')
    console.log('')
    console.log('3. Access live preview at:')
    console.log('   - Payload Admin: http://localhost:3000/admin')
    console.log('   - Preview URL: http://localhost:5173/preview/home')
  } catch (error) {
    console.error('❌ Error setting up Live Preview:', error)
    process.exit(1)
  }
}

// Run setup if called directly
if (require.main === module) {
  setupLivePreview()
}

export default setupLivePreview
