import "./globals.css"
import type { Metadata } from "next"
import type React from "react"
import { Lora } from "next/font/google"
import { FaWhatsapp } from "react-icons/fa"

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gujarat Food Products",
  icons: [
    {
      rel: "icon",
      type: "image/jpg",
      sizes: "32x32",
      url: "/logo.jpg",
    },
    {
      rel: "icon",
      type: "image/jpg",
      sizes: "16x16",
      url: "/logo.jpg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/logo.jpg",
    },
  ],
  manifest: "/site.webmanifest",
  keywords: "makai poha, corn flakes, gujarat food products, indian snacks, healthy breakfast, traditional food, dahod gujarat, best makai poha manufacturer, organic corn flakes, healthy indian breakfast, natural food products, premium quality snacks, wholesale corn products, authentic gujarati food",
  authors: [{ name: "Gujarat Food Products" }],
  creator: "Gujarat Food Products",
  publisher: "Gujarat Food Products",
  formatDetection: {
    telephone: true,
    date: true,
    email: true,
    address: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    "Discover the best quality Makai Poha from Gujrat Food Products. Naturally grown, perfectly processed corn products and cow feed.",
  verification: {
    google: 'Q5vZuBDuo5t9xpMsI6JY0OmWXyDsy-X6scMDCTMolfM',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        {children}

        {/* WhatsApp Chat Icon */}
        <a
          href="https://wa.me/919909708678"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </body>
    </html>
  )
}