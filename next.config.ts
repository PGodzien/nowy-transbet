import type { NextConfig } from "next";
import { euProjects } from "./src/data/eu-projects";

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
      // EU projects lived at the root of the previous site.
      ...euProjects.map((project) => ({ source: `/${project.slug}`, destination: `/srodki-ue/${project.slug}`, permanent: true })),
      // Declarations of performance per plant: the documents page opens on that plant's tab.
      ...["przemysl", "jaroslaw", "radymno"].map((plant) => ({
        source: `/krajowa-deklaracja-wlasciwosci-uzytkowych-kdwu-${plant}`,
        destination: `/dokumenty?zaklad=${plant}#kdwu`,
        permanent: true,
      })),
      // Product landing pages now covered by the product cards.
      { source: "/plyty-drogowe", destination: "/prefabrykacja-betonowa/plyty-drogowe", permanent: true },
      { source: "/plyty-yomb", destination: "/prefabrykacja-betonowa/plyty-yomb", permanent: true },
      { source: "/bloki-betonowe", destination: "/prefabrykacja-betonowa/bloki-oporowe", permanent: true },
    ];
  },
};

export default nextConfig;
