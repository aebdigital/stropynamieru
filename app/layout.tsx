/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { CookieConsentProvider } from "@/components/cookie-consent";
import { LenisProvider } from "@/components/lenis-provider";
import { SiteSchema } from "@/components/site-schema";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: "%s | Stropy na mieru",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [absoluteUrl("/twitter-image")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "home improvement",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="sk">
      <head>
        <link rel="stylesheet" href="/assets/css/common.css" />
        <link rel="stylesheet" href="/assets/css/header.css" />
        <link rel="stylesheet" href="/assets/css/footer.css" />
        <link rel="stylesheet" href="/assets/css/index.css" />
        <link rel="stylesheet" href="/assets/css/stropy.css" />
        <link rel="stylesheet" href="/assets/css/galeria.css" />
        <link rel="stylesheet" href="/assets/css/cenova-ponuka.css" />
        <link rel="stylesheet" href="/assets/css/kontakt.css" />
      </head>
      <body className={inter.className}>
        <SiteSchema />
        <CookieConsentProvider>
          <LenisProvider />
          <SiteHeader />
          {children}
          <SiteFooter />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
