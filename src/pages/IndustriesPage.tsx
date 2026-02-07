import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import HeroHeader from '@/components/sections/HeroHeader';
import CTASection from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import {
  Leaf,
  Zap,
  Wheat,
  Building2,
  Home,
  Truck,
  Plane,
  BookOpen,
  HeartPulse,
  Laptop,
  Landmark,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const industryGroups = [
  {
    name: 'Sustainability & Environment',
    color: 'eco',
    industries: [
      {
        id: 'sustainability',
        name: 'Sustainability',
        icon: Leaf,
        description: 'Sustainable development strategies aligned with global frameworks and Vision 2030.',
      },
      {
        id: 'energy-environment',
        name: 'Energy & Environment',
        icon: Zap,
        description: 'Clean energy transitions and environmental management solutions.',
      },
      {
        id: 'agriculture-food',
        name: 'Agriculture & Food Security',
        icon: Wheat,
        description: 'Agricultural development and food security initiatives for the Kingdom.',
      },
    ],
  },
  {
    name: 'Urban & Infrastructure',
    color: 'primary',
    industries: [
      {
        id: 'smart-cities',
        name: 'Smart Cities & Urban Development',
        icon: Building2,
        description: 'Smart city planning and urban development consulting for mega-projects.',
      },
      {
        id: 'real-estate',
        name: 'Real Estate',
        icon: Home,
        description: 'Real estate market analysis, feasibility studies, and investment advisory.',
      },
      {
        id: 'transportation-logistics',
        name: 'Transportation & Logistics',
        icon: Truck,
        description: 'Transport infrastructure planning and logistics optimization.',
      },
    ],
  },
  {
    name: 'Societal & Human Development',
    color: 'accent',
    industries: [
      {
        id: 'tourism-culture',
        name: 'Tourism, Culture & Heritage',
        icon: Plane,
        description: 'Tourism strategy and cultural heritage preservation consulting.',
      },
      {
        id: 'education-human-capital',
        name: 'Education & Human Capital Development',
        icon: BookOpen,
        description: 'Educational institution strategy and workforce development.',
      },
      {
        id: 'healthcare',
        name: 'Healthcare Transformation',
        icon: HeartPulse,
        description: 'Healthcare system strategy and transformation advisory.',
      },
    ],
  },
  {
    name: 'Economic & Digital Transformation',
    color: 'secondary',
    industries: [
      {
        id: 'digital-economy',
        name: 'Digital Economy & FinTech',
        icon: Laptop,
        description: 'Digital transformation strategy and FinTech consulting.',
      },
      {
        id: 'public-policy',
        name: 'Public Policy & Governance',
        icon: Landmark,
        description: 'Policy analysis, governance advisory, and institutional reform.',
      },
    ],
  },
];

export default function IndustriesPage() {
  const [activeGroup, setActiveGroup] = useState(industryGroups[0].name);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const groups = industryGroups.map((group) => ({
        name: group.name,
        element: document.getElementById(group.name.toLowerCase().replace(/\s+/g, '-')),
      }));

      const scrollPosition = window.scrollY + 250;

      groups.forEach((group) => {
        if (group.element) {
          const sectionTop = group.element.offsetTop;
          const sectionBottom = sectionTop + group.element.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveGroup(group.name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToGroup = (name: string) => {
    const element = document.getElementById(name.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SEO
        title="Industries & Focus Areas"
        description="Specialized consulting across Saudi Arabia's key sectors: sustainability, smart cities, tourism, education, healthcare, and digital transformation aligned with Vision 2030."
        canonical="/industries"
      />
      <HeroHeader
        title="Areas of Focus"
        subtitle="Comprehensive consulting services across Saudi Arabia's strategic sectors aligned with Vision 2030 priorities."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex gap-12">
            {/* Sticky Navigation - Desktop */}
            <div className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28">
                <nav className="space-y-2">
                  {industryGroups.map((group) => (
                    <button
                      key={group.name}
                      onClick={() => scrollToGroup(group.name)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${activeGroup === group.name
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                    >
                      <span className="text-sm font-medium">{group.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Industry Groups */}
            <div className="flex-1 space-y-20">
              {industryGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.name}
                  id={group.name.toLowerCase().replace(/\s+/g, '-')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="scroll-mt-28"
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 pb-4 border-b border-border/50">
                    {group.name}
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                    {group.industries.map((industry, index) => (
                      <motion.div
                        key={industry.id}
                        id={industry.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all scroll-mt-28"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <industry.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-heading font-semibold text-secondary mb-2">
                              {industry.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {industry.description}
                            </p>
                          </div>
                        </div>

                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Industry Solution?"
        description="Our experts understand the unique challenges and opportunities in each sector."
        buttonText="Discuss Your Industry"
      />
    </>
  );
}
