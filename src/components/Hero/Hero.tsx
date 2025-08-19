"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Carousel1 from "@/assets/img/carousel-1.jpg";
import Carousel2 from "@/assets/img/carousel-2.jpg";
import Carousel3 from "@/assets/img/carousel-3.jpg";
import Carousel4 from "@/assets/img/carousel-4.jpg";
import Carousel5 from "@/assets/img/carousel-5.jpg";

const items = [
  {
    title: "Serving our ",
    title2: "Generation",
    text: "Cultivating compassion, inspiring change, and serving our generation with unwavering dedication. Join us in making a difference!",
    imageUrl: Carousel1,
  },
  {
    title: "Be the change that ",
    title2: "you want to see",
    text: "Be the change that you want to see. Join hands and empower communities through youth leadership and social impact.",
    imageUrl: Carousel2,
  },
  {
    title: "Inspiring Youth, ",
    title2: "Transforming Communities",
    text: "Inspire, empower, and transform. Let us partner as we harness the power of youth to create thriving communities and a brighter future.",
    imageUrl: Carousel5,
  },
  {
    title: "Building Bridges, ",
    title2: "Creating Impact",
    text: "Break down barriers and build bridges of understanding. Join HuG in creating a lasting impact and fostering stronger, more compassionate communities.",
    imageUrl: Carousel4,
  },
  {
    title: "Amplify ",
    title2: "children voices",
    text: "Empower their dreams, and witness the transformative impact. Stand with HuG and let our collective voice be heard.",
    imageUrl: Carousel3,
  },
];

const Hero: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % items.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-blacksection overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-meta/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-primary/30 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-36 h-36 bg-meta/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 mx-auto container px-5 sm:px-10 md:px-12 lg:px-5 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0">
          {/* Content Section */}
          <motion.div 
            className="flex flex-col items-center text-center lg:text-left lg:items-start space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                  {items[currentItem].title}
                  <br />
                  <span className="bg-gradient-to-r from-primary via-meta to-primary bg-clip-text text-transparent animate-pulse">
                    {items[currentItem].title2}
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 dark:text-waterloo leading-relaxed max-w-xl">
                  {items[currentItem].text}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md lg:max-w-none">
              <motion.a
                href="/donate"
                className="flex justify-center items-center px-8 py-4 bg-gradient-to-r from-primary to-primaryho text-white font-semibold rounded-full hover:shadow-solid-7 transition-all duration-300 hover:scale-105 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Contributing</span>
              </motion.a>
              <motion.a
                href="/about"
                className="flex justify-center items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>

            {/* Progress Indicators */}
            <div className="flex space-x-3 mt-8">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentItem(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentItem 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-300 dark:bg-strokedark hover:bg-primary/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg lg:max-w-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-meta/20 rounded-2xl blur-xl"></div>
                  <Image
                    src={items[currentItem].imageUrl}
                    alt={`${items[currentItem].title} ${items[currentItem].title2}`}
                    width={600}
                    height={700}
                    className="relative rounded-2xl object-cover shadow-solid-8 hover:shadow-solid-7 transition-all duration-500"
                    priority={currentItem === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500 dark:text-waterloo">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
