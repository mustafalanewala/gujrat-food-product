"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa"
import { site, waLink } from "../lib/site"

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "The mill" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-sack/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name}, home`}>
          <Image
            src="/logo.jpg"
            alt=""
            width={96}
            height={64}
            className="h-11 w-auto border-2 border-ink"
            priority
          />
          <span className="hidden font-display text-[15px] font-extrabold leading-[1.1] tracking-tight text-ink sm:block">
            Gujarat Food
            <br />
            Products
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative font-display text-[15px] font-semibold text-ink transition-colors hover:text-vermilion ${
                  active ? "text-vermilion" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[3px] w-full bg-vermilion transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border-2 border-ink bg-maize px-3.5 py-2 font-display text-sm font-bold text-ink shadow-print-sm transition-transform hover:-translate-y-0.5 sm:flex"
          >
            <FaWhatsapp className="text-husk" aria-hidden />
            {site.phone}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="border-2 border-ink bg-sack p-2.5 text-ink md:hidden"
          >
            {open ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t-2 border-ink bg-maize md:hidden"
        >
          <ul className="divide-y-2 divide-ink/15">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block px-5 py-3.5 font-display text-lg font-bold text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 font-display text-lg font-bold text-ink"
              >
                <FaWhatsapp className="text-husk" aria-hidden />
                {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
