import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  index?: number;
}

export default function StatCard({ value, label, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
        {value}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
}
