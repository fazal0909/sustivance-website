import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const services = [
  { name: 'Management & Policy Consulting', href: '/services/management-policy' },
  { name: 'Business & Strategic Advisory', href: '/services/business-strategy' },
  { name: 'Sustainability & Environmental', href: '/services/sustainability' },
  { name: 'Academic & Higher Education', href: '/services/education' },
  { name: 'Data & Analytics Solutions', href: '/services/data-analytics' },
  { name: 'Professional Writing', href: '/services/writing' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Industries', href: '/industries' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Sustivance Consulting - Home">
            <img 
              src={logo} 
              alt="Sustivance Research & Consulting" 
              className="h-14 w-auto"
            />
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg tracking-wide ${isScrolled || !isHomePage ? 'text-foreground' : 'text-primary-foreground'}`}>
                SUSTIVANCE
              </span>
              <span className={`text-xs tracking-wider ${isScrolled || !isHomePage ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                Research & Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" role="menubar">
            {navLinks.map((link) => (
              <div key={link.name} className="relative" role="none">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to="/services"
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted/50 ${
                        isScrolled || !isHomePage ? 'text-foreground' : 'text-primary-foreground'
                      }`}
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={isServicesOpen}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </Link>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2"
                          role="menu"
                        >
                          <div className="bg-card rounded-xl shadow-xl border border-border p-2 min-w-[300px]">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
                                role="menuitem"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted/50 ${
                      isScrolled || !isHomePage ? 'text-foreground' : 'text-primary-foreground'
                    } ${location.pathname === link.href ? 'bg-muted/50' : ''}`}
                    role="menuitem"
                    aria-current={location.pathname === link.href ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild variant={isScrolled || !isHomePage ? "default" : "hero"}>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-foreground' : 'text-primary-foreground'}`} aria-hidden="true" />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-foreground' : 'text-primary-foreground'}`} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card border-t border-border"
              role="menu"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name} role="none">
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium"
                          aria-expanded={isServicesOpen}
                          role="menuitem"
                        >
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-muted/50"
                              role="menu"
                            >
                              <Link
                                to="/services"
                                className="block px-8 py-2 text-sm text-primary font-medium hover:text-foreground"
                                role="menuitem"
                              >
                                View All Services
                              </Link>
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="block px-8 py-2 text-sm text-muted-foreground hover:text-foreground"
                                  role="menuitem"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className="block px-4 py-3 text-foreground font-medium hover:bg-muted/50 rounded-lg"
                        role="menuitem"
                        aria-current={location.pathname === link.href ? 'page' : undefined}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Button asChild className="w-full">
                    <Link to="/contact">Get Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
