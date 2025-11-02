# Getting Started - GSL B2B Education Platform

Welcome! This guide will help you get your application up and running in minutes.

## ✅ What's Already Done

- ✅ **Project initialized** with React + TypeScript + Vite
- ✅ **All dependencies installed**
- ✅ **Supabase credentials configured** in `.env.local`
- ✅ **Git repository** initialized and pushed to GitHub
- ✅ **Development server** ready to run
- ✅ **Complete application** with all features implemented

## 🚀 Quick Start (3 Steps)

### Step 1: Set Up Database (5 minutes)

1. **Open Supabase Dashboard**
   - Go to: https://supabase.com/dashboard/project/hsdvnhvslrzxellkawco

2. **Run Database Schema**
   - Click **SQL Editor** in the left sidebar
   - Click **New Query**
   - Open `gsl-b2b-app/supabase/schema.sql` in your code editor
   - Copy ALL the content
   - Paste into Supabase SQL Editor
   - Click **Run** (or press Ctrl+Enter)
   - Wait for "Success" message

3. **Add Sample Data (Optional)**
   - Click **New Query** again
   - Open `gsl-b2b-app/supabase/sample-data.sql`
   - Copy and paste the content
   - Click **Run**
   - This adds 15 sample programs and 8 events

4. **Enable Email Authentication**
   - Click **Authentication** in the left sidebar
   - Click **Providers**
   - Find **Email** and toggle it ON
   - Click **Save**

### Step 2: Run the Application (1 minute)

```bash
cd gsl-b2b-app
npm run dev
```

The app will start at: **http://localhost:5173**

### Step 3: Test the Application (2 minutes)

1. **Create an Account**
   - Click "Sign up"
   - Enter email: `test@example.com`
   - Enter mobile: `+1234567890`
   - Enter password: `Test1234`
   - Click "Sign Up"

2. **Check Your Email**
   - Go to your email inbox
   - Click the confirmation link from Supabase
   - You'll be redirected to the app

3. **Explore the Dashboard**
   - Complete your profile (4 steps)
   - Browse programs
   - Submit an application
   - View your applications

## 📁 Project Structure

```
gsl-b2b/
├── gsl-b2b-app/              # Main application
│   ├── src/                  # Source code
│   ├── supabase/             # Database files
│   │   ├── schema.sql        # Database schema (RUN THIS FIRST!)
│   │   └── sample-data.sql   # Sample data (optional)
│   ├── .env.local            # Supabase credentials (CONFIGURED ✓)
│   ├── SETUP.md              # Detailed setup guide
│   ├── QUICKSTART.md         # Quick reference
│   ├── DEPLOYMENT.md         # Deployment guide
│   └── PROJECT_SUMMARY.md    # Complete documentation
├── git-push.ps1              # Git helper script
├── README.md                 # Main README
└── GETTING_STARTED.md        # This file
```

## 🔑 Your Credentials

**Supabase Project**:
- **Project ID**: `hsdvnhvslrzxellkawco`
- **URL**: `https://hsdvnhvslrzxellkawco.supabase.co`
- **Dashboard**: https://supabase.com/dashboard/project/hsdvnhvslrzxellkawco

**GitHub Repository**:
- **URL**: https://github.com/abdulah-0/gsl-b2b
- **Clone**: `git clone https://github.com/abdulah-0/gsl-b2b.git`

**Local Development**:
- **URL**: http://localhost:5173
- **Port**: 5173

## 🎯 Common Tasks

### Run Development Server
```bash
cd gsl-b2b-app
npm run dev
```

### Build for Production
```bash
cd gsl-b2b-app
npm run build
```

### Push Changes to GitHub
```powershell
# Using helper script (from root directory)
.\git-push.ps1 "Your commit message"

# Or manually
git add .
git commit -m "Your commit message"
git push origin main
```

### View Supabase Data
1. Go to Supabase Dashboard
2. Click **Table Editor**
3. Select a table (profiles, programs, applications, etc.)
4. View/edit data

### Check Application Logs
1. Go to Supabase Dashboard
2. Click **Logs**
3. Select **API** or **Database**
4. View real-time logs

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| **README.md** | Project overview and quick start |
| **GETTING_STARTED.md** | This file - step-by-step guide |
| **gsl-b2b-app/SETUP.md** | Detailed setup instructions |
| **gsl-b2b-app/QUICKSTART.md** | 5-minute quick reference |
| **gsl-b2b-app/DEPLOYMENT.md** | Deploy to production (Vercel/Netlify) |
| **gsl-b2b-app/PROJECT_SUMMARY.md** | Complete feature documentation |

## 🎨 Features Overview

### Authentication
- ✅ Email/password login
- ✅ User registration
- ✅ Password reset
- ✅ Protected routes
- ⏳ OTP verification (ready for SMS integration)
- ⏳ Google OAuth (ready for integration)

### Dashboard
- ✅ Profile completion tracking
- ✅ Summary cards (applications, offers)
- ✅ Featured universities carousel
- ✅ Alerts and events
- ✅ Advisor information

### Profile Management
- ✅ Multi-step form (4 steps)
- ✅ Auto-save functionality
- ✅ Progress tracking
- ✅ Primary info, address, test scores, preferences

### Programs & Applications
- ✅ Search and filter programs
- ✅ Program details
- ✅ One-click application
- ✅ Application status tracking
- ✅ Status filtering

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS (Dark theme with cyan/gold accents)
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod validation
- **State**: Zustand
- **Routing**: React Router DOM
- **Backend**: Supabase (PostgreSQL + Auth)
- **Carousel**: Embla Carousel
- **Notifications**: Sonner (toast notifications)

## 🔄 Development Workflow

### 1. Make Changes
Edit files in `gsl-b2b-app/src/`

### 2. Test Locally
```bash
npm run dev
# Visit http://localhost:5173
```

### 3. Build & Check
```bash
npm run build
# Ensure no errors
```

### 4. Commit & Push
```powershell
.\git-push.ps1 "Description of changes"
```

### 5. Deploy (Optional)
See `gsl-b2b-app/DEPLOYMENT.md` for production deployment

## 🆘 Troubleshooting

### Can't connect to Supabase?
**Solution**:
1. Verify `schema.sql` was run successfully
2. Check email authentication is enabled
3. Restart dev server: `Ctrl+C` then `npm run dev`

### Build errors?
**Solution**:
```bash
cd gsl-b2b-app
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Git push fails?
**Solution**:
```bash
git pull origin main --rebase
git push origin main
```

### Application not loading?
**Solution**:
1. Check browser console (F12) for errors
2. Verify `.env.local` exists with correct credentials
3. Clear browser cache and reload

## 📞 Support Resources

- **Supabase Docs**: https://supabase.com/docs
- **React Docs**: https://react.dev
- **Vite Docs**: https://vite.dev
- **Tailwind CSS**: https://tailwindcss.com
- **React Router**: https://reactrouter.com

## 🎯 Next Steps

### Immediate (Required)
1. ✅ Run `schema.sql` in Supabase
2. ✅ Enable email authentication
3. ✅ Start dev server
4. ✅ Create test account

### Short Term (Recommended)
1. ⏳ Add sample data (`sample-data.sql`)
2. ⏳ Test all features
3. ⏳ Customize branding/colors
4. ⏳ Deploy to Vercel/Netlify

### Long Term (Optional)
1. ⏳ Implement real OTP via Twilio
2. ⏳ Add Google OAuth
3. ⏳ Create admin panel
4. ⏳ Add document upload
5. ⏳ Integrate payment gateway

## 🎉 You're All Set!

Your GSL B2B Education Platform is ready to go. Just run the database schema and start the dev server!

**Questions?** Check the documentation files or review the code - everything is well-commented and organized.

---

**Happy Coding! 🚀**

**Repository**: https://github.com/abdulah-0/gsl-b2b
**Dashboard**: https://supabase.com/dashboard/project/hsdvnhvslrzxellkawco

