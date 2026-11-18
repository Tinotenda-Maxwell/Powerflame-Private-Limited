import { privacyContent } from '@/content/privacy';
import { PageHero } from '@/components/sections/PageHero';
import { Prose } from '@/components/ui/Prose';
import { Section } from '@/components/ui/Section';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How Powerflame Energy (Private) Limited handles your information: what we collect when you contact us, how we use it, third-party services and your rights.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow={`Last updated ${privacyContent.lastUpdated}`}
        title="Privacy"
        highlight="policy"
        intro={privacyContent.intro}
        breadcrumbs={[{ label: 'Privacy policy', href: '/privacy-policy' }]}
      />
      <Section spacing="sm" container="narrow">
        <Prose>
          {privacyContent.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </section>
          ))}
        </Prose>
      </Section>
    </>
  );
}
