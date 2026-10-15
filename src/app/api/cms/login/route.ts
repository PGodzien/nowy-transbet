import { NextRequest, NextResponse } from 'next/server';
import { credentialsMatch, withSession } from '@/lib/cms-auth';

export async function POST(request: NextRequest) {
  const { username = '', password = '' } = await request.json().catch(() => ({}));
  if (!credentialsMatch(String(username), String(password))) {
    return NextResponse.json({ error: 'Nieprawidłowa nazwa użytkownika lub hasło' }, { status: 401 });
  }
  return withSession(NextResponse.json({ ok: true }));
}
