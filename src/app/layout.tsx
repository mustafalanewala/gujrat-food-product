import "./globals.css"
import type { Metadata, Viewport } from "next"
import type React from "react"
import { Archivo, Newsreader, Noto_Sans_Gujarati } from "next/font/google"
import { FaWhatsapp } from "react-icons/fa"
import { site, waLink } from "../lib/site"

/** Blocky, slightly expanded grotesque - the lettering on the printed sacks. */
const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-display",
})

/** Warm, low-contrast serif for reading. */
const body = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-body",
})

/** Every real bag is bilingual; so is the site. */
const gujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati", "latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-gu",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://gujaratfoodproducts.in"),
  title: {
    default: "Gujarat Food Products — Makai Poha from Dahod",
    template: "%s — Gujarat Food Products",
  },
  description:
    "A maize mill in Dahod, Gujarat. Makai poha under the Yellow Diamond, Twenty 20, Rajdeep and Indian Gold labels, plus Gujarat King makai bhardo cattle feed.",
  keywords: [
    "makai poha",
    "maize poha manufacturer",
    "corn flakes Dahod",
    "makai bhardo",
    "cattle feed Gujarat",
    "Gujarat Food Products",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  icons: [
    { rel: "icon", type: "image/jpeg", sizes: "32x32", url: "/logo.jpg" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/logo.jpg" },
  ],
  formatDetection: { telephone: true, address: true, email: true },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Gujarat Food Products — Makai Poha from Dahod",
    description:
      "Maize arrives, is boiled, flattened, dried and packed. Four poha labels and a cattle feed, out of one mill in Dahod.",
  },
  verification: { google: "Q5vZuBDuo5t9xpMsI6JY0OmWXyDsy-X6scMDCTMolfM" },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F2C12E",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${gujarati.variable} weave`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-bold focus:uppercase focus:text-maize"
        >
          Skip to content
        </a>

        {children}

        <a
          href={waLink(`Hello ${site.name}, I'd like to ask about your makai poha.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Gujarat Food Products on WhatsApp"
          className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 border-2 border-ink bg-husk px-4 py-3 font-display text-sm font-bold uppercase tracking-wide text-white shadow-print-sm transition-transform hover:-translate-y-0.5 sm:bottom-7 sm:right-7"
        >
          <FaWhatsapp className="text-xl" aria-hidden />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </body>
    </html>
  )
}
