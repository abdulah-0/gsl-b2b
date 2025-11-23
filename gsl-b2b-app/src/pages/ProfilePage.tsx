import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { profileService } from "../services/profileService";
import type { Profile } from "../types";
import { ProfileStep1 } from "../components/ProfileStep1";
import { ProfileStep2 } from "../components/ProfileStep2";
import { ProfileStep3 } from "../components/ProfileStep3";
import { ProfileStep4 } from "../components/ProfileStep4";
import { toast } from "sonner";

export const ProfilePage = () => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      if (user?.id) {
        try {
          const data = await profileService.getProfile(user.id);
          setProfile(data);
        } catch (error) {
          console.error("Failed to load profile:", error);
          toast.error("Failed to load profile");
        } finally {
          setLoading(false);
        }
      }
    };

    loadProfile();
  }, [user?.id]);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-cyan">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {currentStep === 3 && (
        <ProfileStep3 profile={profile} onNext={handleNext} />
      )}
      {currentStep === 4 && (
        <ProfileStep4 profile={profile} onNext={handleNext} />
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === 4}
          className="px-6 py-2 bg-cyan text-slate-900 font-semibold rounded-lg hover:bg-cyan/90 transition disabled:opacity-50"
        >
          {currentStep === 4 ? "Complete" : "Next"}
        </button>
      </div>
    </div>
    </div >
  );
};

