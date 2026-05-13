import type { NextConfig } from "next";

import { GitHubURL, InstagramURL, ItchIoURL, KoFiURL, LinkedInURL, ORCIDUrl } from "./lib/links";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/github",
        destination: GitHubURL,
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: LinkedInURL,
        permanent: true,
      },
      {
        source: "/instagram",
        destination: InstagramURL,
        permanent: true,
      },
      {
        source: "/itch",
        destination: ItchIoURL,
        permanent: true,
      },
      {
        source: "/orcid",
        destination: ORCIDUrl,
        permanent: true,
      },
      {
        source: "/kofi",
        destination: KoFiURL,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
