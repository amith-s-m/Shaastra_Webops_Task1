import { useState, useEffect } from 'react';                 //this is a hint for you guys 
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from "react-router-dom";
import { useTheme } from 'next-themes';
import { cx } from 'class-variance-authority';

export default function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);                                    //learn to read the code(error can be easily found if u see the logic behind something which seems correct)
  const { theme } = useTheme();

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    scrolled: {
      backdropFilter: 'blur(12px)',
      backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.05)',
    },
  };

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300 border-b border-transparent data-[scrolled=true]:border-gray-200 dark:data-[scrolled=true]:border-gray-800"
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? 'scrolled' : 'animate'}
      data-scrolled={isScrolled}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link to="/" className={cx("flex items-center space-x-3")}>
              <div className="flex h-8 w-8 items-center justify-center rounded bg-black dark:bg-white text-white dark:text-black">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                VergeStore
              </span>
            </Link>
          </motion.div>

          {/* Login Option */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-sm font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-all duration-300 rounded-full px-5 py-2 backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-white/40 dark:hover:bg-white/10"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
