import "./globals.css"
import type { Metadata } from "next"
import type React from "react"
import { Lora } from "next/font/google"
import { FaWhatsapp } from "react-icons/fa" // Import the WhatsApp icon

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gujrat Food Products",
  description:
    "Discover the best quality Makai Poha from Gujrat Food Products. Naturally grown, perfectly processed corn products and cow feed.",
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
