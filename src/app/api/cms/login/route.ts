import { NextRequest, NextResponse } from 'next/server';
import { cmsConfigured, credentialsMatch, withSession } from '@/lib/cms-auth';

export async function POST(request: NextRequest) {
  if (!cmsConfigured()) {
    return NextResponse.json(
      { error: 'CMS nie jest skonfigurowany: brak CMS_USERNAME lub CMS_PASSWORD w zmiennych środowiskowych.' },
      { status: 503 },
    );
  }
  const { username = '', password = '' } = await request.json().catch(() => ({}));
  if (!credentialsMatch(String(username), String(password))) {
    return NextResponse.json({ error: 'Nieprawidłowa nazwa użytkownika lub hasło' }, { status: 401 });
  }
  return withSession(NextResponse.json({ ok: true }));
}
