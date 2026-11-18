import Link from 'next/link';
import { ArrowRight, CircleCheck, Phone } from 'lucide-react';
import { phoneHref, site } from '@/config/site';
import { faqs } from '@/content/faqs';
import { images } from '@/content/images';
import { emergencyNumbers, safetySections, smellGasSteps } from '@/content/safety';
import { Reveal } from '@/components/animation/Reveal';
import { CtaBand } from '@/components/sections/CtaBand';
import { FaqList } from '@/components/sections/FaqList';
import { PageHero } from '@/components/sections/PageHero';
import { Container } from '@/components/ui/Container';
import { IconBox } from '@/components/ui/IconBox';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Pill } from '@/components/ui/Pill';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/lib/seo';
import styles from './safety.module.css';

export const metadata = buildMetadata({
  title: 'LPG Gas Safety Guide for Homes & Businesses',
  description:
    'LPG safety Zimbabwe: how to store gas cylinders, check for leaks, look after hoses and regulators, and exactly what to do if you smell gas at home or work.',
  path: '/gas-safety',
});

export default function GasSafetyPage() {
  const safetyFaqs = faqs.filter((faq) => faq.category === 'Safety');

  return (
    <>
      <PageHero
        eyebrow="LPG safety Zimbabwe"
        title="The practical guide to"
        highlight="using gas safely"
        intro="LPG is a safe, clean fuel when it is stored, connected and used correctly. This guide explains, in plain language, how to keep your home or business safe, and exactly what to do if something goes wrong."
        breadcrumbs={[{ label: 'Gas safety', href: '/gas-safety' }]}
        aside={
          <ImageSlot image={images.safetyGuide} priority sizes="(min-width: 1024px) 45vw, 100vw" />
        }
      />

      {/* Emergency procedure */}
      <section id="smell-gas" className={styles.emergency} aria-labelledby="smell-gas-title">
        <Container size="wide">
          <div className={styles.emergencyPanel}>
            <div className={styles.emergencyHead}>
              <Pill tone="primary">Emergency procedure</Pill>
              <h2 id="smell-gas-title" className={styles.emergencyTitle}>
                What to do if you smell gas
              </h2>
              <p className={styles.emergencyIntro}>
                Act calmly and quickly. Follow these steps in order, and do not go back inside until
                the leak has been found and fixed.
              </p>
            </div>
            <ol className={styles.emergencySteps}>
              {smellGasSteps.map((step, index) => (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={index * 80}
                  className={styles.emergencyStep}
                >
                  <span className={styles.stepNumber} aria-hidden="true">
                    {index + 1}
                  </span>
                  <IconBox icon={step.icon} tone="glass" className={styles.stepIcon} />
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </Reveal>
              ))}
            </ol>
            <div className={styles.numbers}>
              <p className={styles.numbersLabel}>Emergency numbers (call from outside)</p>
              <ul className={styles.numberList} role="list">
                {emergencyNumbers.map((item) => (
                  <li key={item.number}>
                    <a href={`tel:${item.number}`} className={styles.numberLink}>
                      <span>{item.label}</span>
                      <strong>{item.number}</strong>
                    </a>
                  </li>
                ))}
                <li>
                  <a href={phoneHref} className={styles.numberLink}>
                    <span>{site.name}</span>
                    <strong>{site.contact.phone}</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Guide */}
      <Section labelledBy="guide-title">
        <div className={styles.guide}>
          <aside className={styles.toc} aria-labelledby="toc-title">
            <p id="toc-title" className={styles.tocTitle}>
              In this guide
            </p>
            <ol className={styles.tocList}>
              <li>
                <a href="#smell-gas">If you smell gas</a>
              </li>
              {safetySections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
              <li>
                <a href="#safety-faqs">Safety questions</a>
              </li>
            </ol>
          </aside>

          <div className={styles.content}>
            <h2 id="guide-title" className="sr-only">
              Gas safety guide
            </h2>
            {safetySections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className={styles.article}
                aria-labelledby={`${section.id}-title`}
              >
                <div className={styles.articleHead}>
                  <IconBox icon={section.icon} />
                  <h3 id={`${section.id}-title`} className={styles.articleTitle}>
                    {section.title}
                  </h3>
                </div>
                <p className={styles.articleIntro}>{section.intro}</p>
                <ul className={styles.points} role="list">
                  {section.points.map((point) => (
                    <li key={point.slice(0, 32)}>
                      <CircleCheck size={20} aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {section.id === 'leak-checks' && (
                  <Link
                    href="/articles/how-to-check-your-gas-cylinder-for-leaks"
                    className={styles.more}
                  >
                    Step-by-step: how to check your gas cylinder for leaks
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
                {section.id === 'hose-regulator' && (
                  <Link href="/services/gas-cylinders-and-accessories" className={styles.more}>
                    Replacement regulators, hoses and fittings
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
                {section.id === 'storage' && (
                  <Link href="/services/gas-installation-and-repairs" className={styles.more}>
                    Have a technician position your cylinder safely
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </article>
            ))}

            <div className={styles.helpCard}>
              <h3 className={styles.helpTitle}>Not sure your setup is safe?</h3>
              <p>
                Our trained technicians can inspect your cylinder, regulator, hose and appliance,
                test for leaks and fix any problems.
              </p>
              <div className={styles.helpActions}>
                <Link href="/services/gas-installation-and-repairs" className={styles.more}>
                  Gas installation and repairs
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a href={phoneHref} className={styles.more}>
                  <Phone size={16} aria-hidden="true" />
                  Call {site.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface" grid labelledBy="safety-faq-title" id="safety-faqs">
        <SectionHeader
          id="safety-faq-title"
          eyebrow="Safety FAQs"
          title="Common gas safety"
          highlight="questions"
          intro={
            <>
              Have a different question? See all our{' '}
              <Link href="/faq">frequently asked questions</Link>.
            </>
          }
        />
        <FaqList faqs={safetyFaqs} />
      </Section>

      <CtaBand
        title="Questions about gas safety?"
        text="Our team is always happy to give safety advice, whether or not you are a customer. Get in touch any time during business hours."
      />
    </>
  );
}
