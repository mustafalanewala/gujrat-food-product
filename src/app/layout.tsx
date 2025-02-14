import "./globals.css"
import type { Metadata } from "next"
import type React from "react"
import { Lora } from "next/font/google"

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
      <body className={lora.className}>{children}</body>
    </html>
  )
}
