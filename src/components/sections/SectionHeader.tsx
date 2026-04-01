import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionHeader({ label, title, description, align = 'center' }: SectionHeaderProps) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const getAlignmentClasses = () => {
    if (align === 'center') return 'mx-auto text-center';
    if (isRTL) return 'text-right';
    return 'text-left';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`max-w-3xl mb-12 lg:mb-16 ${getAlignmentClasses()}`}
    >
      {label && (
        <span className={`inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4`}>
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
