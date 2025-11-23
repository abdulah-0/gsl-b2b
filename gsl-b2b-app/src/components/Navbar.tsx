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
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Search Section */}
      <div className="flex items-center flex-1 max-w-3xl gap-4">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-2xl border border-gray-200">
          <div className="flex items-center border-r border-gray-300 pr-3 mr-3 cursor-pointer">
            <span className="text-sm font-medium text-gray-700">All Countries</span>
            <ChevronDown className="h-4 w-4 ml-2 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search discipline, institutes or programs"
            className="bg-transparent border-none focus:outline-none text-sm w-full text-gray-700 placeholder-gray-400"
          />
          <button className="p-1 bg-gray-800 rounded-full text-white hover:bg-black transition-colors">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className="text-gray-500 hover:text-gray-700 relative">
          <Search className="h-5 w-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-700 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
            5
          </span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2"
          >
            <div className="h-10 w-10 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold text-sm">
              MS
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">Shilpa Mehra</p>
                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              </div>
              <button
                onClick={() => {
                  navigate("/dashboard/profile");
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Profile Settings
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

