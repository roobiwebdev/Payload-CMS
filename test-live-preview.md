# 🧪 Live Preview Testing Checklist

## Pre-Test Setup

### 1. Environment Variables Check
Make sure you have these in your `.env.local` file:

```bash
PREVIEW_TOKEN=ec3ff5755a64782cebe0f9b8118fd48a3df2001791eb9f00856392042545d512
FRONTEND_URL=http://localhost:5173
```

### 2. Services Status
- ✅ Payload CMS running on http://localhost:3000
- ✅ Frontend running on http://localhost:5173
- ✅ Both services started without errors

## Testing Steps

### Step 1: Access Admin
1. Go to http://localhost:3000/admin
2. Login with your credentials
3. You should see the dashboard

### Step 2: Check Pages Collection
1. Look for "Pages" in the left sidebar
2. If not visible, restart Payload CMS
3. Check browser console for errors

### Step 3: Create Test Page
1. Click "Pages" → "Create New"
2. Fill in:
   - Title: "Test Page"
   - Slug: "test"
   - Status: "Draft"
3. Add some hero content
4. Save the page

### Step 4: Test Live Preview
1. In the page editor, look for "Live Preview" button
2. Click it to open preview pane
3. Should see frontend at http://localhost:5173/preview/test

### Step 5: Test Real-time Updates
1. Make changes in the editor
2. Watch for instant updates in preview
3. Check browser console for any errors

## Common Issues & Solutions

### Issue: Pages collection not visible
**Solution**: Restart Payload CMS and check for TypeScript errors

### Issue: Live Preview button missing
**Solution**: Check environment variables and restart services

### Issue: Preview shows white page
**Solution**: Check frontend console for errors, verify environment variables

### Issue: CORS errors
**Solution**: Verify CORS settings in payload.config.ts

## Success Indicators
- ✅ Pages collection visible in admin
- ✅ Live Preview button appears in page editor
- ✅ Preview pane opens with frontend content
- ✅ Real-time updates work
- ✅ No console errors 