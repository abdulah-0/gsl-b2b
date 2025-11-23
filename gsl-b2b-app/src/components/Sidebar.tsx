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
    <div className="flex h-full w-24 flex-col items-center bg-[#2d2d2d] py-6 text-white">
      <div className="mb-8">
        {/* Logo Placeholder - Red Bird/Globe */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1">
          <span className="text-xl font-bold text-orange-500">G</span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col items-center gap-6 w-full">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href ||
            (item.href !== "/dashboard" && location.pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "group flex flex-col items-center justify-center gap-1 p-2 text-xs font-medium text-gray-400 transition-colors hover:text-white w-full border-l-4 border-transparent",
                isActive && "text-white border-white bg-white/10"
              )}
            >
              <item.icon className={cn("h-6 w-6", isActive ? "text-white" : "text-gray-400 group-hover:text-white")} />
              <span className="text-[10px] text-center leading-tight max-w-[60px]">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
