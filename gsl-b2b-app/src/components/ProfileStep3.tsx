import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { Profile } from "../types";
import { useAuth } from "../hooks/useAuth";
import { supabase } from "../lib/supabase";
import { toast } from "sonner";
import { useState } from "react";

const step3Schema = z.object({
  exam_type: z.string().min(1, "Exam type is required"),
  overall: z.string().optional(),
  listening: z.string().optional(),
  reading: z.string().optional(),
  writing: z.string().optional(),
  speaking: z.string().optional(),
});

type Step3FormData = z.infer<typeof step3Schema>;

interface ProfileStep3Props {
  profile: Profile | null;
  onNext: () => void;
}

export const ProfileStep3 = ({ onNext }: ProfileStep3Props) => {
  const { user } = useAuth();
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3FormData>({
    resolver: zodResolver(step3Schema),
  });

  const onSubmit = async (data: Step3FormData) => {
    if (!user?.id) return;

    setSaving(true);
    try {
      await supabase.from("test_scores").insert({
        profile_id: user.id,
        exam_type: data.exam_type,
        overall: data.overall ? parseFloat(data.overall) : null,
        listening: data.listening ? parseFloat(data.listening) : null,
        reading: data.reading ? parseFloat(data.reading) : null,
        writing: data.writing ? parseFloat(data.writing) : null,
        speaking: data.speaking ? parseFloat(data.speaking) : null,
      });
      toast.success("Test scores saved successfully!");
      onNext();
    } catch (error) {
      toast.error("Failed to save test scores");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold text-cyan mb-6">Test Scores</h2>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Exam Type
        </label>
        <select
          {...register("exam_type")}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
        >
          <option value="">Select exam</option>
          <option value="IELTS">IELTS</option>
          <option value="TOEFL">TOEFL</option>
          <option value="GRE">GRE</option>
          <option value="GMAT">GMAT</option>
          <option value="SAT">SAT</option>
        </select>
        {errors.exam_type && (
          <p className="text-red-500 text-sm mt-1">{errors.exam_type.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Overall Score
          </label>
          <input
            {...register("overall")}
            type="number"
            step="0.1"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
            placeholder="e.g., 7.5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Listening
          </label>
          <input
            {...register("listening")}
            type="number"
            step="0.1"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Reading
          </label>
          <input
            {...register("reading")}
            type="number"
            step="0.1"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Writing
          </label>
          <input
            {...register("writing")}
            type="number"
            step="0.1"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Speaking
        </label>
        <input
          {...register("speaking")}
          type="number"
          step="0.1"
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan"
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

