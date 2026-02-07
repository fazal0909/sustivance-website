import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  variant?: 'primary' | 'gradient';
}

export default function HeroHeader({ title, subtitle, children, variant = 'gradient' }: HeroHeaderProps) {
  return (
    <section className={`relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden ${
      variant === 'gradient' ? 'gradient-hero' : 'bg-primary'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-eco rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
