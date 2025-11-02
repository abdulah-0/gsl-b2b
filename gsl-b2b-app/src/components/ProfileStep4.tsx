import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { Profile } from "../types";
import { useAuth } from "../hooks/useAuth";
import { supabase } from "../lib/supabase";
import { toast } from "sonner";
import { useState } from "react";

const step4Schema = z.object({
  discipline: z.string().min(1, "Discipline is required"),
  intake: z.string().min(1, "Intake is required"),
  level: z.string().min(1, "Level is required"),
  country: z.string().min(1, "Country is required"),
});

type Step4FormData = z.infer<typeof step4Schema>;

interface ProfileStep4Props {
  profile: Profile | null;
  onNext: () => void;
}

export const ProfileStep4 = ({ onNext }: ProfileStep4Props) => {
  const { user } = useAuth();
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step4FormData>({
    resolver: zodResolver(step4Schema),
  });

  const onSubmit = async (data: Step4FormData) => {
    if (!user?.id) return;

    setSaving(true);
    try {
      await supabase.from("preferences").insert({
        profile_id: user.id,
        discipline: data.discipline,
        intake: data.intake,
        level: data.level,
        country: data.country,
      });
      toast.success("Preferences saved successfully!");
      onNext();
    } catch (error) {
      toast.error("Failed to save preferences");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold text-cyan mb-6">Study Preferences</h2>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Discipline
        </label>
        <select
          {...register("discipline")}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
        >
          <option value="">Select discipline</option>
          <option value="Engineering">Engineering</option>
          <option value="Business">Business</option>
          <option value="Medicine">Medicine</option>
          <option value="Arts">Arts</option>
          <option value="Science">Science</option>
        </select>
        {errors.discipline && (
          <p className="text-red-500 text-sm mt-1">{errors.discipline.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Intake
        </label>
        <select
          {...register("intake")}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
        >
          <option value="">Select intake</option>
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
        </select>
        {errors.intake && (
          <p className="text-red-500 text-sm mt-1">{errors.intake.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Study Level
        </label>
        <select
          {...register("level")}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
        >
          <option value="">Select level</option>
          <option value="Bachelors">Bachelors</option>
          <option value="Masters">Masters</option>
          <option value="PhD">PhD</option>
          <option value="Diploma">Diploma</option>
        </select>
        {errors.level && (
          <p className="text-red-500 text-sm mt-1">{errors.level.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Preferred Country
        </label>
        <select
          {...register("country")}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
        >
          <option value="">Select country</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
        </select>
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={saving}
        className="w-full bg-cyan text-slate-900 font-semibold py-2 rounded-lg hover:bg-cyan/90 transition disabled:opacity-50 mt-6"
      >
        {saving ? "Saving..." : "Complete Profile"}
      </button>
    </form>
  );
};

