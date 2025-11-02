import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { authService } from "../services/authService";
import { supabase } from "../lib/supabase";

export const useAuth = () => {
  const { user, loading, setUser, setLoading, logout } = useAuthStore();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          setUser({
            id: currentUser.id,
            email: currentUser.email || "",
            created_at: currentUser.created_at || new Date().toISOString(),
          });
        }
      } catch (error) {
        console.error("Auth init error:", error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || "",
          created_at: session.user.created_at || new Date().toISOString(),
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [setUser, setLoading]);

  return { user, loading, logout };
};

