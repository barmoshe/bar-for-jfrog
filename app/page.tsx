import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import JfrogApp from "@/src/marketing/jfrog/JfrogApp";

// Open Sans is JFrog's brand face (read live off jfrog.com — body and headings
// are Open Sans, 700 for headings). Loaded with the Latin subset and exposed as
// --font-jf for jfrog.css; --font-jf-display falls back to it.
const body = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-jf",
  display: "swap",
});

// Ad-hoc, personalized application page for Bar Moshe's JFrog applications
// (GenAI & Competitive Intelligence Engineer, and Software Engineer), built in
// JFrog's own visual language (deep navy, the green earned, Open Sans, pill
// CTAs, supply-chain flow). A private, shareable link sent with applications,
// so noindex.
const ogTitle = "Bar Moshe × JFrog — AI Builder & Full-Stack Engineer";
const ogDescription =
  "An AI builder who ships production features through Claude Code, builds MCP servers and Claude skills, and owns full-stack + DevOps end to end. Open source on npm, code featured on Temporal's Code Exchange.";

export const metadata: Metadata = {
  title: ogTitle,
  description: ogDescription,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: "Bar Moshe",
    title: ogTitle,
    description: ogDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
  },
};

export default function JfrogPage() {
  return (
    <div className={body.variable}>
      <JfrogApp />
    </div>
  );
}
