import { NextResponse } from 'next/server';
import { isCmsSession } from '@/lib/cms-auth';

export async function GET() {
  return NextResponse.json({ loggedIn: await isCmsSession() });
}
