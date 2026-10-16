import nodemailer from 'nodemailer';
import { ATTACHMENTS, contactDepartments } from '@/data/contact';

/*
 * Contact form: sends the message, with up to three attachments, to the chosen department's address.
 * Needs a mailbox to send from: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and optionally SMTP_FROM
 * (for Microsoft 365: smtp.office365.com, port 587). Without them it answers 503 with fallback: true,
 * and the form opens the visitor's mail client instead, as before.
 */

const extensions = new Set(ATTACHMENTS.accept.split(','));

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const reply = (status: number, message: string, extra: Record<string, unknown> = {}) => Response.json({ message, ...extra }, { status });

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  if (!form) return reply(400, 'Nieprawidłowe dane formularza.');

  // Honeypot: only bots fill this field.
  if (form.get('website')) return reply(200, 'Wiadomość wysłana.');

  const text = (key: string, max: number) => String(form.get(key) ?? '').trim().slice(0, max);
  const department = contactDepartments.find((item) => item.value === form.get('department'));
  const name = text('name', 120);
  const email = text('email', 200);
  const phone = text('phone', 40);
  const message = text('message', 5000);

  if (!department || name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 2 || form.get('consent') !== 'on') {
    return reply(400, 'Uzupełnij wymagane pola formularza.');
  }

  const files = form.getAll('files').filter((file): file is File => file instanceof File && file.size > 0);
  const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
  if (files.length > ATTACHMENTS.maxFiles || totalBytes > ATTACHMENTS.maxTotalBytes) {
    return reply(400, `Możesz dołączyć do ${ATTACHMENTS.maxFiles} plików o łącznym rozmiarze do 4 MB.`);
  }
  if (files.some((file) => !extensions.has(`.${file.name.split('.').pop()?.toLowerCase()}`))) {
    return reply(400, 'Ten rodzaj pliku nie jest obsługiwany.');
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return reply(503, 'Wysyłka z formularza nie jest jeszcze skonfigurowana.', { fallback: true });
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ['Dział', department.label],
    ['Imię i nazwisko', name],
    ['E-mail', email],
    ['Telefon', phone || '—'],
  ];

  try {
    await transporter.sendMail({
      from: SMTP_FROM || `"Formularz transbet.com.pl" <${SMTP_USER}>`,
      to: department.email,
      replyTo: { name, address: email },
      subject: `[${department.label}] Wiadomość z formularza – ${name}`,
      text: `${rows.map(([key, value]) => `${key}: ${value}`).join('\n')}\n\n${message}`,
      html: `<table cellpadding="4" style="font-family:sans-serif;font-size:14px">${rows
        .map(([key, value]) => `<tr><td style="color:#6b7280">${key}</td><td><strong>${escapeHtml(value)}</strong></td></tr>`)
        .join('')}</table><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(message)}</p>`,
      attachments: await Promise.all(files.map(async (file) => ({ filename: file.name, content: Buffer.from(await file.arrayBuffer()) }))),
    });
  } catch (error) {
    console.error('Formularz kontaktowy: błąd wysyłki', error instanceof Error ? error.message : error);
    return reply(502, 'Nie udało się wysłać wiadomości. Spróbuj ponownie albo napisz na biuro@transbet.com.pl.');
  }

  return reply(200, 'Wiadomość wysłana.');
}
