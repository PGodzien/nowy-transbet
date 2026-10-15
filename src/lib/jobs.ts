// Job offers come from the same Supabase table ("oferty") that the recruitment CMS on the previous site edits,
// read through Supabase's REST API with the public anon key. Without the env vars the pages show no offers.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fresh offers within a minute of saving them in the CMS.
export const JOBS_REVALIDATE = 60;

export type Job = {
  slug: string;
  nazwa: string;
  miejsce: string;
  img: string | null;
  content: string;
  recruitment_url: string | null;
  created_at: string | null;
};

async function query(params: string): Promise<Job[]> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return [];
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/oferty?${params}`, {
      headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
      next: { revalidate: JOBS_REVALIDATE },
    });
    if (!response.ok) {
      console.error('Supabase oferty:', response.status, await response.text());
      return [];
    }
    return (await response.json()) as Job[];
  } catch (error) {
    console.error('Supabase oferty:', error);
    return [];
  }
}

const FIELDS = 'select=slug,nazwa,miejsce,img,content,recruitment_url,created_at';

export function getJobs() {
  return query(`${FIELDS}&archived=eq.false&order=nazwa.asc`);
}

export async function getJob(slug: string) {
  const [job] = await query(`${FIELDS}&archived=eq.false&slug=eq.${encodeURIComponent(slug)}&limit=1`);
  return job ?? null;
}

export function recruitmentUrl(job: Job) {
  const url = job.recruitment_url?.trim();
  return url && /^https?:\/\//i.test(url) ? url : null;
}

// Photo chosen in the CMS: one of the bundled photos ("/inzynier.jpg", copied to public/) or a Supabase Storage upload.
// Empty and the old placeholder "./default-job.jpg" mean no photo, as on the previous site.
export function jobImage(job: Job) {
  const src = job.img?.trim();
  if (!src || /default-job\.jpg$/.test(src)) return null;
  if (/^https:\/\//i.test(src)) return src;
  return '/' + src.replace(/^\.?\/+/, '');
}
