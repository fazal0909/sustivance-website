import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/sections/SectionHeader';
import ServiceCard from '@/components/sections/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import SEO from '@/components/SEO';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Leaf,
  GraduationCap,
  LineChart,
  FileText,
  Building2,
  Plane,
  Landmark,
  Zap,
  Wheat,
  BookOpen,
  Laptop,
  HeartPulse,
  Home,
  Truck,
  CheckCircle,
  Target,
  Shield
} from 'lucide-react';

const services = [
  {
    title: 'Management & Policy Consulting',
    description: 'Market research, feasibility studies, econometric models, and policy advisory for informed decisions.',
    icon: BarChart3,
    href: '/services/management-policy',
  },
  {
    title: 'Business & Strategic Advisory',
    description: 'Corporate strategy, market entry, governance, and smart city advisory for Saudi/GCC markets.',
    icon: Briefcase,
    href: '/services/business-strategy',
  },
  {
    title: 'Sustainability & Environmental',
    description: 'Environmental assessments, Vision 2030 alignment, SDG strategies, and climate studies.',
    icon: Leaf,
    href: '/services/sustainability',
  },
  {
    title: 'Academic & Higher Education',
    description: 'University strategy, curriculum development, research consulting, and program evaluation.',
    icon: GraduationCap,
    href: '/services/education',
  },
  {
    title: 'Data & Analytics Solutions',
    description: 'Survey design, statistical analysis, dashboard development, and forecasting models.',
    icon: LineChart,
    href: '/services/data-analytics',
  },
  {
    title: 'Professional Writing',
    description: 'Business proposals, grant writing, academic papers, policy briefs, and corporate documentation.',
    icon: FileText,
    href: '/services/writing',
  },
];


const whyChooseUs = [
  {
    title: 'Saudi & GCC Market Expertise',
    description: 'Deep understanding of local regulations, business culture, and Vision 2030 priorities.',
    icon: Landmark,
  },
  {
    title: 'Evidence-Based Approach',
    description: 'Data-driven insights and rigorous analysis for confident decision-making.',
    icon: LineChart,
  },
  {
    title: 'Tailored Solutions',
    description: 'Custom strategies designed for your specific industry and organizational needs.',
    icon: Target,
  },
  {
    title: 'Proven Track Record',
    description: 'Trusted by businesses, governments, and institutions across the region.',
    icon: Shield,
  },
];

const focusAreas = [
  { name: 'Sustainability', icon: Leaf, category: 'environment' },
  { name: 'Smart Cities', icon: Building2, category: 'infrastructure' },
  { name: 'Tourism & Heritage', icon: Plane, category: 'societal' },
  { name: 'Public Policy', icon: Landmark, category: 'economic' },
  { name: 'Energy & Environment', icon: Zap, category: 'environment' },
  { name: 'Agriculture & Food', icon: Wheat, category: 'environment' },
  { name: 'Education', icon: BookOpen, category: 'societal' },
  { name: 'Digital Economy', icon: Laptop, category: 'economic' },
  { name: 'Healthcare', icon: HeartPulse, category: 'societal' },
  { name: 'Real Estate', icon: Home, category: 'infrastructure' },
  { name: 'Transportation', icon: Truck, category: 'infrastructure' },
];


export default function HomePage() {
  return (
    <>
      <SEO canonical="/" />
      {/* Hero Section - Problem → Solution above the fold */}
      <section
        className="relative min-h-screen flex items-center gradient-hero overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-eco/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Trust badge */}
              <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6">
                ✓ Trusted by 50+ Organizations in Saudi Arabia
              </span>

              {/* H1 - Clear value proposition */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
                Strategic Consulting for{' '}
                <span className="text-accent">Saudi Arabia</span>
              </h1>

              {/* Clear benefit statement */}
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-4 max-w-xl">
                We help businesses, governments, and institutions make better decisions with
                <strong> expert research, strategy, and advisory services</strong> aligned with Vision 2030.
              </p>

              {/* Quick benefits list */}
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-primary-foreground/80 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>Market Entry Strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>Policy & Research</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>Sustainability</span>
                </li>
              </ul>

              {/* Primary CTA - Action-oriented */}
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="hero" size="xl">
                  <a href="https://wa.me/966578484894" target="_blank" rel="noopener noreferrer" className="group">
                    Get a Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="hero-outline" size="xl">
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-eco/30 rounded-3xl blur-2xl" aria-hidden="true" />
                <img
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop"
                  alt="Modern Riyadh cityscape representing Saudi Arabia's Vision 2030 transformation and business growth"
                  className="relative rounded-3xl shadow-2xl"
                  loading="eager"
                  width="800"
                  height="600"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>


      {/* Problem Statement */}
      <section className="section-padding" aria-labelledby="intro-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="intro-heading" className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
                Navigate Saudi Arabia's Dynamic Market with Confidence
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Whether you're entering the Saudi market, developing policy frameworks, or implementing
                sustainability initiatives, you need a partner who understands the local landscape.
                <strong className="text-foreground"> Sustivance Consulting</strong> delivers actionable insights
                and strategies that drive real results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Benefits */}
      <section className="section-padding bg-muted" aria-labelledby="why-choose-heading">
        <div className="container-custom">
          <SectionHeader
            label="Why Choose Sustivance"
            title="Your Strategic Partner in the Kingdom"
            description="We combine deep local expertise with rigorous methodology to deliver consulting that works."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-2xl shadow-card border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" aria-labelledby="services-heading">
        <div className="container-custom">
          <SectionHeader
            label="Our Services"
            title="Comprehensive Consulting Solutions"
            description="From market entry to sustainability strategy, we provide end-to-end advisory services."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/services" className="group">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="section-padding bg-muted" aria-labelledby="industries-heading">
        <div className="container-custom">
          <SectionHeader
            label="Industries We Serve"
            title="Sector Expertise Aligned with Vision 2030"
            description="Specialized consulting across Saudi Arabia's key economic sectors and strategic priorities."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/industries#${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group flex flex-col items-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all"
                  aria-label={`Learn about our ${area.name} consulting services`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <area.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-secondary text-center group-hover:text-primary transition-colors">
                    {area.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <CTASection
        title="Start Your Strategic Journey Today"
        description="Partner with Sustivance for expert research, strategy, and solutions tailored to Saudi Arabia."
        buttonText="Get Your Free Consultation"
      />
    </>
  );
}
