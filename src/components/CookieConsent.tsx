'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  CONSENT_OPEN_EVENT,
  CONSENT_STORAGE_KEY,
  type ConsentKey,
  type ConsentState,
  deniedConsent,
  grantedConsent,
} from '@/lib/consent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Texts 1:1 from the previous site's privacy banner.
const texts = {
  title: 'Ustawienia prywatności',
  intro:
    'Używamy plików cookies i podobnych technologii, aby zapewnić najlepsze doświadczenie na naszej stronie. Cookies pomagają nam analizować ruch, personalizować treści i reklamy oraz zapewnić funkcje mediów społecznościowych.',
  manage: 'Zarządzaj preferencjami',
  policy: 'Polityka prywatności',
  rejectAll: 'Odrzuć wszystkie',
  saveChosen: 'Zapisz wybrane',
  acceptAll: 'Akceptuj wszystkie',
  alwaysOn: 'Zawsze włączone',
  close: 'Zamknij',
};

const categories: { key: ConsentKey; title: string; text: string; locked?: boolean }[] = [
  { key: 'analytics_storage', title: 'Analityczne', text: 'Pomagają nam zrozumieć, jak korzystasz z witryny (Google Analytics).' },
  { key: 'ad_storage', title: 'Reklamowe', text: 'Służą do wyświetlania spersonalizowanych reklam (Google Ads, remarketing).' },
  { key: 'ad_user_data', title: 'Dane użytkownika reklam', text: 'Zgoda na wysyłanie danych użytkownika do Google w celach reklamowych.' },
  { key: 'ad_personalization', title: 'Personalizacja reklam', text: 'Zgoda na personalizację reklam na podstawie Twoich zainteresowań.' },
  { key: 'personalization_storage', title: 'Personalizacja treści', text: 'Pozwalają na dostosowanie treści strony do Twoich preferencji.' },
  { key: 'functionality_storage', title: 'Funkcjonalne', text: 'Niezbędne do prawidłowego działania strony (zawsze włączone).', locked: true },
];

function readSaved(): ConsentState | null {
  try {
    const saved = JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) || 'null');
    return saved && typeof saved === 'object' ? { ...deniedConsent, ...saved } : null;
  } catch {
    return null;
  }
}

const POLICY_HREF = '/polityka-prywatnosci';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(deniedConsent);
  // Drives the slide-in: false for the first frame after opening.
  const [shown, setShown] = useState(false);
  // The window can be closed without choosing only once a choice has been saved.
  const [hasSaved, setHasSaved] = useState(false);

  useEffect(() => {
    const saved = readSaved();
    if (saved) {
      setConsent(saved);
      setHasSaved(true);
    } else setOpen(true);

    const reopen = () => {
      setConsent(readSaved() ?? deniedConsent);
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  const save = (state: ConsentState) => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
      localStorage.setItem('cookie_consent_date', new Date().toISOString());
    } catch {}
    window.gtag?.('consent', 'update', state);
    window.dataLayer?.push({ event: 'consent_update', ...state });
    setConsent(state);
    setHasSaved(true);
    setOpen(false);
    setDetails(false);
  };

  useEffect(() => {
    if (!open) return setShown(false);
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, [open, details]);

  const toggle = (key: ConsentKey) =>
    setConsent((prev) => ({ ...prev, [key]: prev[key] === 'granted' ? 'denied' : 'granted' }));

  if (!open) return null;

  const canClose = hasSaved;
  const quiet = 'flex min-h-14 items-center justify-center bg-black px-4 text-sm font-medium text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white';

  // One window in the middle of the screen: accept, reject or manage; the list appears only after "manage".
  return (
    <div
      data-curtain="off"
      className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
      onKeyDown={(event) => event.key === 'Escape' && canClose && setOpen(false)}
    >
      <div
        aria-hidden="true"
        onClick={() => canClose && setOpen(false)}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 motion-reduce:transition-none ${shown ? 'opacity-100' : 'opacity-0'}`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        tabIndex={-1}
        autoFocus
        className={`relative flex outline-none max-h-[100svh] w-full flex-col border border-white/15 bg-black text-white shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-[translate,opacity] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none sm:max-h-[calc(100svh-3rem)] sm:max-w-[34rem] ${
          shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="flex min-h-14 shrink-0 items-center justify-between border-b border-white/12 pl-6 sm:pl-9">
          <span className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.2em] uppercase">
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-brand" />
            Cookies
          </span>
          {canClose ? (
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={texts.close}
              className="grid h-14 w-14 place-items-center border-l border-white/12 text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          ) : null}
        </div>

        <div className="overflow-y-auto">
          <div className="px-6 py-7 sm:px-9 sm:py-8">
            <h2 id="cookie-consent-title" className="text-[clamp(1.7rem,3vw,2.2rem)] leading-[0.98] font-medium tracking-[-0.04em]">
              {texts.title}
              <span className="text-brand">.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">{texts.intro}</p>
            <Link href={POLICY_HREF} className="mt-5 inline-block font-mono text-[10px] tracking-[0.16em] text-white/55 uppercase transition-colors hover:text-brand">
              {texts.policy} →
            </Link>
          </div>

          {details ? (
            <ul className="divide-y divide-white/12 border-t border-white/12">
              {categories.map((category, index) => {
                const on = category.locked || consent[category.key] === 'granted';
                return (
                  <li key={category.key}>
                    <label className={`flex items-start gap-5 px-6 py-4 sm:px-9 ${category.locked ? 'cursor-default' : 'cursor-pointer hover:bg-white/[0.04]'}`}>
                      <span className="w-5 shrink-0 pt-1 font-mono text-[9px] tracking-[0.14em] text-brand">{String(index + 1).padStart(2, '0')}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-medium tracking-[-0.01em]">{category.title}</span>
                        <span className="mt-0.5 block text-[13px] leading-snug text-white/50">{category.text}</span>
                      </span>
                      <input
                        type="checkbox"
                        checked={on}
                        disabled={category.locked}
                        onChange={() => toggle(category.key)}
                        aria-label={category.locked ? `${category.title} – ${texts.alwaysOn}` : category.title}
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={`relative mt-0.5 h-5 w-9 shrink-0 border transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand ${
                          on ? 'border-brand bg-brand' : 'border-white/45'
                        } ${category.locked ? 'opacity-45' : ''}`}
                      >
                        <span className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 transition-[left,background-color] duration-200 ${on ? 'left-[1.15rem] bg-black' : 'left-[0.2rem] bg-white/70'}`} />
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-px border-t border-white/12 bg-white/12 pb-[env(safe-area-inset-bottom)]">
          <button
            type="button"
            onClick={() => save(grantedConsent)}
            className="group col-span-2 flex h-16 items-center justify-between bg-brand px-6 text-left text-lg font-medium tracking-[-0.02em] text-black transition-colors hover:bg-brand-hover sm:px-9"
          >
            {texts.acceptAll}
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1.5">
              <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
          <button type="button" onClick={() => save(deniedConsent)} className={quiet}>
            {texts.rejectAll}
          </button>
          {details ? (
            <button type="button" onClick={() => save(consent)} className={quiet}>
              {texts.saveChosen}
            </button>
          ) : (
            <button type="button" onClick={() => setDetails(true)} className={quiet}>
              {texts.manage}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
