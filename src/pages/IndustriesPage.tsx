import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import HeroHeader from '@/components/sections/HeroHeader';
import CTASection from '@/components/sections/CTASection';
import SEO from '@/components/SEO';
import {
  Leaf,
  Zap,
  Wheat,
  Building2,
  Home,
  Truck,
  Plane,
  BookOpen,
  HeartPulse,
  Laptop,
  Landmark
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons: Record<string, any> = {
  'sustainability': Leaf,
  'energy-environment': Zap,
  'agriculture-food': Wheat,
  'smart-cities': Building2,
  'real-estate': Home,
  'transportation-logistics': Truck,
  'tourism-culture': Plane,
  'education-human-capital': BookOpen,
  'healthcare': HeartPulse,
  'digital-economy': Laptop,
  'public-policy': Landmark
};

const groupsStructure = [
  {
    nameKey: 'Sustainability & Environment',
    color: 'eco',
    industries: ['sustainability', 'energy-environment', 'agriculture-food']
  },
  {
    nameKey: 'Urban & Infrastructure',
    color: 'primary',
    industries: ['smart-cities', 'real-estate', 'transportation-logistics']
  },
  {
    nameKey: 'Societal & Human Development',
    color: 'accent',
    industries: ['tourism-culture', 'education-human-capital', 'healthcare']
  },
  {
    nameKey: 'Economic & Digital Transformation',
    color: 'secondary',
    industries: ['digital-economy', 'public-policy']
  }
];

export default function IndustriesPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Create localized Industry Groups data
  const industryGroups = groupsStructure.map(group => ({
    name: t(`industriesPage.groups.${group.nameKey}.name`),
    originalName: group.nameKey,
    color: group.color,
    industries: group.industries.map(indId => ({
      id: indId,
      name: t(`industriesPage.groups.${group.nameKey}.industries.${indId}.name`),
      description: t(`industriesPage.groups.${group.nameKey}.industries.${indId}.description`),
      icon: icons[indId]
    }))
  }));

  const [activeGroup, setActiveGroup] = useState(industryGroups[0].name);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    // We use the original English NameKey for IDs to keep them consistent across languages for scrolling
    const handleScroll = () => {
      const groupElements = industryGroups.map((group) => ({
        name: group.name,
        element: document.getElementById(group.originalName.toLowerCase().replace(/\s+/g, '-')),
      }));

      const scrollPosition = window.scrollY + 250;

      groupElements.forEach((group) => {
        if (group.element) {
          const sectionTop = group.element.offsetTop;
          const sectionBottom = sectionTop + group.element.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveGroup(group.name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [industryGroups]);

  const scrollToGroup = (originalName: string) => {
    const element = document.getElementById(originalName.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SEO
        title={t('industriesPage.meta.title')}
        description={t('industriesPage.meta.description')}
        canonical="/industries"
      />
      <HeroHeader
        title={t('industriesPage.hero.title')}
        subtitle={t('industriesPage.hero.subtitle')}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className={`flex gap-12 flex-col lg:flex-row ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Sticky Navigation - Desktop */}
            <div className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28">
                <nav className="space-y-2">
                  {industryGroups.map((group) => (
                    <button
                      key={group.name}
                      onClick={() => scrollToGroup(group.originalName)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isRTL ? 'text-right' : 'text-left'} ${activeGroup === group.name
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                    >
                      <span className="text-sm font-medium">{group.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Industry Groups */}
            <div className="flex-1 space-y-20">
              {industryGroups.map((group) => (
                <motion.div
                  key={group.name}
                  id={group.originalName.toLowerCase().replace(/\s+/g, '-')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className={`scroll-mt-28 ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 pb-4 border-b border-border/50">
                    {group.name}
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                    {group.industries.map((industry, index) => (
                      <motion.div
                        key={industry.id}
                        id={industry.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all scroll-mt-28"
                      >
                        <div className={`flex items-start gap-4 mb-4`}>
                          <div className="flex items-center justify-center shrink-0 pt-1">
                            <industry.icon className="w-9 h-9 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-heading font-semibold text-secondary mb-2">
                              {industry.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {industry.description}
                            </p>
                          </div>
                        </div>

                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={t('industriesPage.cta.title')}
        description={t('industriesPage.cta.description')}
        buttonText={t('industriesPage.cta.button')}
      />
    </>
  );
}
