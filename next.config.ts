import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Job offer photos uploaded through the recruitment CMS live in Supabase Storage.
    remotePatterns: [{ protocol: "https", hostname: "*.supabase.co", pathname: "/storage/v1/object/public/**" }],
  },
  // Old addresses of the previous site that now live elsewhere.
  async redirects() {
    return [
      { source: "/oferty-pracy", destination: "/kariera", permanent: true },
      {
        source: "/indywidualne-zamowienia-prefabrykatow-betonowych",
        destination: "/prefabrykacja-betonowa/prefabrykaty-na-zamowienie",
        permanent: true,
      },
      { source: "/katalog-produktowy", destination: "/katalog-transbet-www.pdf", permanent: true },
      { source: "/certyfikaty", destination: "/dokumenty#certyfikaty", permanent: true },
      { source: "/deklaracje", destination: "/dokumenty#kdwu", permanent: true },
      { source: "/prefabrykaty-betonowe", destination: "/dokumenty#prefabrykaty", permanent: true },
      { source: "/nowa-strona", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
