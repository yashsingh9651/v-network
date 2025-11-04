import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Whatsapp from "@/components/whatsapp";

const _geistSans = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "V-Networks - Enterprise IT Solutions & Infrastructure",
  description:
    "Transform your business with cutting-edge IT solutions. Enterprise-grade security, server management, endpoint protection, and 24/7 support for modern businesses.",
  keywords: [
    "IT solutions",
    "enterprise IT",
    "cybersecurity",
    "server management",
    "IT support",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
        <Whatsapp />
      </body>
    </html>
  );
}
