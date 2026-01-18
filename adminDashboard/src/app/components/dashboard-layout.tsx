import { ReactNode } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { Button } from '@/app/components/ui/button';
import { toast } from "sonner";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/leads', icon: Users, label: 'Leads' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

 function logout() {
  localStorage.removeItem("admin_token");
  toast.error("You have been logged out.");

  setTimeout(() => {
    window.location.href = "/";
  }, 3000); // small delay so user sees toast
}

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-md mr-3">
            <div className="w-5 h-5 border-3 border-white rounded-md" />
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            2SquareTech
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start gap-3 text-gray-600 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10 border-2 border-gray-200">
              <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                AD
              </AvatarFallback>
            </Avatar>

            <button
              onClick={logout}
              className="text-sm bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
