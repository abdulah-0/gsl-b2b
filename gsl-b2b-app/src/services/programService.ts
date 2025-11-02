import { supabase } from "../lib/supabase";
import type { Program, Application } from "../types";

export const programService = {
  async getPrograms(limit = 20, offset = 0) {
    const { data, error } = await supabase
      .from("programs")
      .select("*")
      .range(offset, offset + limit - 1);

    if (error) throw error;
    return data as Program[];
  },

  async getProgram(id: string) {
    const { data, error } = await supabase
      .from("programs")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data as Program;
  },

  async searchPrograms(query: string) {
    const { data, error } = await supabase
      .from("programs")
      .select("*")
      .or(
        `title.ilike.%${query}%,institution.ilike.%${query}%,country.ilike.%${query}%`
      );

    if (error) throw error;
    return data as Program[];
  },

  async applyToProgram(profileId: string, programId: string) {
    const { data, error } = await supabase
      .from("applications")
      .insert({
        profile_id: profileId,
        program_id: programId,
        status: "pending",
      })
      .select()
      .single();

    if (error) throw error;
    return data as Application;
  },

  async getApplications(profileId: string) {
    const { data, error } = await supabase
      .from("applications")
      .select("*, programs(*)")
      .eq("profile_id", profileId);

    if (error) throw error;
    return data;
  },
};

