import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: "📊" },
  { label: "Profile", path: "/dashboard/profile", icon: "👤" },
  { label: "Educational Background", path: "/dashboard/education", icon: "🎓" },
  { label: "Test Scores", path: "/dashboard/test-scores", icon: "📝" },
  { label: "Preferences", path: "/dashboard/preferences", icon: "⚙️" },
  { label: "Programs", path: "/dashboard/programs", icon: "🏫" },
  { label: "Applications", path: "/dashboard/applications", icon: "📋" },
  { label: "Shortlists", path: "/dashboard/shortlists", icon: "⭐" },
  { label: "Offers", path: "/dashboard/offers", icon: "🎁" },
  { label: "Events", path: "/dashboard/events", icon: "📅" },
];

export const Sidebar = ({ open, onToggle }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-700 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-cyan mb-8">GSL B2B</h1>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                  location.pathname === item.path
                    ? "bg-cyan text-slate-900 font-semibold"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

