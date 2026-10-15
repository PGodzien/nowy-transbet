import 'server-only';
import { createClient } from '@supabase/supabase-js';

// Supabase client for the recruitment CMS API (server only; the import above fails the build if it reaches the browser).
// With SUPABASE_SERVICE_ROLE_KEY set, writes go through the secret service key, so the table and the "images" bucket
// can refuse writes from the public anon key (see docs/supabase-zabezpieczenie.md). Without it the client falls back
// to the anon key, which works only while Supabase still accepts anon writes.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder';

if (!serviceKey && process.env.NODE_ENV === 'production') {
  console.warn('CMS: brak SUPABASE_SERVICE_ROLE_KEY – zapisy idą kluczem publicznym (anon).');
}

export const supabase = createClient(supabaseUrl, serviceKey || anonKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

// Typy dla ofert
export interface Oferta {
  id?: string;
  slug: string;
  nazwa: string;
  miejsce: string;
  img: string;
  content: string;
  recruitment_url?: string | null;
  archived: boolean;
  created_at?: string;
  updated_at?: string;
}
