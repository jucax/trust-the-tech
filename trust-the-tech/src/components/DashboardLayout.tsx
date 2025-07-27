import { Outlet, NavLink, Link } from 'react-router-dom';
import { 
  BookOpen, 
  Lightbulb, 
  TrendingUp, 
  Award, 
  Calendar, 
  User,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const sidebarItems = [
  { icon: BookOpen, label: 'My Courses', href: '/dashboard' },
  { icon: Lightbulb, label: 'Suggested Courses', href: '/dashboard/suggested' },
  { icon: TrendingUp, label: 'Progress', href: '/dashboard/progress' },
  { icon: Award, label: 'Certifications', href: '/dashboard/certifications' },
  { icon: Calendar, label: 'Calendar', href: '/dashboard/calendar' },
  { icon: User, label: 'Profile', href: '/dashboard/profile' },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <div className="flex flex-col">
        {/* Top bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3">
                <img src="/assets/trust-the-tech-logo-1.png" alt="Trust the Tech Logo" className="h-8 w-auto rounded" />
                <span className="font-decorative font-bold text-lg text-secondary">Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900">Welcome back{user ? `, ${user.name}` : ''}!</h1>
                <p className="text-sm text-gray-500">Continue your learning journey</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 px-6 py-6">
          <div className="w-full max-w-4xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
} 