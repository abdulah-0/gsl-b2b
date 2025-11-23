import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { authService } from "../services/authService";
import { toast } from "sonner";
import { useState } from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await authService.signOut();
      logout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Search Section */}
      <div className="flex items-center flex-1 max-w-3xl gap-6">
        <div className="flex items-center bg-white rounded-full px-2 py-1.5 w-full max-w-2xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
          <div className="flex items-center border-r border-gray-200 pr-4 mr-2 cursor-pointer hover:bg-gray-50 rounded-l-full py-2 pl-4 transition-colors group">
            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">All Countries</span>
            <ChevronDown className="h-4 w-4 ml-2 text-gray-400 group-hover:text-gray-600" />
          </div>
          <input
            type="text"
            placeholder="Search discipline, institutes or programs..."
            className="bg-transparent border-none focus:outline-none text-sm w-full text-gray-700 placeholder-gray-400 px-2"
          />
          <button className="p-2.5 bg-[#1c1c1c] rounded-full text-white hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-sm">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-gray-700 relative p-2 hover:bg-gray-50 rounded-full transition-colors">
          <Search className="h-5 w-5" />
        </button>
        <button className="text-gray-400 hover:text-gray-700 relative p-2 hover:bg-gray-50 rounded-full transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-[#ef4444] rounded-full border-2 border-white"></span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative pl-2 border-l border-gray-200">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded-full transition-colors pr-3"
          >
            <div className="h-9 w-9 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs border border-pink-200">
              MS
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-3 border-b border-gray-50">
                <p className="text-sm font-bold text-gray-900">Shilpa Mehra</p>
                <p className="text-xs text-gray-500 truncate mt-0.5">{user?.email}</p>
              </div>
              <div className="py-1">
                <button
                  onClick={() => {
                    navigate("/dashboard/profile");
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  Profile Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2.5 text-sm text-[#ef4444] hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

