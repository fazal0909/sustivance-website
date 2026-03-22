import { motion } from 'framer-motion';
import { useParams, Navigate } from 'react-router-dom';
import HeroHeader from '@/components/sections/HeroHeader';
import CTASection from '@/components/sections/CTASection';
import {
  BarChart3,
  Briefcase,
  Leaf,
  GraduationCap,
  LineChart,
  FileText,
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

export default function ServicePage() {
  const { t } = useTranslation();
  const { slug } = useParams();

  // Validate slug
  if (!slug || !icons[slug]) {
    return <Navigate to="/404" replace />;
  }

  const title = t(`servicesPage.details.${slug}.title`);
  const subtitle = t(`servicesPage.details.${slug}.subtitle`);
  const challenges = t(`servicesPage.details.${slug}.challenges`, { returnObjects: true }) as string[];
  const solutions = t(`servicesPage.details.${slug}.solutions`, { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const kpis = t(`servicesPage.details.${slug}.kpis`, { returnObjects: true }) as string[];

  return (
    <>
      <HeroHeader title={title} subtitle={subtitle} />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">{t('servicesPage.details.common.challenges')}</h2>
              <ul className="space-y-4">
                {challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3"><span className="text-accent font-bold text-lg">•</span><span className="text-muted-foreground">{challenge}</span></li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">{t('servicesPage.details.common.solutions')}</h2>
              <div className="grid gap-4">
                {solutions.map((sol, i) => (
                  <div key={i} className="p-4 bg-card rounded-xl border border-border/50">
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-eco shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-secondary mb-1">{sol.title}</h3>
                        <p className="text-sm text-muted-foreground">{sol.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="bg-muted rounded-2xl p-8 text-center">
            <h3 className="text-xl font-heading font-bold text-secondary mb-6">{t('servicesPage.details.common.deliver')}</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {kpis.map((kpi, i) => (
                <div key={i} className="text-primary font-heading font-bold text-xl">{kpi}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title={`${t('servicesPage.cta.title')}`} description={t('servicesPage.cta.description')} buttonText={t('servicesPage.cta.button')} />
    </>
  );
}
