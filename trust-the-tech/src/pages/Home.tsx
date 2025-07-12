import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 text-center gap-8 bg-background">
      <motion.img
        src="/assets/trust-the-tech-logo-1.png"
        alt="Trust the Tech Logo"
        className="mx-auto mb-6 h-24 w-24 rounded-full shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      />
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-primary mb-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Welcome to Trust the Tech
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-muted-foreground"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Empowering everyone—especially older adults and underserved communities—to learn digital tools and build tech confidence. Start your journey with easy, friendly courses!
      </motion.p>
      <Button asChild className="bg-accent text-white rounded-full px-8 py-3 text-lg font-semibold shadow hover:bg-accent/90">
        <Link to="/catalog">Browse Courses</Link>
      </Button>
    </section>
  );
} 