import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Job offer photos uploaded through the recruitment CMS live in Supabase Storage.
    remotePatterns: [{ protocol: "https", hostname: "*.supabase.co", pathname: "/storage/v1/object/public/**" }],
  },
  // Old address of the job list on the previous site.
  async redirects() {
    return [{ source: "/oferty-pracy", destination: "/kariera", permanent: true }];
  },
};

export default nextConfig;
