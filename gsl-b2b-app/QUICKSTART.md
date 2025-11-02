# Quick Start Guide - GSL B2B Education Platform

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
cd gsl-b2b-app
npm install
```

### Step 2: Set Up Supabase

1. **Create a Supabase Project**
   - Go to https://supabase.com
   - Click "New Project"
   - Fill in project details

2. **Get Your Credentials**
   - Go to Project Settings → API
   - Copy `Project URL` and `anon public` key

3. **Create Environment File**
   ```bash
   # Create .env.local file
   VITE_SUPABASE_URL=your_project_url_here
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```

4. **Set Up Database**
   - In Supabase, go to SQL Editor
   - Copy contents from `supabase/schema.sql`
   - Paste and run the query

5. **Enable Email Auth**
   - Go to Authentication → Providers
   - Enable Email provider
   - Save

### Step 3: Run the App
```bash
npm run dev
```

Visit `http://localhost:5173` 🎉

## 📝 Test the Application

### Create an Account
1. Click "Sign up" on login page
2. Fill in:
   - Email: test@example.com
   - Mobile: +1234567890
   - Password: Test1234
   - Confirm Password: Test1234
3. Click "Sign Up"

### Complete Your Profile
1. Navigate to Profile section
2. Fill in 4 steps:
   - Primary Information
   - Address
   - Test Scores
   - Preferences
3. Watch profile completion % increase

### Browse Programs
1. Go to Programs section
2. Search for programs
3. Click "Apply Now" to submit application

### View Applications
1. Go to Applications section
2. Filter by status
3. Track your applications

## 🎨 Features Overview

### ✅ Authentication
- Email/password login
- Signup with validation
- Password reset
- Protected routes

### ✅ Dashboard
- Profile completion tracking
- Featured universities carousel
- Alerts and events
- Advisor information

### ✅ Profile Management
- Multi-step form (4 steps)
- Auto-save functionality
- Progress tracking

### ✅ Programs & Applications
- Search programs
- Apply to programs
- Track application status
- Filter applications

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **UI**: Radix UI Components
- **Forms**: React Hook Form + Zod
- **State**: Zustand
- **Backend**: Supabase
- **Carousel**: Embla Carousel
- **Notifications**: Sonner

## 📂 Project Structure

```
src/
├── components/     # Reusable components
├── hooks/          # Custom hooks
├── lib/            # Utilities (Supabase)
├── pages/          # Page components
├── services/       # API services
├── store/          # State management
└── types/          # TypeScript types
```

## 🎯 Next Steps

1. **Add Sample Data**
   - Insert programs into `programs` table
   - Add alerts and events

2. **Customize Branding**
   - Update colors in `tailwind.config.js`
   - Change logo and branding

3. **Implement Additional Features**
   - Google OAuth
   - Real OTP via Twilio
   - Document uploads
   - Payment integration

4. **Deploy**
   - Build: `npm run build`
   - Deploy to Vercel/Netlify
   - Set environment variables

## 🐛 Troubleshooting

### Can't connect to Supabase?
- Check `.env.local` has correct credentials
- Verify Supabase project is active
- Check browser console for errors

### Styling not working?
- Clear browser cache
- Restart dev server
- Check Tailwind config

### Build errors?
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (16+)

## 📚 Documentation

- [Full Setup Guide](./SETUP.md)
- [Project Summary](./PROJECT_SUMMARY.md)
- [Supabase Schema](./supabase/schema.sql)

## 🆘 Need Help?

- Check Supabase docs: https://supabase.com/docs
- React Router: https://reactrouter.com
- Tailwind CSS: https://tailwindcss.com
- Radix UI: https://www.radix-ui.com

---

**Happy Coding! 🚀**

