import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.png';
import { useTranslation } from 'react-i18next';

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerLinks = {
  services: [
    { id: 'management', href: '/services/management-policy' },
    { id: 'business', href: '/services/business-strategy' },
    { id: 'sustainability', href: '/services/sustainability' },
    { id: 'education', href: '/services/education' },
    { id: 'data', href: '/services/data-analytics' },
  ],
  company: [
    { id: 'about', href: '/about' },
    { id: 'industries', href: '/industries' },
    { id: 'contact', href: '/contact' },
  ],
};

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground" role="contentinfo">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3" aria-label="Sustivance Consulting - Home">
              <img
                src={logo}
                alt="Sustivance Research & Consulting"
                className="h-14 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-wide text-primary-foreground">
                  {t('brand.name')}
                </span>
                <span className="text-xs tracking-wider text-secondary-foreground/80">
                  {t('brand.subtitle')}
                </span>
              </div>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/sustivance-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary transition-colors"
                aria-label="Follow Sustivance on LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://x.com/sustivanceksa?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary transition-colors"
                aria-label="Follow Sustivance on X"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <nav aria-label="Services navigation">
            <h2 className="font-heading font-semibold text-primary-foreground mb-6">
              {t('footer.sections.services')}
            </h2>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {t(`footer.services.${link.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Column */}
          <nav aria-label="Company navigation">
            <h2 className="font-heading font-semibold text-primary-foreground mb-6">
              {t('footer.sections.company')}
            </h2>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {t(`footer.company.${link.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Column */}
          <div>
            <h2 className="font-heading font-semibold text-primary-foreground mb-6">
              {t('footer.sections.contact')}
            </h2>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-secondary-foreground/70">
                    {t('footer.address')}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:info@sustivance.com"
                    className="text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    info@sustivance.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <a
                    href="tel:+966545840300"
                    className="text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors"
                    dir="ltr"
                  >
                    +966 545840300
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10">
          <p className="text-sm text-secondary-foreground/60 mx-auto md:mx-0">
            {t('footer.rights', { year: currentYear })}
          </p>

        </div>
      </div>
    </footer>
  );
}
