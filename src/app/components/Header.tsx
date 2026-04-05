import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { GlowButton } from './GlowButton';
import iconicaLogo from '../../assets/00ae5a5bf96ad0a467a78b5cb2dac25336ad0c63.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Technology', path: '/technology' },
    { name: 'Charging', path: '/charging' },
    { name: 'Dealers', path: '/dealers' },
    { name: 'Test Ride', path: '/test-ride' },
    { name: 'Batteries', path: '/batteries' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0b0f]/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={iconicaLogo} alt="ICONICA" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#00ff88]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00d4aa]"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex gap-3">
            <Link to="/test-ride">
              <GlowButton variant="primary">Book Test Ride</GlowButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-[#0a0b0f]/95 backdrop-blur-xl border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-[#00ff88]'
                    : 'text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/test-ride" onClick={() => setIsMobileMenuOpen(false)}>
              <GlowButton variant="primary" className="w-full">Book Test Ride</GlowButton>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}