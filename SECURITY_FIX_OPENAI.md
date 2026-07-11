# Security Fix: OpenAI API Key Protection

## Summary
The OpenAI API key has been moved from client-side code to a Netlify serverless function, preventing the key from being exposed in the browser bundle or network requests.

## Changes Made

### 1. New Netlify Serverless Function
**File:** `netlify/functions/analyse-image.js`

- Accepts POST requests with base64 image data, category, and difficulty
- Calls OpenAI API server-side with `gpt-4o-mini` model
- Uses the same prompt logic that was previously in Admin.jsx
- Reads API key from `process.env.OPENAI_API_KEY` (server-only, not VITE_ prefixed)
- Returns parsed JSON response with question data, answers, correct answer, and fact
- Includes comprehensive error handling and logging
- Validates all required input fields

### 2. Updated Admin.jsx
**File:** `src/pages/Admin.jsx`

**Changes:**
- Removed direct OpenAI API call to `https://api.openai.com/v1/chat/completions`
- Removed `VITE_OPENAI_API_KEY` environment variable reference
- Updated to call serverless function at `/.netlify/functions/analyse-image` instead
- Sends POST request with base64 image, category, and difficulty
- Receives parsed JSON response and displays results the same way as before
- All form field population logic remains identical

**Code Comparison:**
```javascript
// OLD (Exposed API Key)
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    // ...
  },
  // ...
})

// NEW (Protected)
const response = await fetch('/.netlify/functions/analyse-image', {
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    imageData: base64,
    category: category,
    difficulty: difficulty,
  }),
})
```

### 3. Deployment Documentation
**File:** `DEPLOYMENT.md`

Contains:
- Environment variable setup instructions for Netlify Dashboard
- Explanation of VITE_ prefixed vs non-prefixed variables
- Security notes about API key protection
- Troubleshooting guide for common issues

## Security Improvements

### Before (Vulnerable)
- ❌ API key visible in browser JavaScript bundle
- ❌ API key sent in plaintext over network (though HTTPS encrypted)
- ❌ Anyone with access to dist files could extract the key
- ❌ Unauthorized users could make OpenAI API calls using the key
- ❌ No control over API usage or rate limiting

### After (Secure)
- ✅ API key only exists on Netlify server
- ✅ API key never exposed to client or network
- ✅ Serverless function validates all requests before calling OpenAI
- ✅ API key cannot be extracted or reused by unauthorized parties
- ✅ Netlify function logs provide audit trail of usage
- ✅ Can implement rate limiting at the function level if needed

## How It Works

1. **User uploads image in Admin panel**
   - Image is converted to base64 on client
   - Category and difficulty selected by user

2. **Client sends to serverless function**
   - POST request to `/.netlify/functions/analyse-image`
   - Includes base64 image data, category, and difficulty
   - No API key sent from client

3. **Serverless function processes request**
   - Validates input fields
   - Reads OpenAI API key from server environment variables
   - Constructs prompt with category-specific guidelines
   - Calls OpenAI API from secure server
   - Parses JSON response

4. **Response sent back to client**
   - Function returns clean JSON with question data
   - Admin.jsx receives and displays in form fields
   - User experience remains unchanged

## Testing the Implementation

### Local Testing (if using Netlify Dev)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Start local development with functions
netlify dev

# Admin page should still work at http://localhost:8888/admin
```

### Production Testing
1. Deploy to Netlify (netlify.toml should auto-deploy functions)
2. Set `OPENAI_API_KEY` in Netlify Dashboard Environment
3. Test admin image analysis on production site
4. Check browser DevTools - no API key should be visible
5. Check Netlify function logs for successful requests

## Environment Variables Required

### For Netlify (Server-side)
- `OPENAI_API_KEY` - Your OpenAI API key (NOT prefixed with VITE_)
  - Set in: Netlify Dashboard → Site Settings → Build & Deploy → Environment

### For Client (Already existing)
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

## Removed/Deprecated

- ❌ `VITE_OPENAI_API_KEY` - No longer used anywhere in the application
- ❌ Direct OpenAI API calls from Admin.jsx - All now go through serverless function

## Benefits

1. **Security**: API key never exposed to client
2. **Auditability**: All OpenAI calls can be logged server-side
3. **Rate Limiting**: Can implement server-side rate limiting per user/IP
4. **Cost Control**: Better control over API usage and billing
5. **Maintainability**: Easier to swap or upgrade API key without rebuilding
6. **Scalability**: Netlify functions auto-scale based on demand

## Related Security Issues Still To Address

This fix addresses the OpenAI API key exposure. However, other critical security issues remain:
- Admin page client-side password validation (still vulnerable)
- Supabase Row Level Security not configured
- Admin password visible in VITE_ADMIN_PASSWORD
- sessionStorage based authentication can be bypassed

See the full security audit report for additional recommended fixes.
