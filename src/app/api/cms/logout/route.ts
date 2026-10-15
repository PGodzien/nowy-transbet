import { NextResponse } from 'next/server';
import { CMS_COOKIE } from '@/lib/cms-auth';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(CMS_COOKIE);
  return response;
}
