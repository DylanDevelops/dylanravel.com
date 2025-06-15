import type { Metadata } from "next";

import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";

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
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
