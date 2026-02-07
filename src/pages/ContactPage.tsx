import { motion } from 'framer-motion';
import HeroHeader from '@/components/sections/HeroHeader';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    content: 'Riyadh, Saudi Arabia',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@sustivance.com',
    href: 'mailto:info@sustivance.com',
  },
  {
    icon: Phone,
    title: 'Phone / WhatsApp',
    content: '+966 578484894',
    href: 'https://wa.me/966578484894',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Sun - Thu: 9:00 AM - 6:00 PM (AST)',
  },
];

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Sustivance Consulting in Riyadh, Saudi Arabia. Contact us for consulting inquiries, project discussions, or partnership opportunities."
        canonical="/contact"
      />
      <HeroHeader
        title="Get in Touch"
        subtitle="We welcome inquiries from individuals, businesses, institutions, and government agencies."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-heading font-bold text-secondary mb-2">
                Start a Conversation
              </h2>
              <p className="text-muted-foreground mb-8">
                Reach out today to discuss your project or advisory needs. We typically respond within 24 hours.
              </p>

              <div className="bg-card p-8 rounded-2xl border border-border/50 text-center">
                <div className="w-20 h-20 rounded-full bg-eco/10 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-eco" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary mb-2">
                  Chat with Us on WhatsApp
                </h3>
                <p className="text-muted-foreground mb-6">
                  The fastest way to get in touch with our team for consultations, questions, or project discussions.
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a
                    href="https://wa.me/966578484894"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    Start WhatsApp Chat
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Prefer email?</strong> Send us a message at{' '}
                  <a href="mailto:info@sustivance.com" className="text-primary hover:underline">
                    info@sustivance.com
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-secondary">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('https') ? '_blank' : undefined}
                          rel={info.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>


            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
