/*
 * Departments of the contact form and where each one's messages go
 * (as in lib/contactDepartments.ts of the previous site, plus Marketing).
 * Shared by the form and by /api/kontakt, which picks the address on the server.
 */
export const contactDepartments = [
  { value: 'betoniarnia', label: 'Betoniarnia', email: 'biuro@transbet.com.pl' },
  { value: 'prefabrykaty-betonowe', label: 'Prefabrykaty betonowe', email: 'prefabrykaty@transbet.com.pl' },
  { value: 'prefabrykaty-zbrojeniowe', label: 'Prefabrykaty zbrojeniowe', email: 'zbrojarnia@transbet.com.pl' },
  { value: 'zbrojenie-budowlane', label: 'Zbrojenie budowlane', email: 'zbrojarnia@transbet.com.pl' },
  { value: 'kruszywa', label: 'Kruszywa budowlane', email: 'biuro@transbet.com.pl' },
  { value: 'sprzet', label: 'Sprzęt i wynajem', email: 'biuro@transbet.com.pl' },
  { value: 'laboratorium', label: 'Laboratorium', email: 'biuro@transbet.com.pl' },
  { value: 'ksiegowosc', label: 'Księgowość', email: 'biuro@transbet.com.pl' },
  { value: 'rekrutacja', label: 'Rekrutacja', email: 'rekrutacja@transbet.com.pl' },
  // Address to confirm: no marketing mailbox is named anywhere on the previous site.
  { value: 'marketing', label: 'Marketing', email: 'biuro@transbet.com.pl' },
  { value: 'inne', label: 'Inne', email: 'biuro@transbet.com.pl' },
] as const;

export type ContactDepartment = (typeof contactDepartments)[number]['value'];

// Attachments: what a serverless function can receive in one request (Vercel's limit is 4.5 MB).
export const ATTACHMENTS = {
  maxFiles: 3,
  maxTotalBytes: 4 * 1024 * 1024,
  accept: '.pdf,.jpg,.jpeg,.png,.webp,.heic,.doc,.docx,.xls,.xlsx,.dwg,.dxf,.zip',
} as const;
