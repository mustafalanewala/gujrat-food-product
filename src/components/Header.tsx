"use client"

import { useState } from "react"
import Link from "next/link"
import { FaHome, FaBoxOpen, FaInfoCircle, FaEnvelope, FaBars, FaTimes, FaWhatsapp } from "react-icons/fa"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-white/30 backdrop-blur-lg sticky top-0 w-full z-50 shadow-lg text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-black">
            Gujrat Food Products
          </Link>
          <nav className="hidden md:flex flex-col items-end space-y-2">
            <Link href="https://wa.me/919909708678" className="flex items-center space-x-2 text-black font-medium hover:text-green-500">
              <FaWhatsapp className="text-green-500" size={24} />
              <span>+91 9909708678</span>
            </Link>
            <div className="flex space-x-8">
              <NavLink href="/" icon={<FaHome />} text="Home" />
              <NavLink href="/products" icon={<FaBoxOpen />} text="Products" />
              <NavLink href="/about" icon={<FaInfoCircle />} text="About Us" />
              <NavLink href="/contact" icon={<FaEnvelope />} text="Contact" />
            </div>
          </nav>
          <button className="md:hidden text-black" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white/30 backdrop-blur-lg py-4">
          <div className="container mx-auto px-4 space-y-4">
            <NavLink href="/" icon={<FaHome />} text="Home" mobile onClick={toggleMenu} />
            <NavLink href="/products" icon={<FaBoxOpen />} text="Products" mobile onClick={toggleMenu} />
            <NavLink href="/about" icon={<FaInfoCircle />} text="About Us" mobile onClick={toggleMenu} />
            <NavLink href="/contact" icon={<FaEnvelope />} text="Contact" mobile onClick={toggleMenu} />
            <Link href="https://wa.me/919909708678" className="flex items-center space-x-2 text-black font-medium hover:text-green-500">
              <FaWhatsapp className="text-green-500" size={20} />
              <span>+91 9909708678</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, icon, text, mobile = false, onClick = () => { } }: NavLinkProps) => (
  <Link
    href={href}
    className={`text-black hover:text-green-500 transition duration-300 flex items-center ${mobile ? "text-lg" : ""}`}
    onClick={onClick}
  >
    {icon}
    <span className={mobile ? "ml-2" : "ml-1"}>{text}</span>
  </Link>
)

export default Header;