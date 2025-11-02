# GSL B2B Education Platform - Setup Guide

## Prerequisites

- Node.js 16+ and npm
- Supabase account (https://supabase.com)
- Git

## Project Setup

### 1. Clone and Install Dependencies

```bash
cd gsl-b2b-app
npm install
```

### 2. Supabase Configuration

1. Create a new Supabase project at https://supabase.com
2. Go to Project Settings → API
3. Copy your `Project URL` and `Anon Key`
4. Create a `.env.local` file in the project root:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Database Setup

1. In Supabase, go to SQL Editor
2. Create a new query and paste the contents of `supabase/schema.sql`
3. Run the query to create all tables and RLS policies

### 4. Enable Authentication

1. In Supabase, go to Authentication → Providers
2. Enable Email/Password provider
3. (Optional) Enable Google OAuth for social login

### 5. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable React components
├── hooks/              # Custom React hooks (useAuth, useProfileForm)
├── lib/                # Utility libraries (Supabase client)
├── pages/              # Page components (Login, Dashboard, etc.)
├── services/           # API service functions
├── store/              # Zustand state management
├── types/              # TypeScript type definitions
├── App.tsx             # Main app with routing
├── index.css           # Global styles with Tailwind
└── main.tsx            # Entry point
```

## Key Features Implemented

### Authentication
- ✅ Login with email/password
- ✅ Signup with validation
- ✅ OTP verification (mock)
- ✅ Forgot password flow
- ✅ Protected routes

### Dashboard
- ✅ Sidebar navigation
- ✅ Top navbar with user menu
- ✅ Profile completion tracking
- ✅ Featured universities carousel
- ✅ Alerts and events sections

### Profile Management
- ✅ Multi-step form (4 steps)
- ✅ Primary information
- ✅ Address information
- ✅ Test scores
- ✅ Study preferences
- ✅ Auto-save functionality

### Programs & Applications
- ✅ Program listings with search
- ✅ Apply to programs
- ✅ View applications with status tracking
- ✅ Filter applications by status

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod
- **State Management**: Zustand
- **Backend**: Supabase (PostgreSQL + Auth)
- **Carousel**: Embla Carousel
- **Notifications**: Sonner

## Environment Variables

Create a `.env.local` file with:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GOOGLE_CLIENT_ID=optional_google_client_id
```

## Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Next Steps

1. **Implement OTP via Supabase Functions** - Replace mock OTP with real SMS via Twilio
2. **Add Google OAuth** - Implement social login
3. **Create Supabase Edge Functions** - For backend logic
4. **Add More Dashboard Pages** - Educational background, test scores, preferences
5. **Implement Notifications** - Real-time alerts for applications
6. **Add Admin Panel** - For managing programs and users
7. **Deploy** - Use Vercel, Netlify, or your preferred platform

## Troubleshooting

### Supabase Connection Issues
- Verify your `.env.local` has correct credentials
- Check Supabase project is active
- Ensure RLS policies are correctly set

### Authentication Not Working
- Clear browser cookies and localStorage
- Check Supabase Auth settings
- Verify email provider is enabled

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.js` and `postcss.config.js`
- Clear node_modules and reinstall if needed

## Support

For issues or questions, refer to:
- Supabase Docs: https://supabase.com/docs
- React Router Docs: https://reactrouter.com
- Tailwind CSS Docs: https://tailwindcss.com
- Radix UI Docs: https://www.radix-ui.com

