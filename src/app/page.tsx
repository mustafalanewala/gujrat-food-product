"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaQuoteLeft } from "react-icons/fa";

const products = [
  {
    name: "Yellow Diamond Makai Poha",
    image: "/4.png",
    description: "Premium quality yellow corn flakes",
  },
  {
    name: "20-20 Makai Poha",
    image: "/1.png",
    description: "Perfect balance of taste and nutrition",
  },
  {
    name: "Rajdeep Makai Poha",
    image: "/2.png",
    description: "Traditional flavor in every bite",
  },
  {
    name: "Indian Gold Makai Poha",
    image: "/3.png",
    description: "Delicious and healthy corn flakes",
  }
];

const testimonials = [
  {
    name: "Amit Sharma",
    text: "The best Makai Poha I have ever tasted! The texture and flavor are simply amazing.",
  },
  {
    name: "Priya Verma",
    text: "Absolutely love the quality of these products. Highly recommended!",
  },
  {
    name: "Rahul Mehta",
    text: "Fresh, natural, and delicious! A staple in our kitchen now.",
  },
];

export default function Home() {
  const productSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="flex flex-col custom-bg">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <Image
            src="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?cs=srgb&dl=pexels-pixabay-247763.jpg&fm=jpg"
            alt="Fresh Makai Poha grains"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                Discover the Authentic Taste of Makai Poha
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8"
              >
                Naturally Grown, Perfectly Processed, Purely Delicious
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/about" className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 transition">Explore More</Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Section with Carousel */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Our Featured Products</h2>
            <Slider {...productSettings} className="mx-auto w-full max-w-6xl">
              {products.map((product, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6">
                    <Image src={product.image} alt={product.name} width={900} height={400} className="w-full h-[350px] object-cover rounded" />
                    <h3 className="text-xl font-semibold text-amber-900 mt-4">{product.name}</h3>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="flex justify-center mt-12">
              <Link href="/products" className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 transition">Explore All Products</Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-orange-200">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <FaQuoteLeft className="text-green-600 text-3xl mb-4" />
                  <p className="text-amber-900 italic">{testimonial.text}</p>
                  <p className="mt-4 text-right font-semibold text-black">- {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}