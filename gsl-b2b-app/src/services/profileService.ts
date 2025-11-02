import { supabase } from "../lib/supabase";
import type { Profile } from "../types";

export const profileService = {
  async getProfile(userId: string) {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) throw error;
    return data as Profile;
  },

  async updateProfile(userId: string, updates: Partial<Profile>) {
    const { data, error } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", userId)
      .select()
      .single();

    if (error) throw error;
    return data as Profile;
  },

  async getProfileCompletion(userId: string) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    const { data: education } = await supabase
      .from("education")
      .select("*")
      .eq("profile_id", userId);

    const { data: testScores } = await supabase
      .from("test_scores")
      .select("*")
      .eq("profile_id", userId);

    const { data: preferences } = await supabase
      .from("preferences")
      .select("*")
      .eq("profile_id", userId)
      .single();

    let completion = 0;
    let steps = 0;

    // Primary info
    if (profile?.first_name && profile?.dob) completion += 25;
    steps += 25;

    // Education
    if (education && education.length > 0) completion += 25;
    steps += 25;

    // Test scores
    if (testScores && testScores.length > 0) completion += 25;
    steps += 25;

    // Preferences
    if (preferences?.discipline && preferences?.country) completion += 25;
    steps += 25;

    return Math.round((completion / steps) * 100);
  },
};

