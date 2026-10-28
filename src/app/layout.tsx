import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import faviconIcon from "../../public/hydroTech_LOGO.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: faviconIcon.src, type: "image/png" },
      { url: "/hydroTech_LOGO.png", type: "image/png" }
    ],
    shortcut: "/hydroTech_LOGO.png",
    apple: "/hydroTech_LOGO.png",
  },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/logo.jpg",
        alt: `${siteConfig.name} Logo`,
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
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-brand-bg text-brand-text`}>
        <ScrollToTop />
        <Header />
        <main className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
