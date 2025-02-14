"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { FaStar, FaLeaf, FaPhoneAlt, FaCheckCircle } from "react-icons/fa"

const products = [
  {
    name: "Yellow Diamond Makai Poha",
    image: "/yellodiamondmakai.jpg",
    description: "Premium quality yellow corn flakes",
    icon: FaStar
  },
  {
    name: "20-20 Makai Poha",
    image: "/2020makai.jpg",
    description: "Perfect balance of taste and nutrition",
    icon: FaStar
  },
  {
    name: "Rajdeep Makai Poha",
    image: "/rajdeepmakai.jpg",
    description: "Traditional flavor in every bite",
    icon: FaStar
  },
  {
    name: "Indian Gold Makai Poha",
    image: "/indiagoldmakai.jpg",
    description: "Delicious and healthy",
    icon: FaStar
  },
  {
    name: "Gujrat King Makai Bhardo",
    image: "/gkbhardo1.jpg",
    description: "Nutritious and wholesome feed for cows",
    icon: FaLeaf
  },
  {
    name: "Gujrat King Makai Bhardo",
    image: "/gkbhardo2.jpg",
    description: "Nutritious and wholesome feed for cows",
    icon: FaLeaf
  }
]

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col custom-bg">
      <Header />
      <main className="flex-grow container mx-auto mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-amber-900 mb-8"
        >
          Our Products
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24 px-6 py-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-[450px] object-fit"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-amber-900 flex items-center">
                  <product.icon className="mr-2 text-makai-yellow" />
                  {product.name}
                </h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-center mb-4">
                  <FaLeaf className="text-green-600 mr-2" />
                  <span className="text-sm text-green-600">100% Natural</span>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg flex items-center justify-center hover:bg-green-700 transition duration-300">
                  <FaPhoneAlt className="mr-2" /> Contact Us
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-orange-200 p-8 text-amber-900"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaCheckCircle className="text-green-600 mr-2" /> Our Commitment to Quality
          </h2>
          <p className="text-lg mb-4">
            At Gujrat Food Products, we are committed to delivering the highest quality Makai Poha and cow feed
            products. Our rigorous quality control processes ensure that every package meets our strict standards.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Sourced from the finest corn</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Processed using state-of-the-art technology</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Packed in hygienic conditions</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Regular quality checks at every stage</li>
          </ul>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}