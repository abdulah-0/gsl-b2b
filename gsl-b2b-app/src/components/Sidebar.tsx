import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Heart,
  Send,
  FileEdit,
  CreditCard,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Programs", href: "/dashboard/programs", icon: BookOpen },
  { name: "Documents", href: "/dashboard/documents", icon: FileText },
  { name: "Shortlists", href: "/dashboard/shortlists", icon: Heart },
  { name: "Applications & Offers", href: "/dashboard/applications", icon: Send },
  { name: "Drafts", href: "/dashboard/drafts", icon: FileEdit },
  { name: "Visa", href: "/dashboard/visa", icon: CreditCard },
  { name: "My sessions", href: "/dashboard/sessions", icon: Calendar },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full w-20 flex-col items-center bg-[#1c1c1c] py-6 text-white transition-all duration-300">
      <div className="mb-8">
        {/* Logo Placeholder */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1 shadow-md">
          <span className="text-xl font-bold text-[#ea580c]">G</span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col items-center gap-8 w-full">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href ||
            (item.href !== "/dashboard" && location.pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "group flex flex-col items-center justify-center gap-1.5 py-2 text-xs font-medium text-gray-500 transition-all hover:text-white w-full border-l-[3px] border-transparent relative",
                isActive && "text-white border-white bg-white/5"
              )}
            >
              <item.icon className={cn("h-5 w-5 transition-colors", isActive ? "text-white" : "text-gray-500 group-hover:text-white")} />
              <span className="text-[9px] text-center leading-tight max-w-[60px] font-normal">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
