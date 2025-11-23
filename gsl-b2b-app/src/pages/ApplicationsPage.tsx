import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { programService } from "../services/programService";
import { toast } from "sonner";
import { Calendar, FileText, MapPin } from "lucide-react";

interface ApplicationWithProgram {
  id: string;
  profile_id: string;
  program_id: string;
  status: string;
  created_at: string;
  programs: {
    title: string;
    institution: string;
    country: string;
  };
}

export const ApplicationsPage = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState<ApplicationWithProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "accepted" | "rejected">(
    "all"
  );

  useEffect(() => {
    const loadApplications = async () => {
      if (!user?.id) return;

      try {
        const data = await programService.getApplications(user.id);
        setApplications(data || []);
      } catch (error) {
        toast.error("Failed to load applications");
      } finally {
        setLoading(false);
      }
    };

    loadApplications();
  }, [user?.id]);

  const filteredApplications =
    filter === "all"
      ? applications
      : applications.filter((app) => app.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "accepted":
        return "bg-green-100 text-green-700 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="h-8 w-8 border-4 border-[#ea580c]/30 border-t-[#ea580c] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
          <p className="text-gray-500 mt-1">Track the status of your university applications</p>
        </div>
        <button className="bg-[#1c1c1c] text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-black transition-colors shadow-sm">
          + New Application
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-8 border-b border-gray-200 pb-1">
        {(["all", "pending", "accepted", "rejected"] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all capitalize text-sm relative top-[1px] ${filter === status
                ? "text-[#ea580c] border-b-2 border-[#ea580c]"
                : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Applications List */}
      <div className="grid gap-4">
        {filteredApplications.map((app) => (
          <div
            key={app.id}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                  <FileText className="h-6 w-6 text-gray-400 group-hover:text-[#ea580c] transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {app.programs.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="font-medium text-gray-700">{app.programs.institution}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {app.programs.country}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      Applied: {new Date(app.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full border font-bold text-xs capitalize ${getStatusColor(
                    app.status
                  )}`}
                >
                  {app.status}
                </span>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 border-dashed">
          <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-gray-300" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">No applications found</h3>
          <p className="text-gray-500 text-sm">
            You haven't {filter !== "all" ? filter : ""} any applications yet.
          </p>
        </div>
      )}
    </div>
  );
};

