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

export const metadata: Metadata = {
  title: "Boom | Ecommerce Coaching for Shopify Founders",
  description:
    "Boom is a capped-capacity coaching community for ecommerce founders and marketers. Get a strategy built on your numbers, coached by operators who've scaled 8-figure brands.",
  metadataBase: new URL("https://coaching.boomecommerce.com.au"),
  openGraph: {
    title: "Boom | Ecommerce Coaching for Shopify Founders",
    description:
      "A capped-capacity coaching community for ecommerce founders. We work with you, not your competitors.",
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
