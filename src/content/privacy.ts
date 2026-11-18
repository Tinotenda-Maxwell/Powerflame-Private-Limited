import { site } from '@/config/site';

/** PRIVACY POLICY. Review with your legal adviser before launch. */
export const privacyContent = {
  lastUpdated: '18 November 2026',
  intro: `This privacy policy explains how ${site.legalName} ("Powerflame Energy", "we", "us") handles information when you visit ${site.siteUrl.replace('https://', '')} or contact us. We respect your privacy and collect as little personal information as possible.`,
  sections: [
    {
      title: 'Who we are',
      paragraphs: [
        `${site.legalName} is a company registered in ${site.registration.country} (company number ${site.registration.companyNumber}). Our address is ${site.address.street}, ${site.address.suburb}, ${site.address.city}, ${site.address.country}.`,
      ],
    },
    {
      title: 'Information we collect',
      paragraphs: [
        'This website does not have user accounts, online ordering or a database, and it does not store the details you type into our contact form.',
        'When you use the contact form, your message is placed into WhatsApp on your own device. Nothing is sent to us until you choose to press send in WhatsApp. If you send it, we receive your name, phone number and the details you included, along with anything WhatsApp shares as part of a normal chat.',
        'If you call, email or message us directly, we receive the contact details and information you choose to share with us.',
      ],
    },
    {
      title: 'How we use your information',
      paragraphs: [
        'We use the information you send us only to respond to your enquiry, provide the products or services you ask about, and keep basic records needed to run our business and meet legal requirements.',
        'We do not sell, rent or trade your personal information, and we do not use it for unrelated marketing without your permission.',
      ],
    },
    {
      title: 'Cookies and third-party services',
      paragraphs: [
        'Our website does not set its own tracking or advertising cookies.',
        'Our contact page shows an embedded Google Map, and our contact form and WhatsApp button open WhatsApp. When you use these, Google and WhatsApp (Meta) may collect information according to their own privacy policies. Our website is served through a hosting provider that may keep standard technical logs, such as IP addresses and browser types, for security and performance.',
        'If we add website analytics in future, we will update this policy to explain what is collected and how to opt out.',
      ],
    },
    {
      title: 'How long we keep information',
      paragraphs: [
        'We keep enquiry messages and customer records only for as long as we need them to serve you, or as required by law (for example, tax and business records).',
      ],
    },
    {
      title: 'Your rights',
      paragraphs: [
        `You may ask us what personal information we hold about you, ask us to correct it, or ask us to delete it where we are not required to keep it. To make a request, email ${site.contact.email}. We handle personal information in line with the Cyber and Data Protection Act of Zimbabwe.`,
      ],
    },
    {
      title: 'Changes to this policy',
      paragraphs: [
        'We may update this policy from time to time. The latest version will always be on this page, with the date it was last updated.',
      ],
    },
    {
      title: 'Contact us',
      paragraphs: [
        `If you have any questions about this policy or your information, contact us at ${site.contact.email} or visit us at ${site.address.street}, ${site.address.suburb}, ${site.address.city}.`,
      ],
    },
  ],
};
