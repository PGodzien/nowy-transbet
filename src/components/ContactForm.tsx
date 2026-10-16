'use client';

import { type FormEvent, useRef, useState } from 'react';
import Reveal from '@/components/Reveal';
import { ATTACHMENTS, contactDepartments as departments } from '@/data/contact';

/*
 * Same fields as the contact form on transbet.com.pl, plus attachments.
 * Sent by /api/kontakt to the chosen department; until a mailbox is configured there,
 * the form falls back to opening the visitor's mail client (without the files).
 */

type Status = 'idle' | 'sending' | 'sent' | 'fallback' | 'error';

const formatSize = (bytes: number) => (bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1).replace('.', ',')} MB`);

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
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [notice, setNotice] = useState('');
  const fileInput = useRef<HTMLInputElement>(null);

  const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
  const tooMuch = files.length > ATTACHMENTS.maxFiles || totalBytes > ATTACHMENTS.maxTotalBytes;

  function addFiles(list: FileList | null) {
    if (!list) return;
    setFiles((current) => [...current, ...Array.from(list)].filter((file, index, all) => all.findIndex((other) => other.name === file.name && other.size === file.size) === index));
    if (fileInput.current) fileInput.current.value = '';
  }

  function openMailClient(data: FormData) {
    const target = departments[department];
    const body = [
      `Dział: ${target.label}`,
      `Imię i nazwisko: ${data.get('name')}`,
      `E-mail: ${data.get('email')}`,
      `Telefon: ${data.get('phone') || '—'}`,
      '',
      String(data.get('message')),
    ].join('\n');
    window.location.href = `mailto:${target.email}?subject=${encodeURIComponent(`Zapytanie ze strony: ${target.label}`)}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (tooMuch || status === 'sending') return;
    const formElement = event.currentTarget;
    const data = new FormData(formElement);
    data.set('department', departments[department].value);
    data.delete('files');
    files.forEach((file) => data.append('files', file));

    setStatus('sending');
    try {
      const response = await fetch('/api/kontakt', { method: 'POST', body: data });
      const result = await response.json().catch(() => ({}));
      if (response.ok) {
        setStatus('sent');
        setNotice('Dziękujemy, wiadomość została wysłana.');
        formElement.reset();
        setFiles([]);
      } else if (result.fallback) {
        setStatus('fallback');
        setNotice(files.length ? 'Otwieramy pocztę – dołącz pliki do wiadomości ręcznie.' : 'Otwieramy pocztę…');
        openMailClient(data);
      } else {
        setStatus('error');
        setNotice(result.message || 'Nie udało się wysłać wiadomości.');
      }
    } catch {
      setStatus('error');
      setNotice('Nie udało się wysłać wiadomości. Sprawdź połączenie i spróbuj ponownie.');
    }
  }

  return (
    <section id="formularz" className="relative border-t border-black/[0.08] bg-white">
      <div className="grid grid-cols-[4%_repeat(3,minmax(0,1fr))_4%] lg:min-h-[100svh]">
        <div className="flex items-center justify-center">
          <Reveal direction="left">
            <span className="font-mono text-[9px] tracking-[0.2em] text-black/35 [writing-mode:vertical-rl]">
              10 / FORMULARZ
            </span>
          </Reveal>
        </div>

        <div className="col-span-3 grid min-w-0 border-x border-black/10 lg:grid-cols-3">
          <div className="flex min-w-0 flex-col lg:col-span-2 lg:border-r lg:border-black/10">
            <div className="border-b border-black/10 px-6 pt-10 pb-8 sm:px-9 md:px-12 lg:pt-10 lg:pb-6 lg:[@media(max-height:820px)]:pt-6 lg:[@media(max-height:820px)]:pb-4">
              <Reveal>
                <h2 className="text-[clamp(2.2rem,3.6vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.042em] text-black lg:[@media(max-height:820px)]:text-[clamp(2rem,2.8vw,3rem)]">
                  Formularz kontaktowy<span className="text-brand">.</span>
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-black/60 lg:[@media(max-height:820px)]:mt-2 lg:[@media(max-height:820px)]:text-sm">
                  Wybierz dział, którego dotyczy Twoja sprawa, a wiadomość trafi bezpośrednio do odpowiedniej osoby.
                </p>
              </Reveal>
            </div>

            <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col gap-5 px-6 py-8 sm:px-9 md:px-12 lg:py-6 lg:[@media(max-height:820px)]:gap-3.5 lg:[@media(max-height:820px)]:py-4">
              <fieldset>
                <legend className={fieldLabel}>Rodzaj kontaktu</legend>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {departments.map((item, index) => {
                    const active = index === department;
                    return (
                      <label
                        key={item.label}
                        className={[
                          'cursor-pointer border px-3 py-1.5 text-[13px] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand',
                          active ? 'border-black bg-black text-white' : 'border-black/15 text-black hover:border-black/40',
                        ].join(' ')}
                      >
                        <input
                          type="radio"
                          name="department-choice"
                          value={item.value}
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

              <label className="flex min-h-0 flex-1 flex-col">
                <span className={fieldLabel}>Wiadomość *</span>
                <textarea name="message" required rows={2} className={`${fieldInput} min-h-20 flex-1 resize-none lg:[@media(max-height:820px)]:min-h-14`} />
              </label>

              <div>
                <span className={fieldLabel}>Załączniki</span>
                <label
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => {
                    event.preventDefault();
                    addFiles(event.dataTransfer.files);
                  }}
                  className="mt-1.5 flex cursor-pointer flex-wrap items-center justify-between gap-x-6 gap-y-2 border border-dashed border-black/25 px-4 py-3 transition-colors hover:border-black has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand"
                >
                  <span className="flex items-center gap-3 text-sm font-medium">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
                      <path d="M12 16V4M7 9l5-5 5 5M5 20h14" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    Dodaj pliki lub upuść je tutaj
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.08em] text-black/45 uppercase">
                    PDF, JPG, PNG, DOC, XLS, DWG, ZIP · do {ATTACHMENTS.maxFiles} plików, łącznie 4 MB
                  </span>
                  <input ref={fileInput} type="file" multiple accept={ATTACHMENTS.accept} onChange={(event) => addFiles(event.target.files)} className="sr-only" />
                </label>
                {files.length ? (
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {files.map((file) => (
                      <li key={`${file.name}-${file.size}`} className="flex max-w-full items-center gap-2 border border-black/15 bg-[#f6f6f6] py-1 pr-1 pl-3 text-[13px]">
                        <span className="min-w-0 truncate">{file.name}</span>
                        <span className="shrink-0 font-mono text-[10px] text-black/45">{formatSize(file.size)}</span>
                        <button
                          type="button"
                          onClick={() => setFiles((current) => current.filter((other) => other !== file))}
                          aria-label={`Usuń ${file.name}`}
                          className="grid h-6 w-6 shrink-0 cursor-pointer place-items-center text-black/50 transition-colors hover:bg-black hover:text-white"
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {tooMuch ? (
                  <p className="mt-2 text-sm text-[#c2410c]">Możesz dołączyć do {ATTACHMENTS.maxFiles} plików o łącznym rozmiarze do 4 MB.</p>
                ) : null}
              </div>

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
                  disabled={status === 'sending' || tooMuch}
                  aria-busy={status === 'sending'}
                  className="group flex shrink-0 cursor-pointer items-center justify-between gap-8 bg-brand px-6 py-3.5 text-base font-semibold text-black transition-colors hover:bg-brand-hover disabled:cursor-default disabled:opacity-60"
                >
                  {status === 'sending' ? 'Wysyłanie…' : 'Wyślij wiadomość'}
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </button>
              </div>
              {notice ? (
                <p role="status" className={`border-l-2 pl-3 text-sm ${status === 'error' ? 'border-[#c2410c] text-[#c2410c]' : 'border-brand text-black/75'}`}>
                  {notice}
                </p>
              ) : null}
            </form>
          </div>

          <aside className="flex flex-col gap-8 border-t border-black/10 px-6 py-10 sm:px-9 lg:border-t-0 lg:pt-14">
            <div>
              <h3 className="text-sm font-medium text-black/50">Kontakt</h3>
              <a href="mailto:biuro@transbet.com.pl" className="mt-2 block text-xl font-medium tracking-[-0.02em] break-all transition-colors hover:text-brand">
                biuro@transbet.com.pl
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
