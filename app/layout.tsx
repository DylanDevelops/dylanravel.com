import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

import { PortfolioConstants } from "@/lib/branding";
import { DomainURL } from "@/lib/links";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DomainURL),
  title: `${PortfolioConstants.FullName} - Portfolio`,
  description: `A portfolio website containing skills, projects, and more by ${PortfolioConstants.FullName}.`,
  icons: {
    icon: [
      {
        url: PortfolioConstants.Headshots[1],
        href: PortfolioConstants.Headshots[1],
      },
    ],
  },
  openGraph: {
    type: "website",
    url: DomainURL,
    title: `${PortfolioConstants.FullName} - Portfolio`,
    images: [{ url: "/meta-images/dylanravel-com.png", alt: "A picture reading 'DYLAN RAVEL - Portfolio Website'" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PortfolioConstants.FullName} - Portfolio`,
    images: [{ url: "/meta-images/dylanravel-com.png", alt: "A picture reading 'DYLAN RAVEL - Portfolio Website'" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head />
      <body className="overflow-x-clip bg-[#202020]">
        {children}
        <GoogleAnalytics gaId={PortfolioConstants.GoogleAnalyticsTag} />
      </body>
    </html>
  );
}
