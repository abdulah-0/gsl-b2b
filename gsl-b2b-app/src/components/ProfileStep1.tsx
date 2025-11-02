import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { Profile } from "../types";
import { useAuth } from "../hooks/useAuth";
import { profileService } from "../services/profileService";
import { toast } from "sonner";
import { useState } from "react";

const step1Schema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  dob: z.string().min(1, "Date of birth is required"),
  nationality: z.string().min(1, "Nationality is required"),
  gender: z.string().optional(),
  marital_status: z.string().optional(),
});

type Step1FormData = z.infer<typeof step1Schema>;

interface ProfileStep1Props {
  profile: Profile | null;
  onNext: () => void;
}

export const ProfileStep1 = ({ profile, onNext }: ProfileStep1Props) => {
  const { user } = useAuth();
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      first_name: profile?.first_name || "",
      last_name: profile?.last_name || "",
      dob: profile?.dob || "",
      nationality: profile?.nationality || "",
      gender: profile?.gender || "",
      marital_status: profile?.marital_status || "",
    },
  });

  const onSubmit = async (data: Step1FormData) => {
    if (!user?.id) return;

    setSaving(true);
    try {
      await profileService.updateProfile(user.id, data);
      toast.success("Profile updated successfully!");
      onNext();
    } catch (error) {
      toast.error("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold text-cyan mb-6">Primary Information</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            First Name
          </label>
          <input
            {...register("first_name")}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
          />
          {errors.first_name && (
            <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Last Name
          </label>
          <input
            {...register("last_name")}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
          />
          {errors.last_name && (
            <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Date of Birth
        </label>
        <input
          {...register("dob")}
          type="date"
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
        />
        {errors.dob && (
          <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Nationality
        </label>
        <input
          {...register("nationality")}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
          placeholder="e.g., Indian"
        />
        {errors.nationality && (
          <p className="text-red-500 text-sm mt-1">{errors.nationality.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Gender
          </label>
          <select
            {...register("gender")}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Marital Status
          </label>
          <select
            {...register("marital_status")}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
          >
            <option value="">Select</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={saving}
        className="w-full bg-cyan text-slate-900 font-semibold py-2 rounded-lg hover:bg-cyan/90 transition disabled:opacity-50 mt-6"
      >
        {saving ? "Saving..." : "Save & Continue"}
      </button>
    </form>
  );
};

