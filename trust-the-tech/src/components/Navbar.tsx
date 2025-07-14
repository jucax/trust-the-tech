import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export default function Navbar() {
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
            <span className="font-bold text-xl text-primary">Trust the Tech</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-600'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/courses" 
              className={({isActive}) => 
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-600'
                }`
              }
            >
              Courses
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-600'
                }`
              }
            >
              About
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 