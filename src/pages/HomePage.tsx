import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/sections/SectionHeader';
import ServiceCard from '@/components/sections/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import SEO from '@/components/SEO';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Leaf,
  GraduationCap,
  LineChart,
  FileText,
  Building2,
  Plane,
  Landmark,
  Zap,
  Wheat,
  BookOpen,
  Laptop,
  HeartPulse,
  Home,
  Truck,
  CheckCircle,
  Target,
  Shield
} from 'lucide-react';

const servicesList = [
  { id: 'management', icon: BarChart3, href: '/services/management-policy' },
  { id: 'business', icon: Briefcase, href: '/services/business-strategy' },
  { id: 'sustainability', icon: Leaf, href: '/services/sustainability' },
  { id: 'education', icon: GraduationCap, href: '/services/education' },
  { id: 'data', icon: LineChart, href: '/services/data-analytics' },
  { id: 'writing', icon: FileText, href: '/services/writing' },
];

const whyChooseUsList = [
  { id: 'expertise', icon: Landmark },
  { id: 'evidence', icon: LineChart },
  { id: 'tailored', icon: Target },
  { id: 'trackRecord', icon: Shield },
];

const focusAreasList = [
  { id: 'sustainability', icon: Leaf, category: 'environment' },
  { id: 'smartCities', icon: Building2, category: 'infrastructure' },
  { id: 'tourism', icon: Plane, category: 'societal' },
  { id: 'publicPolicy', icon: Landmark, category: 'economic' },
  { id: 'energy', icon: Zap, category: 'environment' },
  { id: 'agriculture', icon: Wheat, category: 'environment' },
  { id: 'education', icon: BookOpen, category: 'societal' },
  { id: 'digitalEconomy', icon: Laptop, category: 'economic' },
  { id: 'healthcare', icon: HeartPulse, category: 'societal' },
  { id: 'realEstate', icon: Home, category: 'infrastructure' },
  { id: 'transportation', icon: Truck, category: 'infrastructure' },
];

const industryIdMap: Record<string, string> = {
  sustainability: 'sustainability',
  smartCities: 'smart-cities',
  tourism: 'tourism-culture',
  publicPolicy: 'public-policy',
  energy: 'energy-environment',
  agriculture: 'agriculture-food',
  education: 'education-human-capital',
  digitalEconomy: 'digital-economy',
  healthcare: 'healthcare',
  realEstate: 'real-estate',
  transportation: 'transportation-logistics',
};

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <>
      <SEO canonical="/" />
      {/* Hero Section - Problem → Solution above the fold */}
      <section
        className="relative min-h-screen flex items-center gradient-hero overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-eco/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Trust badge */}
              <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6">
                ✓ {t('hero.trustedBy')}
              </span>

              {/* H1 - Clear value proposition */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
                <Trans i18nKey="hero.title">
                  Strategic Consulting for <span className="text-accent">Saudi Arabia</span>
                </Trans>
              </h1>

              {/* Clear benefit statement */}
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-4 max-w-xl">
                {t('hero.description')}
              </p>

              {/* Quick benefits list */}
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-primary-foreground/80 mb-8">
                <li className={`flex items-center gap-2`}>
                  <CheckCircle className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>{t('hero.marketEntry')}</span>
                </li>
                <li className={`flex items-center gap-2`}>
                  <CheckCircle className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>{t('hero.policyResearch')}</span>
                </li>
                <li className={`flex items-center gap-2`}>
                  <CheckCircle className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>{t('hero.sustainability')}</span>
                </li>
              </ul>

              {/* Primary CTA - Action-oriented */}
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="hero" size="xl">
                  <a href="https://wa.me/966578484894" target="_blank" rel="noopener noreferrer" className="group">
                    {t('hero.cta')}
                    <ArrowRight className={`w-5 h-5 transition-transform ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="xl" className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/services">{t('hero.viewServices')}</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-eco/30 rounded-3xl blur-2xl" aria-hidden="true" />
                <img
                  src="https://images.unsplash.com/photo-1623680904963-5580d963e18e?auto=format&fit=crop&q=80&w=1200"
                  alt="Historic Saudi building"
                  className="relative rounded-3xl shadow-2xl"
                  loading="eager"
                  width="1200"
                  height="800"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>


      {/* Problem Statement */}
      <section className="section-padding" aria-labelledby="intro-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="intro-heading" className={`text-2xl md:text-3xl font-heading font-bold text-secondary mb-6 ${isRTL ? 'text-right lg:text-center' : 'text-left lg:text-center'}`}>
                {t('home.intro.title')}
              </h2>
              <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed ${isRTL ? 'text-right lg:text-center' : 'text-left lg:text-center'}`}>
                <Trans i18nKey="home.intro.description">
                  Whether you're entering the Saudi market... <strong className="text-foreground">Sustivance Consulting</strong> ...
                </Trans>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Benefits */}
      <section className="section-padding bg-muted" aria-labelledby="why-choose-heading">
        <div className="container-custom">
          <SectionHeader
            label={t('home.whyChooseUs.label')}
            title={t('home.whyChooseUs.title')}
            description={t('home.whyChooseUs.description')}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsList.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-2xl shadow-card border border-border/50"
              >
                <div className="mb-4">
                  <item.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-secondary mb-2">
                  {t(`home.whyChooseUs.items.${item.id}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`home.whyChooseUs.items.${item.id}.description`)}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" aria-labelledby="services-heading">
        <div className="container-custom">
          <SectionHeader
            label={t('home.services.label')}
            title={t('home.services.title')}
            description={t('home.services.description')}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesList.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={t(`home.services.items.${service.id}.title`)}
                description={t(`home.services.items.${service.id}.description`)}
                icon={service.icon}
                href={service.href}
                index={index}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/services" className="group">
                {t('home.services.viewAll')}
                <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="section-padding bg-muted" aria-labelledby="industries-heading">
        <div className="container-custom">
          <SectionHeader
            label={t('home.industries.label')}
            title={t('home.industries.title')}
            description={t('home.industries.description')}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {focusAreasList.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/industries#${industryIdMap[area.id] || area.id}`}
                  className="group flex flex-col items-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all"
                  aria-label={`Learn about our ${t(`home.industries.items.${area.id}`)} consulting services`}
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    <area.icon className="w-8 h-8 text-primary transition-colors" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-secondary text-center group-hover:text-primary transition-colors">
                    {t(`home.industries.items.${area.id}`)}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <CTASection
        title={t('home.cta.title')}
        description={t('home.cta.description')}
        buttonText={t('home.cta.button')}
      />
    </>
  );
}
