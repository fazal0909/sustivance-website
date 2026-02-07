import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroHeader from '@/components/sections/HeroHeader';
import CTASection from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import {
  BarChart3,
  Briefcase,
  Leaf,
  GraduationCap,
  LineChart,
  FileText,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    id: 'management-policy',
    title: 'Management & Policy Consulting',
    icon: BarChart3,
    description: 'Strategic research and advisory for informed decision-making across public and private sectors.',
    offerings: [
      'Market research & feasibility studies (market entry, competitor benchmarking, demand forecasting)',
      'Econometric & forecasting models',
      'Social, economic & environmental impact evaluations',
      'Policy research & strategic recommendations',
      'Public policy advisory & governance support',
    ],
  },
  {
    id: 'business-strategy',
    title: 'Business & Strategic Advisory',
    icon: Briefcase,
    description: 'Comprehensive business strategy and market entry support for Saudi Arabia and GCC markets.',
    offerings: [
      'Corporate strategy & business planning',
      'Market entry & investment advisory (Saudi/GCC)',
      'Governance, risk & compliance (GRC)',
      'Smart city & infrastructure advisory',
    ],
  },
  {
    id: 'sustainability',
    title: 'Sustainability & Environmental Consulting',
    icon: Leaf,
    description: 'Environmental strategy aligned with Vision 2030 and global sustainability frameworks.',
    offerings: [
      'Environmental & social impact assessments (EIA/SIA)',
      'Vision 2030 & SDG alignment strategies',
      'Sustainability research & advisory',
      'Climate & resource management studies',
    ],
  },
  {
    id: 'education',
    title: 'Academic & Higher Education Advisory',
    icon: GraduationCap,
    description: 'Strategic consulting for universities, schools, and educational institutions.',
    offerings: [
      'University strategy & curriculum advisory',
      'School teacher consulting and evaluation programs',
      'Research & curriculum development consulting',
      'Student mentoring & scholarship guidance',
      'International university partnerships',
      'Program evaluation & quality assurance',
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics Solutions',
    icon: LineChart,
    description: 'Data-driven insights and analytics for evidence-based decision making.',
    offerings: [
      'Survey design & data collection',
      'Statistical & econometric analysis',
      'Dashboard development & visualization',
      'Forecasting & time-series modeling',
      'Operational data analysis and on-demand insights',
    ],
  },
  {
    id: 'writing',
    title: 'Professional Writing & Documentation',
    icon: FileText,
    description: 'Expert writing services for business, academic, and policy documents.',
    offerings: [
      'Business proposals & investor documents',
      'Grant & funding proposals',
      'Academic & technical writing',
      'Policy briefs & concept notes',
      'Corporate profiles & presentations',
      'RFPs and project writing',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore our comprehensive consulting services: strategy, policy, sustainability, education, data analytics, and professional writing for Saudi Arabia and GCC."
        canonical="/services"
      />
      <HeroHeader
        title="Our Services"
        subtitle="Comprehensive consulting solutions across strategy, policy, sustainability, education, and data analytics for businesses, governments, and institutions."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-100px' }}
                className="scroll-mt-28"
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Button asChild variant="outline" className="group">
                      <Link to={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  <div className={`bg-card p-6 rounded-2xl border border-border/50 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="font-heading font-semibold text-secondary mb-4">
                      What We Offer
                    </h3>
                    <ul className="space-y-3">
                      {service.offerings.map((offering, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-eco shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="mt-16 border-b border-border/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Contact us to discuss how we can support your project or advisory needs."
        buttonText="Request Consultation"
      />
    </>
  );
}
