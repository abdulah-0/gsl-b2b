-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  mobile TEXT,
  first_name TEXT,
  last_name TEXT,
  nationality TEXT,
  dob DATE,
  marital_status TEXT,
  gender TEXT,
  city TEXT,
  state TEXT,
  country TEXT,
  postal_code TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Education table
CREATE TABLE education (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  degree TEXT,
  grading_system TEXT,
  board TEXT,
  grade_scale TEXT,
  school TEXT,
  city TEXT,
  state TEXT,
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Test Scores table
CREATE TABLE test_scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  exam_type TEXT NOT NULL,
  date DATE,
  overall DECIMAL(5,2),
  listening DECIMAL(5,2),
  reading DECIMAL(5,2),
  writing DECIMAL(5,2),
  speaking DECIMAL(5,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Preferences table
CREATE TABLE preferences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  discipline TEXT,
  intake TEXT,
  level TEXT,
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Programs table
CREATE TABLE programs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  institution TEXT NOT NULL,
  country TEXT NOT NULL,
  duration TEXT,
  test_score_req TEXT,
  application_fee DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Applications table
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  program_id UUID NOT NULL REFERENCES programs(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'withdrawn')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Alerts table
CREATE TABLE alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT,
  date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Events table
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  time TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- RLS Policies for education
CREATE POLICY "Users can view their own education" ON education
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert their own education" ON education
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can update their own education" ON education
  FOR UPDATE USING (auth.uid() = profile_id);

-- RLS Policies for test_scores
CREATE POLICY "Users can view their own test scores" ON test_scores
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert their own test scores" ON test_scores
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can update their own test scores" ON test_scores
  FOR UPDATE USING (auth.uid() = profile_id);

-- RLS Policies for preferences
CREATE POLICY "Users can view their own preferences" ON preferences
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert their own preferences" ON preferences
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can update their own preferences" ON preferences
  FOR UPDATE USING (auth.uid() = profile_id);

-- RLS Policies for applications
CREATE POLICY "Users can view their own applications" ON applications
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert their own applications" ON applications
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

-- Programs are public (no RLS needed for SELECT)
-- Alerts are public (no RLS needed for SELECT)
-- Events are public (no RLS needed for SELECT)

-- Create indexes for better performance
CREATE INDEX idx_education_profile_id ON education(profile_id);
CREATE INDEX idx_test_scores_profile_id ON test_scores(profile_id);
CREATE INDEX idx_preferences_profile_id ON preferences(profile_id);
CREATE INDEX idx_applications_profile_id ON applications(profile_id);
CREATE INDEX idx_applications_program_id ON applications(program_id);

