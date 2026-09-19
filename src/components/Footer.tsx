import Link from "next/link"
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { site, waLink } from "../lib/site"

export default function Footer() {
  return (
    <footer className="on-dark border-t-4 border-ink bg-indigo-deep text-sack">
      <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.3fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-maize">
              {site.name}
            </h2>
            <p className="gu mt-1 text-lg text-sack/80">મકાઈ પૌંઆ</p>
            <p className="mt-4 max-w-[32ch] text-sack/80">
              A maize mill on the Mega GIDC estate in Dahod, packing poha and
              cattle feed under five labels.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border-2 border-maize bg-transparent px-4 py-2.5 font-display text-sm font-bold text-maize transition-colors hover:bg-maize hover:text-ink"
            >
              <FaWhatsapp aria-hidden /> Message us on WhatsApp
            </a>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display text-sm font-bold text-maize">Pages</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/products", label: "Products" },
                { href: "/about", label: "The mill" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="links text-sack/85 hover:text-maize">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold text-maize">Reach the mill</h3>
            <ul className="mt-4 space-y-3 text-sack/85">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1.5 shrink-0 text-maize" aria-hidden />
                <a
                  href={site.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links hover:text-maize"
                >
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </a>
              </li>
              <li className="flex gap-3">
                <FaPhoneAlt className="mt-1.5 shrink-0 text-maize" aria-hidden />
                <a href={site.phoneHref} className="links hover:text-maize">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <FaEnvelope className="mt-1.5 shrink-0 text-maize" aria-hidden />
                <a href={`mailto:${site.email}`} className="links break-all hover:text-maize">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-sack/20 pt-6 text-sm text-sack/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <p>
            Developed By{" "}
            <Link
              href="https://mxsolution.in"
              target="_blank"
              rel="noopener noreferrer"
              className="links text-sack/80 hover:text-maize"
            >
              Mx Solution
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
