import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroHeader from '@/components/sections/HeroHeader';
import CTASection from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import {
  BarChart3,
  Briefcase,
  Leaf,
  GraduationCap,
  LineChart,
  FileText,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons: Record<string, any> = {
  'management-policy': BarChart3,
  'business-strategy': Briefcase,
  'sustainability': Leaf,
  'education': GraduationCap,
  'data-analytics': LineChart,
  'writing': FileText,
};

const serviceIds = [
  'management-policy',
  'business-strategy',
  'sustainability',
  'education',
  'data-analytics',
  'writing'
];

export default function ServicesPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <>
      <SEO
        title={t('servicesPage.meta.title')}
        description={t('servicesPage.meta.description')}
        canonical="/services"
      />
      <HeroHeader
        title={t('servicesPage.hero.title')}
        subtitle={t('servicesPage.hero.subtitle')}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {serviceIds.map((id, index) => {
              const Icon = icons[id];
              const offerings = t(`servicesPage.list.${id}.offerings`, { returnObjects: true }) as string[];

              return (
                <motion.div
                  key={id}
                  id={id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="scroll-mt-28"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2 text-right' : (isRTL ? 'text-right' : 'text-left')}>
                      <div className={`flex items-center gap-4 mb-4`}>
                        <div className="flex items-center justify-center">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary">
                          {t(`servicesPage.list.${id}.title`)}
                        </h2>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">
                        {t(`servicesPage.list.${id}.description`)}
                      </p>
                      <Button asChild variant="outline" className="group">
                        <Link to={`/services/${id}`}>
                          {t('common.learnMore')}
                          <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                        </Link>
                      </Button>
                    </div>

                    <div className={`bg-card p-6 rounded-2xl border border-border/50 ${index % 2 === 1 ? 'lg:order-1' : ''} ${isRTL ? 'text-right' : 'text-left'}`}>
                      <h3 className="font-heading font-semibold text-secondary mb-4">
                        {t('servicesPage.offer')}
                      </h3>
                      <ul className="space-y-3">
                        {offerings.map((offering, i) => (
                          <li key={i} className={`flex gap-3`}>
                            <CheckCircle className="w-5 h-5 text-eco shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{offering}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {index < serviceIds.length - 1 && (
                    <div className="mt-16 border-b border-border/50" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={t('servicesPage.cta.title')}
        description={t('servicesPage.cta.description')}
        buttonText={t('servicesPage.cta.button')}
      />
    </>
  );
}
