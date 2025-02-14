"use client"
import Link from "next/link"
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-makai-brown text-amber-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Gujrat Food Products</h3>
            <p className="mb-2">Bringing you the authentic taste of Makai Poha</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-2xl hover:text-makai-yellow transition duration-300">
                <FaWhatsapp />
              </a>
              <a href="#" className="text-2xl hover:text-makai-yellow transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-makai-yellow transition duration-300">
                <FaFacebook />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-makai-yellow transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-makai-yellow transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-makai-yellow transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Factory in Dahod, Gujarat, India
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" /> +91 1234567890
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" /> info@gujratfoodproducts.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-amber-900/30 text-center">
          <p>&copy; {new Date().getFullYear()} Gujrat Food Products. All rights reserved.</p>
          <p>Developed By Mustafa Lanewala</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
