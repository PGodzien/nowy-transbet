import type { Metadata } from 'next';

// Internal tools (e-mail signature generators): no site navigation, not for search engines.
export const metadata: Metadata = {
  title: 'Generator stopki mailowej',
  robots: { index: false, follow: false },
};

export default function ToolsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="relative z-10 min-h-svh bg-gray-50 text-black">{children}</div>;
}
