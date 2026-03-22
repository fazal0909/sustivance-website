import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CTASectionProps {
  title: string;
  description?: string;
  buttonText?: string;
}

export default function CTASection({
  title,
  description,
  buttonText = "Get Started"
}: CTASectionProps) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="section-padding" aria-label="Call to action">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="gradient-cta rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-eco/20 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-primary-foreground/80 mb-8">
                {description}
              </p>
            )}
            <Button asChild variant="hero" size="lg">
              <a href="https://wa.me/966578484894" target="_blank" rel="noopener noreferrer" className="group">
                {buttonText}
                <ArrowRight className={`w-5 h-5 transition-transform ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} aria-hidden="true" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
