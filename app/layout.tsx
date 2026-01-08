import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cognifab | Automated Corporate GHG Accounting Engine",
  description: "Transform operational and spend data into GHG Protocol & ISO 14064-1 aligned emissions reports. Audit-ready carbon accounting for manufacturers.",
  keywords: ["GHG accounting", "carbon emissions", "ISO 14064-1", "GHG Protocol", "sustainability", "ESG reporting"],
  authors: [{ name: "Cognifab" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cognifab.com",
    siteName: "Cognifab",
    title: "Cognifab | Automated Corporate GHG Accounting Engine",
    description: "Transform operational and spend data into GHG Protocol & ISO 14064-1 aligned emissions reports.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
