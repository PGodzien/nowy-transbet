import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
