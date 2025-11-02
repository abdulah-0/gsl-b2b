# GSL B2B Education Platform

A comprehensive B2B education platform built with React, TypeScript, Tailwind CSS, and Supabase. This platform enables students to manage their educational profiles, search for programs, submit applications, and track their progress.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![React](https://img.shields.io/badge/React-18-blue)
![Supabase](https://img.shields.io/badge/Supabase-enabled-green)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd gsl-b2b-app
npm install
```

### 2. Environment Setup
The `.env.local` file is already configured with your Supabase credentials:
- **Project URL**: `https://hsdvnhvslrzxellkawco.supabase.co`
- **Anon Key**: Configured ✓

### 3. Set Up Database
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard/project/hsdvnhvslrzxellkawco)
2. Navigate to **SQL Editor**
3. Copy and paste the contents from `gsl-b2b-app/supabase/schema.sql`
4. Click **Run** to create all tables and RLS policies

### 4. Enable Email Authentication
1. In Supabase Dashboard, go to **Authentication** → **Providers**
2. Enable **Email** provider
3. Save changes

### 5. Run the Application
```bash
npm run dev
```

Visit **http://localhost:5173** 🎉

## ✨ Features

### 🔐 Authentication
- ✅ Email/password login
- ✅ User registration with validation
- ✅ OTP verification (ready for SMS)
- ✅ Password reset
- ✅ Protected routes

### 📊 Dashboard
- ✅ Profile completion tracking
- ✅ Active applications counter
- ✅ Pending offers display
- ✅ Featured universities carousel
- ✅ Alerts and events
- ✅ Advisor information

### 👤 Profile Management
- ✅ Multi-step form (4 steps)
- ✅ Auto-save functionality
- ✅ Progress tracking
- ✅ Primary information
- ✅ Address details
- ✅ Test scores (IELTS, TOEFL, GRE, GMAT, SAT)
- ✅ Study preferences

### 🎓 Programs & Applications
- ✅ Search and filter programs
- ✅ Program details
- ✅ One-click application
- ✅ Application status tracking
- ✅ Status filtering (pending, accepted, rejected)

### 🎨 UI/UX
- ✅ Dark theme with gradient background
- ✅ Cyan (#00E5E5) and Gold (#FFD700) accents
- ✅ Fully responsive design
- ✅ Smooth animations
- ✅ Toast notifications
- ✅ Custom scrollbar

## 📁 Project Structure

```
gsl-b2b/
├── gsl-b2b-app/              # Main application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utilities
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── store/           # State management
│   │   └── types/           # TypeScript types
│   ├── supabase/
│   │   └── schema.sql       # Database schema
│   ├── SETUP.md             # Detailed setup guide
│   ├── QUICKSTART.md        # Quick reference
│   └── PROJECT_SUMMARY.md   # Complete documentation
├── git-push.ps1             # Git helper script
└── README.md                # This file
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod
- **State**: Zustand
- **Routing**: React Router DOM
- **Backend**: Supabase (PostgreSQL + Auth)
- **Carousel**: Embla Carousel
- **Notifications**: Sonner

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🗄️ Database Tables

- **profiles** - User profile information
- **education** - Educational background
- **test_scores** - Standardized test scores
- **preferences** - Study preferences
- **programs** - Available programs
- **applications** - Student applications
- **alerts** - System alerts
- **events** - Upcoming events

All tables have **Row Level Security (RLS)** enabled.

## 🔄 Git Workflow

### Quick Push (Using Helper Script)
```powershell
.\git-push.ps1 "Your commit message here"
```

### Manual Git Commands
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## 📚 Documentation

- **[SETUP.md](gsl-b2b-app/SETUP.md)** - Complete setup instructions
- **[QUICKSTART.md](gsl-b2b-app/QUICKSTART.md)** - 5-minute quick start
- **[PROJECT_SUMMARY.md](gsl-b2b-app/PROJECT_SUMMARY.md)** - Full feature list

## 🎯 Next Steps

1. ✅ Supabase credentials configured
2. ✅ Git repository initialized and pushed
3. ⏳ Run database schema in Supabase
4. ⏳ Enable email authentication
5. ⏳ Start development server
6. ⏳ Test the application

## 🔗 Links

- **GitHub Repository**: https://github.com/abdulah-0/gsl-b2b
- **Supabase Dashboard**: https://supabase.com/dashboard/project/hsdvnhvslrzxellkawco
- **Local Development**: http://localhost:5173

## 🆘 Troubleshooting

### Can't connect to Supabase?
- Verify database schema is created
- Check email authentication is enabled
- Restart dev server

### Build errors?
```bash
cd gsl-b2b-app
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Git push issues?
```bash
git remote -v  # Verify remote is set
git pull origin main --rebase  # Sync with remote
git push origin main
```

## 📄 License

MIT License

---

**Built with ❤️ for GSL B2B Education Platform**

**Repository**: https://github.com/abdulah-0/gsl-b2b

