import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { FaWhatsapp, FaArrowRight } from "react-icons/fa"
import { site, waLink, products, process, quality, photos } from "../lib/site"

const facts = [
  { k: "Mill", v: "Dahod, Gujarat" },
  { k: "Poha labels", v: "Four" },
  { k: "Also packs", v: "Cattle feed" },
]

const testimonials = [
  {
    name: "Amit Sharma",
    text: "The best makai poha I have tasted. The texture and flavour are consistent bag to bag.",
  },
  {
    name: "Priya Verma",
    text: "We have been ordering for two years. The grade does not drift between seasons.",
  },
  {
    name: "Rahul Mehta",
    text: "Fresh, clean and well packed. It has become a staple in our kitchen.",
  },
]

const quoteMessage = "Hello Gujarat Food Products, I would like a quote."

export default function Home() {
  return (
    <>
      <Header />

      <main id="main">
        {/* Hero: a printed label pasted against the grain it is made from. */}
        <section className="border-b-4 border-ink bg-ink">
          <div className="grid lg:grid-cols-[minmax(0,44fr)_minmax(0,56fr)]">
            <div className="order-2 flex items-center bg-maize px-5 py-14 sm:px-10 lg:order-1 lg:py-24">
              <div className="w-full">
                <p className="gu animate-label-in text-lg text-vermilion-deep">
                  મકાઈ પૌંઆ
                </p>
                <h1
                  className="animate-label-in mt-3 text-[clamp(2.6rem,6vw,4.4rem)]"
                  style={{ animationDelay: "90ms" }}
                >
                  Makai poha,
                  <br />
                  milled in Dahod
                </h1>
                <p
                  className="animate-label-in mt-6 max-w-measure text-lg leading-relaxed text-ink/85"
                  style={{ animationDelay: "180ms" }}
                >
                  Maize comes in off the fields around Dahod. It is boiled,
                  rolled flat, dried in air and packed into printed sacks under
                  four labels, at the same grade season after season.
                </p>
                <div
                  className="animate-label-in mt-9 flex flex-wrap gap-3"
                  style={{ animationDelay: "270ms" }}
                >
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2.5 border-2 border-ink bg-vermilion px-6 py-3.5 font-display text-base font-bold text-white shadow-print-sm transition-transform hover:-translate-y-0.5"
                  >
                    See the range
                    <FaArrowRight className="text-sm" aria-hidden />
                  </Link>
                  <a
                    href={waLink(quoteMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 border-2 border-ink bg-sack px-6 py-3.5 font-display text-base font-bold text-ink shadow-print-sm transition-transform hover:-translate-y-0.5"
                  >
                    <FaWhatsapp className="text-husk" aria-hidden />
                    Ask for a quote
                  </a>
                </div>
              </div>
            </div>

            <div className="relative order-1 min-h-[46vh] lg:order-2 lg:min-h-[78vh]">
              <Image
                src={photos.hero.src}
                alt={photos.hero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* The hard facts, in ruled cells rather than a run-on line. */}
        <section className="on-dark border-b-4 border-ink bg-indigo">
          <dl className="mx-auto grid max-w-[1200px] grid-cols-1 gap-px bg-sack/25 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.k} className="bg-indigo px-5 py-5 lg:px-8">
                <dt className="font-display text-xs font-bold text-maize">{f.k}</dt>
                <dd className="tabular mt-1 font-display text-lg font-semibold text-sack">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Range */}
        <section className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3rem)]">The poha labels</h2>
              <p className="mt-3 max-w-measure text-lg text-ink-soft">
                Four brands out of one mill. Same maize, same rollers, different
                sack.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-b-2 border-vermilion pb-1 font-display text-base font-bold text-vermilion transition-colors hover:border-ink hover:text-ink"
            >
              All products, including feed
              <FaArrowRight className="text-xs" aria-hidden />
            </Link>
          </div>

          <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {products
              .filter((p) => p.kind === "poha")
              .map((p) => (
                <li
                  key={p.brand}
                  className="border-2 border-ink bg-white transition-transform hover:-translate-y-1 hover:shadow-print-sm"
                >
                  <div className="border-b-2 border-ink bg-white">
                    <Image
                      src={p.image}
                      alt={p.brand + " " + p.line + " sack"}
                      width={640}
                      height={560}
                      className="h-64 w-full object-contain p-3"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-extrabold">{p.brand}</h3>
                    <p className="mt-0.5 font-display text-sm font-semibold text-vermilion">
                      {p.line}
                      <span className="gu ml-2 font-normal text-ink-soft">{p.gu}</span>
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                      {p.note}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </section>

        {/* The mill run: a real sequence, so it is numbered. */}
        <section className="on-dark border-y-4 border-ink bg-indigo-deep">
          <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8 lg:py-28">
            <h2 className="text-maize">Six steps, start to sack</h2>
            <p className="mt-3 max-w-measure text-lg text-sack/75">
              Nothing exotic happens here. What matters is that it happens the
              same way every time.
            </p>

            <ol className="mt-14 grid gap-px bg-sack/20 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((step, i) => (
                <li key={step.title} className="bg-indigo-deep p-7">
                  <div className="flex items-baseline gap-4">
                    <span className="tabular font-display text-4xl font-extrabold text-maize/45">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-xl font-extrabold text-sack">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-sack/75">
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What is printed on every bag */}
        <section className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="relative aspect-[5/4] border-2 border-ink">
              <Image
                src={photos.drying.src}
                alt={photos.drying.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-[clamp(2rem,4vw,3rem)]">
                Our commitment to quality
              </h2>
              <p className="mt-3 max-w-measure text-lg text-ink-soft">
                The same checks run on every batch.
              </p>
              <ul className="mt-9 divide-y-2 divide-ink/15 border-y-2 border-ink">
                {quality.map((q) => (
                  <li
                    key={q}
                    className="flex gap-4 py-5 text-lg leading-relaxed text-ink"
                  >
                    <span
                      className="mt-2.5 h-2.5 w-2.5 shrink-0 bg-vermilion"
                      aria-hidden
                    />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Buyers, kept quiet */}
        <section className="border-y-2 border-ink bg-sack-shade">
          <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)]">
              From the people who order it
            </h2>
            <ul className="mt-10 grid gap-10 md:grid-cols-3">
              {testimonials.map((t) => (
                <li key={t.name} className="border-t-2 border-ink pt-6">
                  <p className="text-lg italic leading-relaxed text-ink">{t.text}</p>
                  <p className="mt-4 font-display text-sm font-bold not-italic text-ink-soft">
                    {t.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Close */}
        <section className="border-b-4 border-ink bg-maize">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8 px-5 py-16 lg:px-8">
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)]">
                Tell us the grade and the quantity
              </h2>
              <p className="mt-3 max-w-measure text-lg text-ink/80">
                Most orders start as a WhatsApp message. We will come back with a
                price and a packing date.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={waLink(quoteMessage)}
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
