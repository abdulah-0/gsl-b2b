import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { Profile } from "../types";
import { useAuth } from "../hooks/useAuth";
import { profileService } from "../services/profileService";
import { toast } from "sonner";
import { useState } from "react";

const step2Schema = z.object({
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  postal_code: z.string().optional(),
});

type Step2FormData = z.infer<typeof step2Schema>;

interface ProfileStep2Props {
  profile: Profile | null;
  onNext: () => void;
}

export const ProfileStep2 = ({ profile, onNext }: ProfileStep2Props) => {
  const { user } = useAuth();
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
  } = useForm<Step2FormData>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      city: profile?.city || "",
      state: profile?.state || "",
      country: profile?.country || "",
      postal_code: profile?.postal_code || "",
    },
  });

  const onSubmit = async (data: Step2FormData) => {
    if (!user?.id) return;

    setSaving(true);
    try {
      await profileService.updateProfile(user.id, data);
      toast.success("Address updated successfully!");
      onNext();
    } catch (error) {
      toast.error("Failed to save address");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold text-cyan mb-6">Address Information</h2>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          City
        </label>
        <input
          {...register("city")}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
          placeholder="Your city"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          State/Province
        </label>
        <input
          {...register("state")}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
          placeholder="Your state"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Country
        </label>
        <input
          {...register("country")}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
          placeholder="Your country"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Postal Code
        </label>
        <input
          {...register("postal_code")}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
          placeholder="Your postal code"
        />
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

