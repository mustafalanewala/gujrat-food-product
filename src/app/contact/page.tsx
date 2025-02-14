"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col custom-bg">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-center text-amber-900 mb-12"
        >
          Get in Touch With Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map on the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-6 text-amber-900">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59198.43149626054!2d74.19824725!3d22.83439555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3960357a2b4f2e2d%3A0x8f5e7e5c9a3b7d0e!2sDahod%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1625641111111!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Form on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-6 text-amber-900">Send Us a Message</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white text-lg py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
