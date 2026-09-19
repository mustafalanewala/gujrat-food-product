"use client"

import { useState } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { site, waLink, products } from "../../lib/site"

const labels = Array.from(
  new Set(products.map((p) => p.brand + " " + p.line))
)

export default function Contact() {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [product, setProduct] = useState(labels[0])
  const [quantity, setQuantity] = useState("")
  const [message, setMessage] = useState("")

  const composed = [
    "Hello " + site.name + ",",
    "",
    "Name: " + (name || "-"),
    company ? "Company: " + company : null,
    "Product: " + product,
    quantity ? "Quantity: " + quantity : null,
    message ? "" : null,
    message || null,
  ]
    .filter((line) => line !== null)
    .join("\n")

  function openWhatsApp(e: React.FormEvent) {
    e.preventDefault()
    window.open(waLink(composed), "_blank", "noopener,noreferrer")
  }

  const field =
    "w-full border-2 border-ink bg-white px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-0"
  const label = "block font-display text-sm font-bold text-ink"

  return (
    <>
      <Header />

      <main id="main">
        <section className="border-b-4 border-ink bg-maize">
          <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8 lg:py-20">
            <p className="gu text-lg text-vermilion-deep">સંપર્ક કરો</p>
            <h1 className="mt-2 text-[clamp(2.4rem,5.5vw,4rem)]">Talk to the mill</h1>
            <p className="mt-5 max-w-measure text-lg leading-relaxed text-ink/85">
              WhatsApp is the quickest way to reach us. Phone and email work too,
              and the works is open to visit.
            </p>
          </div>
        </section>

        {/* Direct routes first: most people want the number, not a form. */}
        <section className="border-b-2 border-ink">
          <ul className="mx-auto grid max-w-[1200px] gap-px bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FaWhatsapp,
                title: "WhatsApp",
                value: site.phone,
                href: waLink(),
                external: true,
              },
              {
                icon: FaPhoneAlt,
                title: "Phone",
                value: site.phone,
                href: site.phoneHref,
                external: false,
              },
              {
                icon: FaEnvelope,
                title: "Email",
                value: site.email,
                href: "mailto:" + site.email,
                external: false,
              },
              {
                icon: FaMapMarkerAlt,
                title: "Works",
                value: site.address.line2,
                href: site.address.mapUrl,
                external: true,
              },
            ].map((c) => (
              <li key={c.title} className="bg-sack">
                <a
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex h-full flex-col gap-2 px-5 py-6 transition-colors hover:bg-sack-shade lg:px-8"
                >
                  <c.icon className="text-xl text-vermilion" aria-hidden />
                  <span className="font-display text-sm font-bold text-ink-soft">
                    {c.title}
                  </span>
                  <span className="font-display text-base font-semibold text-ink">
                    {c.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Enquiry */}
            <div>
              <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)]">Ask for a price</h2>
              <p className="mt-3 max-w-measure text-lg text-ink-soft">
                Fill this in and it opens WhatsApp with your details already
                written out. Nothing is sent until you press send there.
              </p>

              <form onSubmit={openWhatsApp} className="mt-9 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={label}>
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={field + " mt-2"}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={label}>
                      Business{" "}
                      <span className="font-normal text-ink-soft">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className={field + " mt-2"}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="product" className={label}>
                      Product
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      className={field + " mt-2"}
                    >
                      {labels.map((l) => (
                        <option key={l} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className={label}>
                      Quantity{" "}
                      <span className="font-normal text-ink-soft">(optional)</span>
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      placeholder="e.g. 50 bags"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className={field + " mt-2"}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={label}>
                    Anything else{" "}
                    <span className="font-normal text-ink-soft">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={field + " mt-2"}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2.5 border-2 border-ink bg-husk px-6 py-3.5 font-display text-base font-bold text-white shadow-print-sm transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  <FaWhatsapp aria-hidden />
                  Open WhatsApp with this message
                </button>

                <p className="text-[15px] text-ink-soft">
                  Prefer email?{" "}
                  <a
                    href={
                      "mailto:" +
                      site.email +
                      "?subject=" +
                      encodeURIComponent("Enquiry: " + product) +
                      "&body=" +
                      encodeURIComponent(composed)
                    }
                    className="links font-semibold text-vermilion"
                  >
                    Send it to {site.email}
                  </a>
                </p>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)]">Find the works</h2>
              <p className="mt-3 max-w-measure text-lg text-ink-soft">
                {site.address.line1}, {site.address.line2}.
              </p>
              <div className="mt-9 border-2 border-ink">
                <iframe
                  title="Map showing Gujarat Food Products in Dahod"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.0543566066515!2d74.27503814716208!3d22.868425196735355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39611d8e7418d57b%3A0xfb2faeb0c45641a1!2sGujarat%20Food%20Products!5e0!3m2!1sen!2sin!4v1743864915642!5m2!1sen!2sin"
                  className="block h-[420px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href={site.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 border-b-2 border-vermilion pb-1 font-display text-base font-bold text-vermilion transition-colors hover:border-ink hover:text-ink"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
