import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export default function TestimonialCard({ quote, author, role, company, image }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative"
    >
      <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
      <p className="text-lg text-foreground leading-relaxed mb-6 italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-semibold text-primary">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-heading font-semibold text-secondary">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
