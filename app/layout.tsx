import type { Metadata } from "next";

import "./globals.css";

import { ProfileInformation } from "@/lib/branding";

export const metadata: Metadata = {
  title: "Dylan Ravel - Portfolio",
  description: "A portfolio website containing skills, projects, and more by Dylan Ravel.",
  icons: {
    icon: [
      {
        url: `${ProfileInformation.Headshots[0]}`,
        href: `${ProfileInformation.Headshots[0]}`,
      },
    ],
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
