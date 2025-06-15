import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dylan Ravel - Portfolio",
  description: "A portfolio website containing skills, projects, and more by Dylan Ravel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-[#202020]">{children}</body>
    </html>
  );
}
