import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-4 py-2 flex items-center justify-between shadow-md">
      <Link to="/" className="flex items-center gap-2">
        <img src="/assets/trust-the-tech-logo-1.png" alt="Trust the Tech Logo" className="h-10 w-auto rounded" />
        <span className="font-bold text-xl tracking-tight">Trust the Tech</span>
      </Link>
      <div className="flex gap-4 items-center">
        <NavLink to="/" className={({isActive}) => isActive ? 'underline' : ''}>Home</NavLink>
        <NavLink to="/catalog" className={({isActive}) => isActive ? 'underline' : ''}>Browse Courses</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'underline' : ''}>About</NavLink>
        <Button asChild className="ml-4 bg-accent text-white rounded-full px-6 py-2 text-base font-semibold shadow hover:bg-accent/90">
          <Link to="/catalog">Browse Courses</Link>
        </Button>
      </div>
    </nav>
  );
} 