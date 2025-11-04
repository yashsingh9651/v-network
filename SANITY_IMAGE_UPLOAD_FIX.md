# Fixing Sanity Image Upload Issues

If you're getting "Upload failed" errors when trying to upload images in Sanity Studio, follow these steps:

## 1. Check API Token Permissions

Your API token needs **Editor** or **Administrator** permissions to upload files.

### Steps to verify/fix:

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project: `iwk83qk6`
3. Go to **API** → **Tokens**
4. Find your token or create a new one
5. Ensure it has **Editor** permissions (not just Viewer)
6. If you created a new token, copy it to `.env` file

## 2. Update CORS Settings

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to **API** → **CORS Origins**
4. Add these origins:
   - `http://localhost:3000` (with credentials)
   - `http://127.0.0.1:3000` (with credentials)
5. Save changes

## 3. Verify Environment Variables

Check that `.env` file has correct values (without quotes):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=iwk83qk6
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-02
SANITY_API_TOKEN=your_actual_token_here
```

## 4. Restart Dev Server

After making changes:

```bash
# Stop all node processes
Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue

# Start dev server
pnpm dev
```

## 5. Check Browser Console

Open browser console (F12) in Sanity Studio and look for:
- CORS errors
- 401/403 authentication errors
- Network errors

## Common Issues:

### "CORS policy blocked"
→ Add localhost to CORS origins in Sanity project settings

### "401 Unauthorized"
→ API token is missing or invalid, check `.env` file

### "403 Forbidden"
→ API token doesn't have sufficient permissions, needs Editor role

### "413 Payload Too Large"
→ Image file is too big, try compressing it

## Test Upload

1. Go to `http://localhost:3000/studio`
2. Open **Author** document type
3. Create or edit an author
4. Try uploading a small image (< 1MB) first
5. Check console for any errors

If the issue persists, share the exact error message from the browser console!
