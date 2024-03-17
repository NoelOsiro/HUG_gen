"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    text: "Be the change that you want to see.Join hands and empower communities through youth leadership and social impact.",
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
      setCurrentItem((prevItem) => (prevItem + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative py-32 lg:py-36 bg-white w-full">
      <div className="mx-auto  container px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
        </div>
        <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1
            className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900"
          >
            {items[currentItem].title}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
              {items[currentItem].title2}
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-700">{items[currentItem].text}</p>
          <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
            <a className = "flex justify-center items-center w-full sm:w-max px-5 py-3  outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]" href="/donate">
            <span className="relative z-10 text-white font-bold">
                        Donate Now
                    </span>
                  </a>
                  <a className = "flex justify-center items-center w-full sm:w-max px-5 py-3  outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]" href="/donate">
            <span className="relative z-10 text-white font-bold">
                        Watch video
                    </span>
                  </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <Image
            src={items[currentItem].imageUrl}
            alt="Hero image"
            width={720}
            height={720}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
