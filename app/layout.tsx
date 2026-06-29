import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { company } from "@/lib/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Update with the production domain before launch.
const siteUrl = "https://www.apexcapitalrealty.com"; // PLACEHOLDER

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Apex Capital Realty — Industrial Real Estate Brokerage | Miami, FL",
    template: "%s | Apex Capital Realty",
  },
  description:
    "Apex Capital Realty is a Miami-based industrial real estate brokerage specializing in warehouse, distribution, last-mile logistics, and industrial land across South Florida.",
  keywords: [
    "industrial real estate",
    "Miami warehouse",
    "South Florida industrial brokerage",
    "warehouse for lease",
    "distribution center",
    "last-mile logistics",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: company.name,
    title: "Apex Capital Realty — Industrial Real Estate Brokerage",
    description:
      "Industrial sales, leasing, and advisory across South Florida. Browse our property library of warehouse, distribution, and logistics space.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Capital Realty — Industrial Real Estate Brokerage",
    description:
      "Industrial sales, leasing, and advisory across South Florida.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
