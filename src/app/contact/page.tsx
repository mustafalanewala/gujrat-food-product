"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col custom-bg">
      <Header />

      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-center text-amber-900 mb-12"
        >
          Get in Touch With Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-amber-900">Our Location</h2>
            <div className="w-full h-0 pb-[56.25%] relative rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.0543566066515!2d74.27503814716208!3d22.868425196735355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39611d8e7418d57b%3A0xfb2faeb0c45641a1!2sGujarat%20Food%20Products!5e0!3m2!1sen!2sin!4v1743864915642!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-amber-900">Send Us a Message</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-base sm:text-lg text-black mb-2">
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
                <label htmlFor="email" className="block text-base sm:text-lg text-black mb-2">
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
                <label htmlFor="message" className="block text-base sm:text-lg text-black mb-2">
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
