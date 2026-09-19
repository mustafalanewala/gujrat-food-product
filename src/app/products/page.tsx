import type { Metadata } from "next"
import Image from "next/image"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { FaWhatsapp } from "react-icons/fa"
import { site, waLink, products, quality, type Product } from "../../lib/site"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Makai poha under the Yellow Diamond, Twenty 20, Rajdeep and Indian Gold labels, and Gujarat King makai bhardo cattle feed.",
}

function ProductCard({ p }: { p: Product }) {
  return (
    <li className="flex flex-col border-2 border-ink bg-white">
      <div className="border-b-2 border-ink bg-white">
        <Image
          src={p.image}
          alt={p.brand + " " + p.line + " sack"}
          width={640}
          height={560}
          className="h-72 w-full object-contain p-4"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-extrabold">{p.brand}</h3>
        <p className="mt-1 font-display text-sm font-semibold text-vermilion">
          {p.line}
          <span className="gu ml-2 font-normal text-ink-soft">{p.gu}</span>
        </p>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
          {p.note}
        </p>

        <a
          href={waLink(
            "Hello Gujarat Food Products, I would like a quote for " +
              p.brand +
              " " +
              p.line +
              "."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2.5 border-2 border-ink bg-husk px-5 py-3 font-display text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:shadow-print-sm"
        >
          <FaWhatsapp aria-hidden />
          Ask about {p.brand}
        </a>
      </div>
    </li>
  )
}

export default function Products() {
  const poha = products.filter((p) => p.kind === "poha")
  const feed = products.filter((p) => p.kind === "feed")

  return (
    <>
      <Header />

      <main id="main">
        <section className="border-b-4 border-ink bg-maize">
          <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8 lg:py-20">
            <p className="gu text-lg text-vermilion-deep">મકાઈ પૌંઆ અને મકાઈ ભરડો</p>
            <h1 className="mt-2 text-[clamp(2.4rem,5.5vw,4rem)]">
              Five labels, one mill
            </h1>
            <p className="mt-5 max-w-measure text-lg leading-relaxed text-ink/85">
              Four poha brands and a cattle feed, all filled and stitched at Plot
              358 &amp; 359 on the Mega GIDC estate in Dahod.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
          <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)]">Makai poha</h2>
          <p className="mt-3 max-w-measure text-lg text-ink-soft">
            Flattened maize flakes. Sold raw, to be cooked.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {poha.map((p) => (
              <ProductCard key={p.brand + p.image} p={p} />
            ))}
          </ul>
        </section>

        <section className="border-t-2 border-ink bg-sack-shade">
          <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
            <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)]">Cattle feed</h2>
            <p className="mt-3 max-w-measure text-lg text-ink-soft">
              Makai bhardo, coarse-milled for livestock. Two bag prints, one
              product.
            </p>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
              {feed.map((p) => (
                <ProductCard key={p.brand + p.image} p={p} />
              ))}
            </ul>
          </div>
        </section>

        <section className="on-dark border-y-4 border-ink bg-indigo-deep">
          <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <h2 className="text-maize">Our commitment to quality</h2>
                <p className="mt-3 max-w-measure text-lg text-sack/75">
                  We are committed to delivering the highest quality makai poha
                  and cattle feed. Bag sizes and load quantities depend on the
                  order, so ask us.
                </p>
              </div>
              <ul className="divide-y divide-sack/20 border-y border-sack/20">
                {quality.map((q) => (
                  <li
                    key={q}
                    className="flex gap-4 py-5 text-lg leading-relaxed text-sack"
                  >
                    <span
                      className="mt-2.5 h-2.5 w-2.5 shrink-0 bg-maize"
                      aria-hidden
                    />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b-4 border-ink bg-maize">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8 px-5 py-16 lg:px-8">
            <h2 className="max-w-measure text-[clamp(1.8rem,3.4vw,2.5rem)]">
              Send us the label and quantity you need
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href={waLink("Hello Gujarat Food Products, I would like a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border-2 border-ink bg-husk px-6 py-3.5 font-display text-base font-bold text-white shadow-print-sm transition-transform hover:-translate-y-0.5"
              >
                <FaWhatsapp aria-hidden /> WhatsApp
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2.5 border-2 border-ink bg-sack px-6 py-3.5 font-display text-base font-bold text-ink shadow-print-sm transition-transform hover:-translate-y-0.5"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
