import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Root layout. English / LTR document shell; page-level metadata (fonts, copy)
// lives in app/page.tsx.
export const metadata: Metadata = {
  metadataBase: new URL("https://bar-for-jfrog.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>
    <Script
      src="https://bar-for-companies.vercel.app/track.js"
      data-bar-for-id="jfrog"
      strategy="afterInteractive"
    />
{children}</body>
    </html>
  );
}
