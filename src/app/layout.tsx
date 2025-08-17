import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-dark-amber/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

// Determine site URL for absolute metadata resolution
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://juanruiz.work";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Juan Ruiz",
  description: "The Man, The Myth, The Legend - Juan",
  openGraph: {
    title: "Juan Ruiz",
    description: "The Man, The Myth, The Legend - Juan",
    type: "profile",
    siteName: "Juan Ruiz",
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/juan-avatar.png",
        width: 1200,
        height: 1200,
        alt: "Juan Ruiz — The Man, The Myth, The Legend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Ruiz",
    description: "The Man, The Myth, The Legend - Juan",
    site: "@juanruiz",
    creator: "@juanruiz",
    images: ["/juan-avatar.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/main-icon.png", type: "image/png" },
    ],
    apple: [{ url: "/main-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans parallax`}>
        <PrimeReactProvider>
          <div className="min-h-screen flex flex-col relative">
            <Navbar />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
