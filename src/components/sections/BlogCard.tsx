import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  href: string;
  index?: number;
}

export default function BlogCard({ title, excerpt, image, category, readTime, href, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        to={href}
        className="group block h-full bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
        aria-label={`Read article: ${title}`}
      >
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={image}
            alt={`Featured image for article about ${title}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width="400"
            height="225"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              {category}
            </span>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>{readTime}</span>
            </div>
          </div>
          <h3 className="text-xl font-heading font-semibold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {excerpt}
          </p>
          <span className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
            Read more
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
