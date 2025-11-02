import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { programService } from "../services/programService";
import { toast } from "sonner";

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
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
      case "accepted":
        return "bg-green-500/20 text-green-400 border-green-500/50";
      case "rejected":
        return "bg-red-500/20 text-red-400 border-red-500/50";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/50";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-cyan">Loading applications...</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-cyan mb-6">My Applications</h1>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(["all", "pending", "accepted", "rejected"] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg font-semibold transition capitalize ${
              filter === status
                ? "bg-cyan text-slate-900"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.map((app) => (
          <div
            key={app.id}
            className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-cyan transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-cyan mb-2">
                  {app.programs.title}
                </h3>
                <p className="text-slate-400 text-sm mb-1">
                  {app.programs.institution}
                </p>
                <p className="text-slate-400 text-sm mb-4">
                  {app.programs.country}
                </p>
                <p className="text-slate-500 text-xs">
                  Applied on: {new Date(app.created_at).toLocaleDateString()}
                </p>
              </div>

              <div className="text-right">
                <span
                  className={`inline-block px-4 py-2 rounded-lg border font-semibold text-sm capitalize ${getStatusColor(
                    app.status
                  )}`}
                >
                  {app.status}
                </span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 bg-slate-700 text-cyan rounded-lg hover:bg-slate-600 transition text-sm">
                View Details
              </button>
              <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition text-sm">
                Track Status
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">
            No {filter !== "all" ? filter : ""} applications found
          </p>
        </div>
      )}
    </div>
  );
};

