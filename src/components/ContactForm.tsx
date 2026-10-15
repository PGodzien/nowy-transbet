'use client';

import { type FormEvent, useState } from 'react';
import Reveal from '@/components/Reveal';

/*
 * Same fields as the contact form on transbet.com.pl.
 * There is no mail backend in this project yet, so sending opens the visitor's
 * mail client with the message addressed to the chosen department.
 */
const departments = [
  { label: 'Betoniarnia', email: 'biuro@transbet.com.pl' },
  { label: 'Prefabrykaty betonowe', email: 'prefabrykaty@transbet.com.pl' },
  { label: 'Prefabrykaty zbrojeniowe', email: 'zbrojarnia@transbet.com.pl' },
  { label: 'Zbrojenie budowlane', email: 'zbrojarnia@transbet.com.pl' },
  { label: 'Kruszywa budowlane', email: 'biuro@transbet.com.pl' },
  { label: 'Sprzęt i wynajem', email: 'biuro@transbet.com.pl' },
  { label: 'Laboratorium', email: 'biuro@transbet.com.pl' },
  { label: 'Księgowość', email: 'biuro@transbet.com.pl' },
  { label: 'Rekrutacja', email: 'biuro@transbet.com.pl' },
  { label: 'Inne', email: 'biuro@transbet.com.pl' },
] as const;

const companyDetails = [
  { label: 'Adres', lines: ['Topolowa 5', '37-700 Przemyśl'] },
  { label: 'Dane firmy', lines: ['TRANSBET BETONIARNIE', 'GROCHOWICZ Sp. K.'] },
  { label: 'NIP / KRS', lines: ['NIP: 795-10-07-169', 'KRS: 0000573370'] },
] as const;

const fieldLabel = 'text-sm font-medium text-black/70';
const fieldInput =
  'mt-1.5 block w-full border border-black/15 bg-white px-3.5 py-2.5 text-base text-black outline-none transition-colors hover:border-black/30 focus:border-black';

export default function ContactForm() {
  const [department, setDepartment] = useState(0);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Honeypot: real visitors never see or fill this field.
    if (data.get('website')) return;

    const target = departments[department];
    const body = [
      `Dział: ${target.label}`,
      `Imię i nazwisko: ${data.get('name')}`,
      `E-mail: ${data.get('email')}`,
      `Telefon: ${data.get('phone') || '—'}`,
      '',
      String(data.get('message')),
    ].join('\n');

    window.location.href = `mailto:${target.email}?subject=${encodeURIComponent(
      `Zapytanie ze strony: ${target.label}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="formularz" className="relative border-t border-black/[0.08] bg-white">
      <div className="grid grid-cols-[4%_repeat(3,minmax(0,1fr))_4%] lg:h-[100svh] lg:min-h-[44rem]">
        <div className="flex items-center justify-center">
          <Reveal direction="left">
            <span className="font-mono text-[9px] tracking-[0.2em] text-black/35 [writing-mode:vertical-rl]">
              10 / FORMULARZ
            </span>
          </Reveal>
        </div>

        <div className="col-span-3 grid min-w-0 border-x border-black/10 lg:grid-cols-3">
          <div className="flex min-w-0 flex-col lg:col-span-2 lg:border-r lg:border-black/10">
            <div className="border-b border-black/10 px-6 pt-10 pb-8 sm:px-9 md:px-12 lg:pt-14">
              <Reveal>
                <h2 className="text-[clamp(2.2rem,3.6vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.042em] text-black">
                  Formularz kontaktowy<span className="text-brand">.</span>
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-black/60">
                  Wybierz dział, którego dotyczy Twoja sprawa, a wiadomość trafi bezpośrednio do odpowiedniej osoby.
                </p>
              </Reveal>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-6 px-6 py-8 sm:px-9 md:px-12">
              <fieldset>
                <legend className={fieldLabel}>Rodzaj kontaktu</legend>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {departments.map((item, index) => {
                    const active = index === department;
                    return (
                      <label
                        key={item.label}
                        className={[
                          'cursor-pointer border px-3.5 py-2 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand',
                          active ? 'border-black bg-black text-white' : 'border-black/15 text-black hover:border-black/40',
                        ].join(' ')}
                      >
                        <input
                          type="radio"
                          name="department"
                          value={item.label}
                          checked={active}
                          onChange={() => setDepartment(index)}
                          className="sr-only"
                        />
                        {item.label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid gap-4 md:grid-cols-3">
                <label className="block">
                  <span className={fieldLabel}>Imię i nazwisko *</span>
                  <input name="name" type="text" required autoComplete="name" className={fieldInput} />
                </label>
                <label className="block">
                  <span className={fieldLabel}>E-mail *</span>
                  <input name="email" type="email" required autoComplete="email" className={fieldInput} />
                </label>
                <label className="block">
                  <span className={fieldLabel}>Telefon</span>
                  <input name="phone" type="tel" autoComplete="tel" className={fieldInput} />
                </label>
              </div>

              <label className="flex flex-1 flex-col">
                <span className={fieldLabel}>Wiadomość *</span>
                <textarea name="message" required rows={4} className={`${fieldInput} min-h-28 flex-1 resize-none`} />
              </label>

              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label>
                  Strona www
                  <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <label className="flex max-w-xl cursor-pointer items-start gap-3">
                  <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-black" />
                  <span className="text-xs leading-relaxed text-black/60">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych przez TRANSBET BETONIARNIE GROCHOWICZ Sp. K. w celu udzielenia odpowiedzi na przesłane zapytanie. *
                  </span>
                </label>
                <button
                  type="submit"
                  className="group flex shrink-0 cursor-pointer items-center justify-between gap-8 bg-brand px-6 py-3.5 text-base font-semibold text-black transition-colors hover:bg-brand-hover"
                >
                  {sent ? 'Otwieramy pocztę…' : 'Wyślij wiadomość'}
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <aside className="flex flex-col gap-8 border-t border-black/10 px-6 py-10 sm:px-9 lg:border-t-0 lg:pt-14">
            <div>
              <h3 className="text-sm font-medium text-black/50">Kontakt</h3>
              <a
                href={`mailto:${departments[department].email}`}
                className="mt-2 block text-xl font-medium tracking-[-0.02em] break-all transition-colors hover:text-brand"
              >
                {departments[department].email}
              </a>
              <a href="tel:+48888839617" className="mt-1 block text-xl font-medium tracking-[-0.02em] transition-colors hover:text-brand">
                +48 888 839 617
              </a>
            </div>

            {companyDetails.map((item) => (
              <div key={item.label}>
                <h3 className="text-sm font-medium text-black/50">{item.label}</h3>
                <p className="mt-2 text-base leading-relaxed text-black/80">
                  {item.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </aside>
        </div>

        <div />
      </div>
    </section>
  );
}
