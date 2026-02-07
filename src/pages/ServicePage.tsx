import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import HeroHeader from '@/components/sections/HeroHeader';
import CTASection from '@/components/sections/CTASection';
import { 
  BarChart3, 
  Briefcase, 
  Leaf, 
  GraduationCap,
  LineChart,
  FileText,
  CheckCircle
} from 'lucide-react';

const servicesData: Record<string, any> = {
  'management-policy': {
    title: 'Management & Policy Consulting',
    subtitle: 'Strategic research and advisory for informed decision-making across public and private sectors.',
    icon: BarChart3,
    challenges: [
      'Navigating complex market dynamics in emerging economies',
      'Making data-driven decisions with limited market research',
      'Developing policies that balance growth with sustainability',
      'Understanding regulatory landscapes and compliance requirements',
    ],
    solutions: [
      { title: 'Market Research & Feasibility Studies', desc: 'Market entry analysis, competitor benchmarking, and demand forecasting' },
      { title: 'Econometric & Forecasting Models', desc: 'Quantitative analysis for strategic planning and risk assessment' },
      { title: 'Impact Evaluations', desc: 'Social, economic, and environmental impact assessments' },
      { title: 'Policy Research & Advisory', desc: 'Strategic recommendations and public policy guidance' },
    ],
    kpis: ['100+ Projects Delivered', 'GCC Market Expertise', 'Evidence-Based Insights'],
  },
  'business-strategy': {
    title: 'Business & Strategic Advisory',
    subtitle: 'Comprehensive business strategy and market entry support for Saudi Arabia and GCC markets.',
    icon: Briefcase,
    challenges: [
      'Entering new markets without local knowledge and networks',
      'Aligning corporate strategy with regional business culture',
      'Managing governance, risk, and compliance in evolving regulatory environments',
      'Understanding opportunities in smart city and infrastructure sectors',
    ],
    solutions: [
      { title: 'Corporate Strategy & Planning', desc: 'Business planning and strategic roadmap development' },
      { title: 'Market Entry Advisory', desc: 'Saudi and GCC market entry strategies and investment guidance' },
      { title: 'Governance, Risk & Compliance', desc: 'GRC frameworks and regulatory compliance support' },
      { title: 'Smart City Advisory', desc: 'Infrastructure and urban development consulting' },
    ],
    kpis: ['Saudi/GCC Focus', 'Strategic Partnerships', 'Market Success'],
  },
  'sustainability': {
    title: 'Sustainability & Environmental Consulting',
    subtitle: 'Environmental strategy aligned with Vision 2030 and global sustainability frameworks.',
    icon: Leaf,
    challenges: [
      'Meeting Vision 2030 sustainability targets and commitments',
      'Conducting thorough environmental and social assessments',
      'Aligning business operations with SDG frameworks',
      'Managing climate risks and resource efficiency',
    ],
    solutions: [
      { title: 'Environmental Impact Assessments', desc: 'Comprehensive EIA and SIA for projects and developments' },
      { title: 'Vision 2030 Alignment', desc: 'Strategy development aligned with Saudi Arabia\'s Vision 2030' },
      { title: 'SDG Integration', desc: 'Sustainable Development Goals mapping and reporting' },
      { title: 'Climate & Resource Studies', desc: 'Climate risk assessment and resource management' },
    ],
    kpis: ['Vision 2030 Aligned', 'SDG Expertise', 'Environmental Excellence'],
  },
  'education': {
    title: 'Academic & Higher Education Advisory',
    subtitle: 'Strategic consulting for universities, schools, and educational institutions.',
    icon: GraduationCap,
    challenges: [
      'Developing curricula that meet international standards',
      'Building strategic partnerships with global institutions',
      'Improving program quality and student outcomes',
      'Navigating accreditation and quality assurance requirements',
    ],
    solutions: [
      { title: 'University Strategy', desc: 'Institutional strategy and curriculum advisory' },
      { title: 'Teacher Development', desc: 'School teacher consulting and evaluation programs' },
      { title: 'Research Consulting', desc: 'Research and curriculum development support' },
      { title: 'Quality Assurance', desc: 'Program evaluation and accreditation guidance' },
    ],
    kpis: ['Academic Excellence', 'Global Partnerships', 'Quality Assurance'],
  },
  'data-analytics': {
    title: 'Data & Analytics Solutions',
    subtitle: 'Data-driven insights and analytics for evidence-based decision making.',
    icon: LineChart,
    challenges: [
      'Converting raw data into actionable business insights',
      'Building effective data collection and survey methodologies',
      'Developing forecasting models for strategic planning',
      'Creating visual dashboards for stakeholder communication',
    ],
    solutions: [
      { title: 'Survey Design', desc: 'Survey methodology and data collection strategies' },
      { title: 'Statistical Analysis', desc: 'Advanced statistical and econometric analysis' },
      { title: 'Dashboard Development', desc: 'Interactive visualization and reporting tools' },
      { title: 'Forecasting Models', desc: 'Time-series modeling and predictive analytics' },
    ],
    kpis: ['Data-Driven Insights', 'Advanced Analytics', 'Visual Reporting'],
  },
  'writing': {
    title: 'Professional Writing & Documentation',
    subtitle: 'Expert writing services for business, academic, and policy documents.',
    icon: FileText,
    challenges: [
      'Crafting compelling business proposals and investor presentations',
      'Developing successful grant and funding applications',
      'Producing high-quality academic and technical documentation',
      'Creating impactful policy briefs and strategic communications',
    ],
    solutions: [
      { title: 'Business Proposals', desc: 'Investor documents and corporate presentations' },
      { title: 'Grant Writing', desc: 'Funding proposals and application support' },
      { title: 'Academic Writing', desc: 'Technical papers and research publications' },
      { title: 'Policy Documentation', desc: 'Policy briefs, concept notes, and RFPs' },
    ],
    kpis: ['Expert Writing', 'Professional Quality', 'Impactful Documents'],
  },
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = servicesData[slug || 'management-policy'];

  if (!service) {
    return <div className="pt-32 text-center">Service not found</div>;
  }

  return (
    <>
      <HeroHeader title={service.title} subtitle={service.subtitle} />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">Client Challenges</h2>
              <ul className="space-y-4">
                {service.challenges.map((challenge: string, i: number) => (
                  <li key={i} className="flex gap-3"><span className="text-accent font-bold text-lg">•</span><span className="text-muted-foreground">{challenge}</span></li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">Our Solutions</h2>
              <div className="grid gap-4">
                {service.solutions.map((sol: any, i: number) => (
                  <div key={i} className="p-4 bg-card rounded-xl border border-border/50">
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-eco shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-secondary mb-1">{sol.title}</h3>
                        <p className="text-sm text-muted-foreground">{sol.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="bg-muted rounded-2xl p-8 text-center">
            <h3 className="text-xl font-heading font-bold text-secondary mb-6">What We Deliver</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {service.kpis.map((kpi: string, i: number) => (
                <div key={i} className="text-primary font-heading font-bold text-xl">{kpi}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title={`Ready to Get Started with ${service.title}?`} description="Contact us to discuss how we can support your project or advisory needs." buttonText="Request Consultation" />
    </>
  );
}
