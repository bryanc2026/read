import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Matches the live site's title/description exactly (used identically across every
// page there) to preserve existing SEO equity during the platform migration.
const liveTitle = "Ecommerce coaching, training and consulting";
const liveDescription =
  "You have or work in an eCommerce business, but want to know what is working for other eCommerce businesses in Australia and New Zealand. You also want to build hands on skills to grow the business. You're in the right place.";

export const metadata: Metadata = {
  title: liveTitle,
  description: liveDescription,
  metadataBase: new URL("https://coaching.boomecommerce.com.au"),
  openGraph: {
    title: liveTitle,
    description: liveDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
