import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
