import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index?: number;
}

export default function ServiceCard({ title, description, icon: Icon, href, index = 0 }: ServiceCardProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={isRTL ? 'text-right' : 'text-left'}
    >
      <Link
        to={href}
        className="group block h-full p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
        aria-label={`Learn more about ${title}`}
      >
        <div className={`mb-6 group-hover:scale-110 transition-transform duration-300 ${isRTL ? 'text-right' : ''}`} aria-hidden="true">
          <Icon className="w-10 h-10 text-primary transition-colors" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-secondary mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <span className={`inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all`}>
          {t('common.learnMore')}
          <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} aria-hidden="true" />
        </span>
      </Link>
    </motion.article>
  );
}
