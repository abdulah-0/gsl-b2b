import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { profileService } from "../services/profileService";
import { Carousel } from "../components/Carousel";

export const DashboardHome = () => {
  const { user } = useAuth();
  const [completion, setCompletion] = useState(0);
  const [, setLoading] = useState(true);

  useEffect(() => {
    const loadCompletion = async () => {
      if (user?.id) {
        try {
          const percent = await profileService.getProfileCompletion(user.id);
          setCompletion(percent);
        } catch (error) {
          console.error("Failed to load profile completion:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadCompletion();
  }, [user?.id]);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <p className="text-slate-400 text-sm mb-2">Profile Completion</p>
          <p className="text-3xl font-bold text-cyan">{completion}%</p>
          <div className="mt-4 bg-slate-700 rounded-full h-2">
            <div
              className="bg-cyan h-2 rounded-full transition-all"
              style={{ width: `${completion}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <p className="text-slate-400 text-sm mb-2">Active Applications</p>
          <p className="text-3xl font-bold text-gold">5</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <p className="text-slate-400 text-sm mb-2">Pending Offers</p>
          <p className="text-3xl font-bold text-cyan">2</p>
        </div>
      </div>

      {/* Featured Universities Carousel */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-cyan mb-4">Featured Universities</h2>
        <Carousel />
      </div>

      {/* Alerts and Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alerts */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-bold text-cyan mb-4">Recent Alerts</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-slate-700 rounded-lg p-4 border-l-4 border-gold"
              >
                <p className="font-semibold text-white">Alert Title {i}</p>
                <p className="text-sm text-slate-400 mt-1">
                  Alert description goes here
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-bold text-cyan mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-slate-700 rounded-lg p-4 border-l-4 border-cyan"
              >
                <p className="font-semibold text-white">Event {i}</p>
                <p className="text-sm text-slate-400 mt-1">
                  Date: 2024-11-{10 + i}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advisor Info */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h3 className="text-lg font-bold text-cyan mb-4">Your Advisor</h3>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-cyan rounded-full flex items-center justify-center text-slate-900 text-2xl font-bold">
            JD
          </div>
          <div>
            <p className="font-semibold text-white">John Doe</p>
            <p className="text-slate-400 text-sm">Education Advisor</p>
            <p className="text-cyan text-sm mt-2">📧 john@gsl.com | 📱 +1-234-567-8900</p>
          </div>
        </div>
      </div>
    </div>
  );
};

