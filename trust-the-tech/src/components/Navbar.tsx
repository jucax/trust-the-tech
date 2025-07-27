import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    // Redirect to home page after logout
    window.location.href = '/';
  };

  return (
    <motion.nav 
      className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/trust-the-tech-logo-1.png" alt="Trust the Tech Logo" className="h-10 w-auto rounded-lg" />
            <span className="font-decorative font-bold text-xl text-secondary">Trust the Tech</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `text-sm font-medium transition-colors hover:text-secondary ${
                  isActive ? 'text-secondary' : 'text-gray-600'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/courses" 
              className={({isActive}) => 
                `text-sm font-medium transition-colors hover:text-secondary ${
                  isActive ? 'text-secondary' : 'text-gray-600'
                }`
              }
            >
              Courses
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                `text-sm font-medium transition-colors hover:text-secondary ${
                  isActive ? 'text-secondary' : 'text-gray-600'
                }`
              }
            >
              About
            </NavLink>
            {isAuthenticated && (
              <NavLink 
                to="/dashboard" 
                className={({isActive}) => 
                  `text-sm font-medium transition-colors hover:text-secondary ${
                    isActive ? 'text-secondary' : 'text-gray-600'
                  }`
                }
              >
                Dashboard
              </NavLink>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-600 hidden sm:block">
                  Welcome, {user?.name}
                </span>
                <Button variant="ghost" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 