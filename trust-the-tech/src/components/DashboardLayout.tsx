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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        initial={{ x: -256 }}
        animate={{ x: sidebarOpen ? 0 : -256 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link to="/" className="flex items-center gap-3">
              <img src="/assets/trust-the-tech-logo-1.png" alt="Trust the Tech Logo" className="h-8 w-auto rounded" />
              <span className="font-bold text-lg text-primary">Dashboard</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-4 lg:px-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900">Welcome back, John!</h1>
                <p className="text-sm text-gray-500">Continue your learning journey</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
} 