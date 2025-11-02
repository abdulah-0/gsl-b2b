// Auth Types
export interface AuthUser {
  id: string;
  email: string;
  mobile?: string;
  created_at: string;
}

// Profile Types
export interface Profile {
  id: string;
  email: string;
  mobile?: string;
  first_name?: string;
  last_name?: string;
  nationality?: string;
  dob?: string;
  marital_status?: string;
  gender?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  created_at: string;
}

// Education Types
export interface Education {
  id: string;
  profile_id: string;
  degree?: string;
  grading_system?: string;
  board?: string;
  grade_scale?: string;
  school?: string;
  city?: string;
  state?: string;
  country?: string;
}

// Test Scores Types
export interface TestScore {
  id: string;
  profile_id: string;
  exam_type: string;
  date?: string;
  overall?: number;
  listening?: number;
  reading?: number;
  writing?: number;
  speaking?: number;
}

// Preferences Types
export interface Preference {
  id: string;
  profile_id: string;
  discipline?: string;
  intake?: string;
  level?: string;
  country?: string;
}

// Program Types
export interface Program {
  id: string;
  title: string;
  institution: string;
  country: string;
  duration?: string;
  test_score_req?: string;
  application_fee?: number;
}

// Application Types
export interface Application {
  id: string;
  profile_id: string;
  program_id: string;
  status: "pending" | "accepted" | "rejected" | "withdrawn";
  created_at: string;
}

// Alert Types
export interface Alert {
  id: string;
  title: string;
  content: string;
  date: string;
}

// Event Types
export interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  time?: string;
}

