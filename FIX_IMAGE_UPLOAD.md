# URGENT: Fix Image Upload in Sanity Studio

## The Problem
Images are not uploading because of CORS (Cross-Origin Resource Sharing) restrictions.

## Solution: Add CORS Origin in Sanity Dashboard

### Step-by-Step Instructions:

1. **Open Sanity Management Dashboard**
   - Go to: https://www.sanity.io/manage
   - Login with your Sanity account

2. **Select Your Project**
   - Find and click on project: `iwk83qk6`

3. **Navigate to API Settings**
   - Click on **API** in the left sidebar
   - Click on **CORS Origins**

4. **Add Localhost Origin**
   - Click **Add CORS origin** button
   - In the "Origin" field, enter: `http://localhost:3000`
   - Check ✅ **Allow credentials**
   - Click **Save**

5. **Verify Token Permissions**
   - Still in API settings, click **Tokens**
   - Find your token (or create a new one)
   - Ensure it has **Editor** or **Administrator** role (NOT just Viewer)
   - If you created a new token, copy it to your `.env` file

6. **Restart Your Dev Server**
   ```powershell
   # Stop the server (Ctrl+C)
   # Then start again:
   pnpm dev
   ```

7. **Test Image Upload**
   - Go to `http://localhost:3000/studio`
   - Create/Edit an Author
   - Try uploading an image

## If Still Not Working:

### Check Browser Console (F12):
Look for errors like:
- ❌ "CORS policy blocked" → Add localhost to CORS origins
- ❌ "401 Unauthorized" → Check API token in `.env` file
- ❌ "403 Forbidden" → Token needs Editor permissions

### Verify .env file:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=iwk83qk6
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-02
SANITY_API_TOKEN=your_actual_editor_token_here
```

### Quick CORS Test:
Open this URL in browser:
```
https://iwk83qk6.api.sanity.io/v2024-11-02/assets/images/production
```

If you see a JSON response, your project is accessible.

## Why This Happens:
Sanity Studio runs in the browser at `localhost:3000`, but tries to upload files to `sanity.io` servers. Without CORS configuration, browsers block these cross-origin requests for security reasons.

## Need Help?
Share the exact error message from browser console (F12 → Console tab) when you try to upload!
