import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { authService } from "../services/authService";
import { toast } from "sonner";
import { useState } from "react";

interface NavbarProps {
  onMenuClick: () => void;
}

export const Navbar = ({ onMenuClick }: NavbarProps) => {
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
    <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-cyan hover:text-cyan/80 text-2xl"
        >
          ☰
        </button>
        <input
          type="text"
          placeholder="Search programs, universities..."
          className="hidden md:block px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan w-64"
        />
      </div>

      <div className="flex items-center space-x-6">
        <button className="text-slate-300 hover:text-cyan text-xl">🔔</button>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 text-slate-300 hover:text-cyan"
          >
            <div className="w-8 h-8 bg-cyan rounded-full flex items-center justify-center text-slate-900 font-bold">
              {user?.email?.[0]?.toUpperCase() || "U"}
            </div>
            <span className="hidden sm:inline text-sm">{user?.email}</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50">
              <button
                onClick={() => {
                  navigate("/dashboard/profile");
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-cyan"
              >
                Profile Settings
              </button>
              <button
                onClick={() => {
                  navigate("/dashboard/help");
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-cyan"
              >
                Help & Support
              </button>
              <hr className="border-slate-700" />
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-400 hover:bg-slate-700"
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

