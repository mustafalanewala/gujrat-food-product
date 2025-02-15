"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { FaLeaf, FaIndustry, FaCheckCircle, FaAward, FaStar, FaHandHoldingHeart } from "react-icons/fa"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col custom-bg">
      <Header />
      <main className="flex-grow container mx-auto mt-12">
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"
            alt="Gujrat Food Products Factory"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">About Gujrat Food Products</h1>
          </div>
        </motion.div> */}

        {/* Company Info */}
        <h1 className="text-4xl font-bold text-amber-900 text-center px-6">About Gujrat Food Products</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center my-12 px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/about.jpg"
              alt="Dahod Factory"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-amber-900">Our Story</h2>
            <p className="text-lg mb-4 text-amber-800">
              Gujrat Food Products has been a pioneer in producing high-quality Makai Poha since its inception. Our
              state-of-the-art factory in Dahod, Gujarat, combines traditional wisdom with modern technology to bring
              you the finest corn products.
            </p>
            <p className="text-lg text-amber-800">
              We take pride in our commitment to quality, sustainability, and customer satisfaction. Our Makai Poha is
              not just a product; its a testament to our dedication to preserving the authentic taste of Gujarat.
            </p>
          </motion.div>
        </div>

        {/* Production Process */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl font-bold text-center text-amber-900 mb-8 px-6"
        >
          Our Production Process
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12  px-6">
          {[
            { icon: FaLeaf, title: "Scientifically Grown Corn", description: "We start with the finest, naturally grown corn." },
            { icon: FaIndustry, title: "Perfect Temperature Boiling", description: "Our corn is boiled at the perfect temperature to retain nutrients." },
            { icon: FaCheckCircle, title: "Precision Flattening", description: "The boiled corn is flattened with utmost precision." },
            { icon: FaAward, title: "Natural Drying", description: "We dry our Makai Poha naturally to preserve its authentic taste." },
            { icon: FaStar, title: "Quality Inspection", description: "Every batch undergoes rigorous quality checks before packaging." },
            { icon: FaHandHoldingHeart, title: "Customer Satisfaction", description: "We deliver products with care and excellence." }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-orange-400 p-6 rounded-lg shadow-md text-center"
            >
              <step.icon className="text-4xl text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-white">{step.description}</p>
            </motion.div>
          ))}
        </div>



        {/* Gallery Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="text-3xl font-bold text-center text-amber-900 my-8"
        >
          Our Factory & Production
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-6">
          {[
            "https://www.abhayboilers.com/images/makka-poha-plant-in-india.webp",
            "https://www.shutterstock.com/image-photo/makka-poha-maize-makai-corn-600nw-2341582071.jpg",
            "https://5.imimg.com/data5/ANDROID/Default/2020/11/PA/MB/OB/3006434/product-jpeg-500x500.jpg",
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <Image src={src} alt={`Gallery Image ${index + 1}`} width={400} height={300} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="bg-orange-200 p-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-amber-900">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-amber-800 text-lg">
            <li>100% Natural Ingredients</li>
            <li>Blend of Traditional and Modern Techniques</li>
            <li>No Artificial Additives</li>
            <li>Committed to Quality and Customer Satisfaction</li>
            <li>Ethical and Sustainable Practices</li>
          </ul>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
