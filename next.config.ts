import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old address of the job list on the previous site.
  async redirects() {
    return [{ source: "/oferty-pracy", destination: "/kariera", permanent: true }];
  },
};

export default nextConfig;
