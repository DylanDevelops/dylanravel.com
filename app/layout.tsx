import type { Metadata } from "next";

import "./globals.css";

import { ProfileInformation } from "@/lib/branding";
import { DomainURL } from "@/lib/links";

export const metadata: Metadata = {
  title: `${ProfileInformation.FullName} - Portfolio`,
  description: `A portfolio website containing skills, projects, and more by ${ProfileInformation.FullName}.`,
  icons: {
    icon: [
      {
        url: ProfileInformation.Headshots[0],
        href: ProfileInformation.Headshots[0],
      },
    ],
  },
  openGraph: {
    type: "website",
    url: DomainURL,
    images: [{ url: "/meta-images/dylanravel-com.png", alt: "A picture reading 'DYLAN RAVEL - Portfolio Website'" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/meta-images/dylanravel-com.png", alt: "A picture reading 'DYLAN RAVEL - Portfolio Website'" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-[#202020] overflow-x-clip">{children}</body>
    </html>
  );
}
