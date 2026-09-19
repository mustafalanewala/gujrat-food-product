import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { FaArrowRight } from "react-icons/fa"
import { site, process, photos } from "../../lib/site"

export const metadata: Metadata = {
  title: "The mill",
  description:
    "Gujarat Food Products runs a maize mill on the Mega GIDC estate at Kharedi, Dahod, packing makai poha and makai bhardo.",
}

const stages = [
  {
    photo: photos.graded,
    caption: "Maize from growers around Dahod, graded as it arrives.",
  },
  {
    photo: photos.drying,
    caption: "Air-dried after flattening, not forced dry.",
  },
  {
    photo: photos.kernels,
    caption: "Clean grain is what the whole run depends on.",
  },
]

const commitments = [
  "Maize and nothing else. No artificial additives go into the poha.",
  "One grade per label, held steady across seasons.",
  "Every batch checked for colour, moisture and foreign matter.",
  "Packed in hygienic conditions, ready to ship.",
]

export default function About() {
  return (
    <>
      <Header />

      <main id="main">
        <section className="border-b-4 border-ink bg-maize">
          <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8 lg:py-20">
            <p className="gu text-lg text-vermilion-deep">ગુજરાત ફૂડ પ્રોડક્ટ્સ</p>
            <h1 className="mt-2 text-[clamp(2.4rem,5.5vw,4rem)]">
              The mill at Kharedi
            </h1>
            <p className="mt-5 max-w-measure text-lg leading-relaxed text-ink/85">
              Plot 358 and 359 on the Mega GIDC estate, Dahod. Maize goes in one
              end and printed sacks come out the other.
            </p>
          </div>
        </section>

        {/* The actual gate. Worth more than any stock factory photo. */}
        <figure className="border-b-4 border-ink">
          <div className="relative aspect-[16/7] w-full">
            <Image
              src="/about.jpg"
              alt="The painted metal gate of the Gujarat Food Products works in Dahod"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="bg-ink px-5 py-3 text-sm text-sack/75 lg:px-8">
            The works gate on the Mega GIDC estate, Kharedi, Dahod.
          </figcaption>
        </figure>

        {/* Story */}
        <section className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3rem)]">
                A commodity business, run carefully
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  Makai poha is not a complicated product. Maize is boiled until
                  it gives, rolled flat, dried and bagged. What separates one
                  mill from another is whether the flake that leaves in March is
                  the same as the one that left in October.
                </p>
                <p>
                  That is the whole job here. The rollers are set to a fixed
                  thickness, the drying is done in air rather than forced, and
                  every batch is looked at before it moves. Buyers who order the
                  same label twice get the same thing twice.
                </p>
                <p>
                  Alongside the four poha labels, the mill packs Gujarat King
                  makai bhardo, a coarser grind sold as cattle feed.
                </p>
              </div>
              <Link
                href="/products"
                className="mt-8 inline-flex items-center gap-2 border-b-2 border-vermilion pb-1 font-display text-base font-bold text-vermilion transition-colors hover:border-ink hover:text-ink"
              >
                See what we pack
                <FaArrowRight className="text-xs" aria-hidden />
              </Link>
            </div>

            <div className="relative aspect-[4/5] border-2 border-ink">
              <Image
                src={photos.harvest.src}
                alt={photos.harvest.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* The run, in full */}
        <section className="on-dark border-y-4 border-ink bg-indigo-deep">
          <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8 lg:py-28">
            <h2 className="text-maize">How a batch moves</h2>
            <ol className="mt-12 divide-y divide-sack/20 border-y border-sack/20">
              {process.map((step, i) => (
                <li
                  key={step.title}
                  className="grid gap-3 py-7 sm:grid-cols-[4rem_10rem_1fr] sm:items-baseline sm:gap-6"
                >
                  <span className="tabular font-display text-3xl font-extrabold text-maize/45">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-sack">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-sack/75">
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Stage photography */}
        <section className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
          <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)]">The raw material</h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {stages.map((s) => (
              <li key={s.photo.src}>
                <figure>
                  <div className="relative aspect-[4/3] border-2 border-ink">
                    <Image
                      src={s.photo.src}
                      alt={s.photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {s.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        {/* Commitments */}
        <section className="border-y-2 border-ink bg-sack-shade">
          <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr]">
              <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)]">
                What we hold ourselves to
              </h2>
              <ul className="divide-y-2 divide-ink/15 border-y-2 border-ink">
                {commitments.map((c) => (
                  <li
                    key={c}
                    className="flex gap-4 py-5 text-lg leading-relaxed text-ink"
                  >
                    <span
                      className="mt-2.5 h-2.5 w-2.5 shrink-0 bg-vermilion"
                      aria-hidden
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b-4 border-ink bg-maize">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-5 py-14 lg:px-8">
            <div>
              <p className="font-display text-xs font-bold text-ink/60">Works</p>
              <p className="mt-1 font-display text-lg font-semibold text-ink">
                {site.address.line1}, {site.address.line2}
              </p>
            </div>
            <a
              href={site.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-2 border-ink bg-sack px-6 py-3.5 font-display text-base font-bold text-ink shadow-print-sm transition-transform hover:-translate-y-0.5"
            >
              Open in Google Maps
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
