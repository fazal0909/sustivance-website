import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  sector: string;
  image: string;
  metrics: string[];
  href: string;
  index?: number;
}

export default function CaseStudyCard({ title, sector, image, metrics, href, index = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        to={href}
        className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
      >
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
            {sector}
          </span>
          <h3 className="text-xl font-heading font-semibold text-secondary mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {metrics.map((metric, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-eco/10 text-eco rounded-full font-medium"
              >
                {metric}
              </span>
            ))}
          </div>
          <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
            View case study
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
