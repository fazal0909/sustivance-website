import { motion } from 'framer-motion';
import HeroHeader from '@/components/sections/HeroHeader';
import SectionHeader from '@/components/sections/SectionHeader';
import CTASection from '@/components/sections/CTASection';
import SEO from '@/components/SEO';
import {
  Target,
  Eye,
  Users,
  CheckCircle
} from 'lucide-react';

const approachPoints = [
  'Collaborative engagement with clients at every stage',
  'Evidence-based methodology and rigorous analysis',
  'Tailored solutions to unique organizational needs',
  'Focus on delivering practical, measurable impact',
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Sustivance Consulting - a boutique advisory firm in Saudi Arabia providing research, strategy, and consulting services to businesses, governments, and institutions."
        canonical="/about"
      />
      <HeroHeader
        title="About Sustivance"
        subtitle="A boutique advisory firm based in Saudi Arabia, providing research, strategy, and professional consulting services to businesses, governments, and academic institutions."
      />

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                Expert Advisory for the Kingdom and Beyond
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sustivance Consulting is a boutique advisory firm based in Saudi Arabia,
                providing research, strategy, and professional consulting services to
                businesses, governments, and academic institutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team brings extensive experience in policy analysis, business strategy,
                sustainability, and data-driven decision-making. We are committed to delivering
                practical solutions that create measurable impact for our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-eco/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Approach */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To support organizations in achieving informed, sustainable, and strategic outcomes
                that drive lasting value for stakeholders and society.
              </p>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                Our Approach
              </h3>
              <ul className="space-y-3">
                {approachPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-eco shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Impact"
            title="What We Deliver"
            description="We help organizations across the Kingdom and GCC region achieve their strategic objectives."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Strategic Clarity',
                description: 'Clear direction and actionable roadmaps for organizational success.',
              },
              {
                icon: Users,
                title: 'Expert Partnership',
                description: 'Dedicated consultants who work alongside your teams.',
              },
              {
                icon: Eye,
                title: 'Market Intelligence',
                description: 'Deep insights into Saudi and GCC markets and trends.',
              },
              {
                icon: CheckCircle,
                title: 'Measurable Results',
                description: 'Practical solutions that deliver tangible outcomes.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-card rounded-2xl shadow-card border border-border/50"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Work with Sustivance"
        description="Ready to partner with a trusted advisory firm for your strategic initiatives?"
        buttonText="Get in Touch"
      />
    </>
  );
}
