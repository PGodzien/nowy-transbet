import { createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// Login for the recruitment CMS (/cms). Credentials live in env vars, never in client code:
// CMS_USERNAME and CMS_PASSWORD (set them in .env.local and in the Vercel project).
// The session cookie holds an HMAC of the credentials, so changing the password logs everyone out.
export const CMS_COOKIE = 'cms_session';
const MAX_AGE = 60 * 60 * 12; // 12 h

function sessionToken() {
  const user = process.env.CMS_USERNAME;
  const pass = process.env.CMS_PASSWORD;
  if (!user || !pass) return null;
  return createHmac('sha256', pass).update(`cms:${user}`).digest('hex');
}

function same(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function credentialsMatch(username: string, password: string) {
  const user = process.env.CMS_USERNAME;
  const pass = process.env.CMS_PASSWORD;
  if (!user || !pass) return false;
  return same(username, user) && same(password, pass);
}

export async function isCmsSession() {
  const token = sessionToken();
  const cookie = (await cookies()).get(CMS_COOKIE)?.value;
  return Boolean(token && cookie && same(cookie, token));
}

export function withSession(response: NextResponse) {
  const token = sessionToken();
  if (token) {
    response.cookies.set(CMS_COOKIE, token, { httpOnly: true, secure: true, sameSite: 'strict', path: '/', maxAge: MAX_AGE });
  }
  return response;
}

export function unauthorized() {
  return NextResponse.json({ error: 'Brak dostępu' }, { status: 401 });
}
