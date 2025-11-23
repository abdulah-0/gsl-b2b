import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading: authLoading } = useAuth();
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState<boolean | null>(null);
  const [checkingProfile, setCheckingProfile] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkProfile = async () => {
      if (!user) {
        setCheckingProfile(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("onboarding_completed")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error);
          // If error (e.g. no profile), assume not completed
          setIsOnboardingCompleted(false);
        } else {
          setIsOnboardingCompleted(data?.onboarding_completed || false);
        }
      } catch (error) {
        console.error("Error checking profile:", error);
        setIsOnboardingCompleted(false);
      } finally {
        setCheckingProfile(false);
      }
    };

    if (!authLoading) {
      checkProfile();
    }
  }, [user, authLoading]);

  if (authLoading || checkingProfile) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-[#ea580c]/30 border-t-[#ea580c] rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If on onboarding page and completed, go to dashboard
  if (location.pathname === "/onboarding" && isOnboardingCompleted) {
    return <Navigate to="/dashboard" replace />;
  }

  // If not on onboarding page and not completed, go to onboarding
  if (location.pathname !== "/onboarding" && !isOnboardingCompleted) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
};

