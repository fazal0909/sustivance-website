import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import logo from '@/assets/logo.png';
import { useTranslation } from 'react-i18next';

const servicesList = [
  { id: 'management', href: '/services/management-policy' },
  { id: 'business', href: '/services/business-strategy' },
  { id: 'sustainability', href: '/services/sustainability' },
  { id: 'education', href: '/services/education' },
  { id: 'data', href: '/services/data-analytics' },
  { id: 'writing', href: '/services/writing' },
];

const navLinksList = [
  { id: 'home', href: '/' },
  { id: 'about', href: '/about' },
  { id: 'services', href: '/services', hasDropdown: true },
  { id: 'industries', href: '/industries' },
  { id: 'contact', href: '/contact' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
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
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Hidden on mobile after scroll */}
          <Link 
            to="/" 
            className={`flex items-center gap-3 transition-opacity duration-300 ${isScrolled ? 'lg:opacity-100 opacity-0 pointer-events-none lg:pointer-events-auto' : 'opacity-100 outline-none'}`} 
            aria-label="Sustivance Consulting - Home"
          >
            <img
              src={logo}
              alt="Sustivance Research & Consulting"
              className="h-14 w-auto"
            />
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg tracking-wide ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                {t('brand.name')}
              </span>
              <span className={`text-xs tracking-wider ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                {t('brand.subtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" role="menubar">
            {navLinksList.map((link) => (
              <div key={link.id} className="relative" role="none">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to="/services"
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-muted/50 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'
                        }`}
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={isServicesOpen}
                    >
                      {t(`nav.${link.id}`)}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </Link>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full ${i18n.language === 'ar' ? 'right-0' : 'left-0'} pt-2`}
                          role="menu"
                        >
                          <div className="bg-card rounded-xl shadow-xl border border-border p-2 min-w-[300px]">
                            {servicesList.map((service) => (
                              <Link
                                key={service.id}
                                to={service.href}
                                className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-lg transition-colors text-start"
                                role="menuitem"
                              >
                                {t(`footer.services.${service.id}`)}
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
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-muted/50 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'
                      } ${location.pathname === link.href ? 'bg-muted/50' : ''}`}
                    role="menuitem"
                    aria-current={location.pathname === link.href ? 'page' : undefined}
                  >
                    {t(`nav.${link.id}`)}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher isScrolled={isScrolled} />
            <Button asChild variant={isScrolled ? "default" : "hero"}>
              <Link to="/contact">{t('nav.consultation')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button + Language Switcher for Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <div className={`transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <LanguageSwitcher />
            </div>
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} aria-hidden="true" />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} aria-hidden="true" />
              )}
            </button>
          </div>
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
                {navLinksList.map((link) => (
                  <div key={link.id} role="none">
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium"
                          aria-expanded={isServicesOpen}
                          role="menuitem"
                        >
                          {t(`nav.${link.id}`)}
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
                                className="block px-8 py-2 text-sm text-primary font-medium hover:text-foreground text-start"
                                role="menuitem"
                              >
                                {t('nav.viewAllServices')}
                              </Link>
                              {servicesList.map((service) => (
                                <Link
                                  key={service.id}
                                  to={service.href}
                                  className="block px-8 py-2 text-sm text-muted-foreground hover:text-foreground text-start"
                                  role="menuitem"
                                >
                                  {t(`footer.services.${service.id}`)}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className="block px-4 py-3 text-foreground font-medium hover:bg-muted/50 rounded-full text-start"
                        role="menuitem"
                        aria-current={location.pathname === link.href ? 'page' : undefined}
                      >
                        {t(`nav.${link.id}`)}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Button asChild className="w-full">
                    <Link to="/contact">{t('nav.consultation')}</Link>
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
