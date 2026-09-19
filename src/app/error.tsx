"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import { site, waLink } from "../lib/site"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main id="main" className="min-h-screen border-b-4 border-ink bg-maize">
      <div className="mx-auto max-w-[1200px] px-5 py-24 lg:px-8 lg:py-32">
        <p className="gu text-lg text-vermilion-deep">કંઈક ખોટું થયું</p>
        <h1 className="mt-2 text-[clamp(2.4rem,5.5vw,4rem)]">
          This page didn&apos;t load
        </h1>
        <p className="mt-5 max-w-measure text-lg leading-relaxed text-ink/85">
          Something broke on our side. Try again, and if it keeps happening,
          send us a message and we&apos;ll sort it out.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2.5 border-2 border-ink bg-vermilion px-6 py-3.5 font-display text-base font-bold text-white shadow-print-sm transition-transform hover:-translate-y-0.5"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 border-2 border-ink bg-sack px-6 py-3.5 font-display text-base font-bold text-ink shadow-print-sm transition-transform hover:-translate-y-0.5"
          >
            Go to the home page
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

        {error.digest && (
          <p className="tabular mt-10 font-display text-sm text-ink/60">
            Reference {error.digest}
          </p>
        )}
      </div>
    </main>
  )
}
