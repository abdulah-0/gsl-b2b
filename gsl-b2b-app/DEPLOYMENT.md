# Deployment Guide - GSL B2B Education Platform

This guide covers deploying your application to production using Vercel (recommended) or Netlify.

## Prerequisites

- ✅ Supabase project set up
- ✅ Database schema created
- ✅ GitHub repository configured
- ✅ Application tested locally

## Option 1: Deploy to Vercel (Recommended)

Vercel is the recommended platform as it's built by the creators of Next.js and has excellent Vite support.

### Step 1: Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

### Step 2: Deploy via Vercel Dashboard

1. **Go to [Vercel](https://vercel.com)**
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New Project"
   - Select your repository: `abdulah-0/gsl-b2b`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `gsl-b2b-app`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add the following:
     ```
     VITE_SUPABASE_URL=https://hsdvnhvslrzxellkawco.supabase.co
     VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZHZuaHZzbHJ6eGVsbGthd2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxMTMxMzgsImV4cCI6MjA3NzY4OTEzOH0.xugiOj7ZtuR58nOuGjK5DE6NOlgOCSY4kDQE8OWeu-0
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (2-3 minutes)

6. **Get Your URL**
   - Your app will be live at: `https://your-project.vercel.app`

### Step 3: Configure Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Automatic Deployments

Vercel automatically deploys when you push to GitHub:
```bash
git add .
git commit -m "Update feature"
git push origin main
# Vercel will automatically deploy!
```

## Option 2: Deploy to Netlify

### Step 1: Deploy via Netlify Dashboard

1. **Go to [Netlify](https://netlify.com)**
   - Sign in with GitHub

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select `abdulah-0/gsl-b2b`

3. **Configure Build Settings**
   - **Base directory**: `gsl-b2b-app`
   - **Build command**: `npm run build`
   - **Publish directory**: `gsl-b2b-app/dist`

4. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add:
     ```
     VITE_SUPABASE_URL=https://hsdvnhvslrzxellkawco.supabase.co
     VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZHZuaHZzbHJ6eGVsbGthd2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxMTMxMzgsImV4cCI6MjA3NzY4OTEzOH0.xugiOj7ZtuR58nOuGjK5DE6NOlgOCSY4kDQE8OWeu-0
     ```

5. **Deploy**
   - Click "Deploy site"
   - Your app will be live at: `https://your-site.netlify.app`

## Option 3: Manual Build & Deploy

### Build for Production

```bash
cd gsl-b2b-app
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Any Static Host

The `dist` folder can be deployed to:
- GitHub Pages
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Any static hosting service

## Post-Deployment Checklist

### 1. Update Supabase URL Whitelist

1. Go to [Supabase Dashboard](https://supabase.com/dashboard/project/hsdvnhvslrzxellkawco)
2. Navigate to **Authentication** → **URL Configuration**
3. Add your production URL to **Site URL**:
   ```
   https://your-app.vercel.app
   ```
4. Add to **Redirect URLs**:
   ```
   https://your-app.vercel.app/**
   ```

### 2. Test Authentication

1. Visit your production URL
2. Try signing up with a test account
3. Check email verification
4. Test login/logout

### 3. Test All Features

- ✅ Login/Signup
- ✅ Profile completion
- ✅ Program search
- ✅ Application submission
- ✅ Dashboard navigation

### 4. Monitor Performance

**Vercel Analytics** (if using Vercel):
- Go to your project → Analytics
- Monitor page views, performance, and errors

**Supabase Monitoring**:
- Go to Supabase Dashboard → Database → Logs
- Monitor API usage and errors

## Environment Variables Reference

| Variable | Value | Description |
|----------|-------|-------------|
| `VITE_SUPABASE_URL` | `https://hsdvnhvslrzxellkawco.supabase.co` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGci...` | Your Supabase anonymous key |

## Continuous Deployment

### Automatic Deployments

Both Vercel and Netlify support automatic deployments:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin main
   ```

2. **Automatic Build & Deploy**:
   - Platform detects the push
   - Runs build command
   - Deploys to production
   - Usually takes 2-3 minutes

### Preview Deployments

Create a new branch for testing:
```bash
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

Both platforms create preview URLs for branches!

## Rollback

### Vercel Rollback

1. Go to Deployments
2. Find previous successful deployment
3. Click "..." → "Promote to Production"

### Netlify Rollback

1. Go to Deploys
2. Find previous deployment
3. Click "Publish deploy"

## Performance Optimization

### 1. Enable Compression

Both Vercel and Netlify automatically enable gzip/brotli compression.

### 2. Caching

Add `vercel.json` for custom caching (Vercel):
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 3. Image Optimization

Consider using Vercel Image Optimization or Cloudinary for images.

## Troubleshooting

### Build Fails

**Check build logs**:
- Vercel: Deployments → Click failed deployment → View logs
- Netlify: Deploys → Click failed deploy → Deploy log

**Common issues**:
```bash
# Missing dependencies
npm install

# TypeScript errors
npm run build  # Fix errors locally first

# Environment variables
# Verify all VITE_ variables are set in platform
```

### 404 on Refresh

Add redirect rules for SPA routing:

**Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Netlify** - Create `public/_redirects`:
```
/*    /index.html   200
```

### Supabase Connection Issues

1. Verify environment variables are set correctly
2. Check Supabase URL whitelist includes your domain
3. Verify RLS policies are enabled
4. Check browser console for CORS errors

## Security Checklist

- ✅ Environment variables not committed to Git
- ✅ `.env.local` in `.gitignore`
- ✅ Supabase RLS policies enabled
- ✅ HTTPS enabled (automatic on Vercel/Netlify)
- ✅ Production URL whitelisted in Supabase

## Monitoring & Analytics

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `main.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// In your root component
<Analytics />
```

### Error Tracking

Consider adding:
- **Sentry** for error tracking
- **LogRocket** for session replay
- **Mixpanel** for user analytics

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Supabase Docs**: https://supabase.com/docs

---

**Your app is ready for production! 🚀**

