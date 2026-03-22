import { motion } from 'framer-motion';
import HeroHeader from '@/components/sections/HeroHeader';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.office.title'),
      content: t('contact.info.office.content'),
    },
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      content: 'info@sustivance.com',
      href: 'mailto:info@sustivance.com',
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      content: '+966 578484894',
      href: 'https://wa.me/966578484894',
    },
    {
      icon: Clock,
      title: t('contact.info.hours.title'),
      content: t('contact.info.hours.content'),
    },
  ];

  return (
    <>
      <SEO
        title={t('contact.meta.title')}
        description={t('contact.meta.description')}
        canonical="/contact"
      />
      <HeroHeader
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
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
                {t('contact.conversation.title')}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t('contact.conversation.description')}
              </p>

              <div className="bg-card p-8 rounded-2xl border border-border/50 text-center">
                <div className="w-20 h-20 rounded-full bg-eco/10 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-eco" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary mb-2">
                  {t('contact.conversation.whatsapp.title')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t('contact.conversation.whatsapp.description')}
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a
                    href="https://wa.me/966578484894"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    {t('contact.conversation.whatsapp.button')}
                    <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </a>
                </Button>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">{t('contact.conversation.email.text')}</strong>{' '}
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
                {t('contact.info.title')}
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
                          dir="ltr"
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
