# Deployment Guide - Environment Variables

## Netlify Environment Variables Setup

When deploying this application to Netlify, you need to configure the following environment variables in the Netlify Dashboard.

### Required Environment Variables

#### OPENAI_API_KEY (Server-side only)
- **Used By:** Netlify serverless function `netlify/functions/analyse-image.js`
- **Purpose:** OpenAI API authentication for image analysis
- **Format:** Your OpenAI API key (starts with `sk-`)
- **Important:** This is NOT prefixed with VITE_ and only exists on the server
- **Where to Set:** 
  1. Go to Netlify Dashboard → Your Site → Site Settings → Build & Deploy → Environment
  2. Click "Add Environment Variable"
  3. Key: `OPENAI_API_KEY`
  4. Value: Your OpenAI API key from https://platform.openai.com/api-keys
  5. Click Save

#### VITE_SUPABASE_URL (Client-side)
- **Used By:** Client-side Supabase initialization
- **Purpose:** Supabase project URL
- **Format:** `https://your-project.supabase.co`

#### VITE_SUPABASE_ANON_KEY (Client-side)
- **Used By:** Client-side Supabase anonymous key
- **Purpose:** Public Supabase authentication key
- **Note:** This is intended to be public (prefixed with VITE_)

## Important Security Notes

### API Key Security
- The `OPENAI_API_KEY` is **not** prefixed with `VITE_` because it should never reach the client
- All OpenAI calls go through the serverless function at `/.netlify/functions/analyse-image`
- The API key never appears in the browser bundle or network requests visible to users
- This protects your API quota and prevents unauthorized usage

### Environment Variable Prefixes Explained
- **VITE_ prefix:** These variables are exposed to the client bundle and visible in browser
  - Use only for non-sensitive data
  - Examples: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
  
- **No prefix (like OPENAI_API_KEY):** These variables are only available server-side
  - Use for sensitive credentials like API keys
  - Never exposed to the client
  - Only accessible in Netlify functions and build processes

## Deployment Steps

1. Connect your repository to Netlify
2. Set the environment variables in Netlify Dashboard as described above
3. Deploy your site (Netlify will automatically deploy the serverless functions)
4. Test the admin page functionality to ensure the serverless function works correctly

## Troubleshooting

### Function Returns "API key not available" Error
- Check that `OPENAI_API_KEY` is set in Netlify Environment variables (no VITE_ prefix)
- Verify the key is correct by testing it directly with OpenAI
- Check Netlify function logs in the dashboard

### CORS or Network Errors
- The function should be automatically available at `/.netlify/functions/analyse-image`
- Check browser console for detailed error messages
- Review Netlify function logs for server-side errors
