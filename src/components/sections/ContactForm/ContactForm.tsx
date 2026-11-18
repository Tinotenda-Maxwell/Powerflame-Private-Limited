'use client';

import { useId, useState, type FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';
import { site, whatsappHref } from '@/config/site';
import { services } from '@/content/services';
import styles from './ContactForm.module.css';

interface FormState {
  name: string;
  phone: string;
  area: string;
  topic: string;
  message: string;
}

const initialState: FormState = { name: '', phone: '', area: '', topic: '', message: '' };

const topics = [
  ...services.map((s) => s.title),
  'Safety question',
  'Business supply',
  'Something else',
];

/**
 * Contact form with no backend: it builds a WhatsApp message from the fields
 * and opens WhatsApp with the message pre-filled. Nothing is stored or sent
 * until the visitor presses send inside WhatsApp.
 */
export function ContactForm() {
  const id = useId();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [opened, setOpened] = useState(false);

  const update = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.message.trim()) next.message = 'Please tell us how we can help.';
    if (form.phone.trim() && !/^[+\d\s()-]{7,}$/.test(form.phone.trim())) {
      next.phone = 'Please enter a valid phone number, or leave it blank.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      const firstError = event.currentTarget.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstError?.focus();
      return;
    }
    const details = [
      form.topic && `Enquiry: ${form.topic}`,
      form.area.trim() && `Area: ${form.area.trim()}`,
      form.phone.trim() && `Phone: ${form.phone.trim()}`,
    ].filter((line): line is string => Boolean(line));
    const lines = [
      `Hello ${site.name}, my name is ${form.name.trim()}.`,
      ...details,
      '',
      form.message.trim(),
    ];
    window.open(whatsappHref(lines.join('\n')), '_blank', 'noopener,noreferrer');
    setOpened(true);
  };

  const fieldProps = (field: keyof FormState) => ({
    id: `${id}-${field}`,
    name: field,
    value: form[field],
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `${id}-${field}-error` : undefined,
  });

  const error = (field: keyof FormState) =>
    errors[field] ? (
      <p id={`${id}-${field}-error`} className={styles.error}>
        {errors[field]}
      </p>
    ) : null;

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate aria-describedby={`${id}-note`}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={`${id}-name`} className={styles.label}>
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps('name')}
            type="text"
            autoComplete="name"
            required
            className={styles.input}
            onChange={(e) => update('name')(e.target.value)}
          />
          {error('name')}
        </div>
        <div className={styles.field}>
          <label htmlFor={`${id}-phone`} className={styles.label}>
            Phone number <span className={styles.optional}>(optional)</span>
          </label>
          <input
            {...fieldProps('phone')}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={styles.input}
            onChange={(e) => update('phone')(e.target.value)}
          />
          {error('phone')}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={`${id}-area`} className={styles.label}>
            Suburb or area <span className={styles.optional}>(optional)</span>
          </label>
          <input
            {...fieldProps('area')}
            type="text"
            autoComplete="address-level2"
            placeholder="e.g. Hatfield"
            className={styles.input}
            onChange={(e) => update('area')(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor={`${id}-topic`} className={styles.label}>
            What is it about?
          </label>
          <select
            {...fieldProps('topic')}
            className={styles.input}
            onChange={(e) => update('topic')(e.target.value)}
          >
            <option value="">Choose a topic</option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor={`${id}-message`} className={styles.label}>
          Your message <span aria-hidden="true">*</span>
        </label>
        <textarea
          {...fieldProps('message')}
          rows={5}
          required
          className={styles.input}
          onChange={(e) => update('message')(e.target.value)}
        />
        {error('message')}
      </div>

      <button type="submit" className={styles.submit}>
        <MessageCircle size={18} aria-hidden="true" />
        Send via WhatsApp
      </button>
      <p id={`${id}-note`} className={styles.note}>
        This opens WhatsApp with your message ready to send. We do not store anything you type here.
      </p>
      <p className={styles.status} role="status" aria-live="polite">
        {opened && 'WhatsApp should now be open in a new tab. Press send there to reach us.'}
      </p>
    </form>
  );
}
