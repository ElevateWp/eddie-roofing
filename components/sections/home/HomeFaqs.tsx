import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'What roofing work can I discuss?',
    answer: 'Ronan Short Roofing is a roofing contractor. Call to discuss your roof repair or roofing project.',
    relatedLink: { href: '/services/', label: 'Explore our services →' },
  },
  {
    question: 'Does Ronan Short Roofing serve my area?',
    answer: 'Call Ronan Short Roofing to discuss service availability.',
    relatedLink: { href: '/contact/', label: 'Contact our team →' },
  },
  {
    question: 'How do I discuss a roof repair?',
    answer: 'Call +61 404 707 084 to discuss what you have noticed and the roofing work required.',
    relatedLink: { href: '/roof-repairs/', label: 'Explore our services →' },
  },
  {
    question: 'How do I request a quote?',
    answer: `Call ${CLINIC_INFO.contact.phone} or send an enquiry using the quote form.`,
    relatedLink: { href: '/quote/', label: 'Request a quote →' },
  },
  {
    question: 'How can I check availability?',
    answer: `Call ${CLINIC_INFO.contact.phone} to discuss your property and check availability.`,
    relatedLink: { href: '/contact/', label: 'Contact our team →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Frequently asked questions
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Questions about your project
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                Find out about our services, quotes and availability.
            </p>
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Have a question?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Call or message our team and we will be happy to help.
              </p>
              <a
                href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Call our team
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
