import type { Metadata } from "next";

import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "VI Learning Management System",
  description: "A Learning Management System (LMS) built from the ground up for visually impaired (VI) students.",
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
