import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { programService } from "../services/programService";
import type { Program } from "../types";
import { toast } from "sonner";

export const ProgramsPage = () => {
  const { user } = useAuth();
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [applying, setApplying] = useState<string | null>(null);

  useEffect(() => {
    const loadPrograms = async () => {
      try {
        const data = await programService.getPrograms();
        setPrograms(data);
      } catch (error) {
        toast.error("Failed to load programs");
      } finally {
        setLoading(false);
      }
    };

    loadPrograms();
  }, []);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      try {
        const results = await programService.searchPrograms(query);
        setPrograms(results);
      } catch (error) {
        toast.error("Search failed");
      }
    } else {
      const data = await programService.getPrograms();
      setPrograms(data);
    }
  };

  const handleApply = async (programId: string) => {
    if (!user?.id) {
      toast.error("Please log in to apply");
      return;
    }

    setApplying(programId);
    try {
      await programService.applyToProgram(user.id, programId);
      toast.success("Application submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit application");
    } finally {
      setApplying(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-cyan">Loading programs...</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-cyan mb-6">Programs</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search programs, universities, countries..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan"
        />
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-cyan transition"
          >
            <div className="mb-4">
              <h3 className="text-lg font-bold text-cyan mb-2">{program.title}</h3>
              <p className="text-slate-400 text-sm">{program.institution}</p>
              <p className="text-slate-400 text-sm">{program.country}</p>
            </div>

            <div className="space-y-2 mb-4 text-sm text-slate-300">
              {program.duration && (
                <p>
                  <span className="text-gold">Duration:</span> {program.duration}
                </p>
              )}
              {program.test_score_req && (
                <p>
                  <span className="text-gold">Test Required:</span>{" "}
                  {program.test_score_req}
                </p>
              )}
              {program.application_fee && (
                <p>
                  <span className="text-gold">Fee:</span> ${program.application_fee}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleApply(program.id)}
                disabled={applying === program.id}
                className="flex-1 bg-cyan text-slate-900 font-semibold py-2 rounded-lg hover:bg-cyan/90 transition disabled:opacity-50"
              >
                {applying === program.id ? "Applying..." : "Apply Now"}
              </button>
              <button className="flex-1 bg-slate-700 text-cyan font-semibold py-2 rounded-lg hover:bg-slate-600 transition">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {programs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">No programs found</p>
        </div>
      )}
    </div>
  );
};

