/*
 * Google Consent Mode v2. The visitor's choice is stored in localStorage under the same key
 * and in the same shape as on the previous site, so a choice made there still counts here.
 */

export const CONSENT_STORAGE_KEY = 'cookie_consent';
export const CONSENT_OPEN_EVENT = 'cookie-settings:open';

export const consentKeys = [
  'analytics_storage',
  'ad_storage',
  'ad_user_data',
  'ad_personalization',
  'functionality_storage',
  'personalization_storage',
  'security_storage',
] as const;

export type ConsentKey = (typeof consentKeys)[number];
export type ConsentState = Record<ConsentKey, 'granted' | 'denied'>;

export const deniedConsent: ConsentState = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'granted',
  personalization_storage: 'denied',
  security_storage: 'granted',
};

export const grantedConsent: ConsentState = {
  analytics_storage: 'granted',
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  functionality_storage: 'granted',
  personalization_storage: 'granted',
  security_storage: 'granted',
};

// Runs in <head> before Google Tag Manager: everything optional starts denied unless the visitor already chose.
export const consentDefaultsScript = `
window.dataLayer = window.dataLayer || [];
window.gtag = function(){ window.dataLayer.push(arguments); };
var consent = ${JSON.stringify(deniedConsent)};
try {
  var saved = JSON.parse(localStorage.getItem('${CONSENT_STORAGE_KEY}') || 'null');
  if (saved && typeof saved === 'object') for (var key in consent) if (saved[key] === 'granted' || saved[key] === 'denied') consent[key] = saved[key];
} catch (e) {}
window.gtag('consent', 'default', Object.assign({ wait_for_update: 500 }, consent));
window.gtag('set', 'ads_data_redaction', true);
`;

// Opens the banner's settings from anywhere (e.g. the footer link).
export function openCookieSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
