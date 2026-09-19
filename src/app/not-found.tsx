import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { FaWhatsapp } from "react-icons/fa"
import { site, waLink } from "../lib/site"

export default function NotFound() {
  return (
    <>
      <Header />

      <main id="main" className="border-b-4 border-ink bg-maize">
        <div className="mx-auto max-w-[1200px] px-5 py-24 lg:px-8 lg:py-32">
          <p className="gu text-lg text-vermilion-deep">પાનું મળ્યું નથી</p>
          <h1 className="mt-2 text-[clamp(2.4rem,5.5vw,4rem)]">
            That page isn&apos;t here
          </h1>
          <p className="mt-5 max-w-measure text-lg leading-relaxed text-ink/85">
            The link may be old, or the address mistyped. The pages below cover
            everything on the site.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 border-2 border-ink bg-vermilion px-6 py-3.5 font-display text-base font-bold text-white shadow-print-sm transition-transform hover:-translate-y-0.5"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 border-2 border-ink bg-sack px-6 py-3.5 font-display text-base font-bold text-ink shadow-print-sm transition-transform hover:-translate-y-0.5"
            >
              Products
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-2 border-ink bg-husk px-6 py-3.5 font-display text-base font-bold text-white shadow-print-sm transition-transform hover:-translate-y-0.5"
            >
              <FaWhatsapp aria-hidden /> {site.phone}
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
