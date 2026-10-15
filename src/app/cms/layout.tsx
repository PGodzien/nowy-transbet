import type { Metadata } from 'next';

// Recruitment CMS: not for search engines.
export const metadata: Metadata = {
  title: 'CMS ofert pracy',
  robots: { index: false, follow: false },
};

export default function CmsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="relative z-10 min-h-svh bg-gray-50 text-black">{children}</div>;
}
