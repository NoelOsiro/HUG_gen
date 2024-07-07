"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CounterUp from "./CounterUp";
import { Parallax } from "react-parallax";
import FactsImage from "@/assets/img/facts.jpg";
import { FiHome, FiHeart, FiStar, FiDollarSign } from "react-icons/fi";

const factsData = [
  { icon: FiHome , count: "150", text: "Children" },
  { icon: FiHeart , count: "22", text: "Volunteers" },
  { icon: FiStar , count: "1000", text: "Our Goal" },
  { icon: FiDollarSign , count: "5000", text: "Raised" },
];

const Facts = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  const [countersDisplayed, setCountersDisplayed] = useState(false);

  useEffect(() => {
    if (inView && !countersDisplayed) {
      setCountersDisplayed(true);
    }
  }, [inView, countersDisplayed]);

  return (
    <Parallax
      bgImage={FactsImage.src}
      bgImageAlt="Facts Background"
      strength={200}
      className="w-full"
    >
      <div className="relative w-full min-h-[400px] my-12 flex items-center bg-opacity-50 bg-black py-8 md:py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {factsData.map((fact, index) => (
              <div
                key={index}
                className="facts-item flex items-center justify-center p-6 sm:backdrop-blur-md"
              >
                <fact.icon className='text-4xl text-blue-600 mr-4'/>
                <div className="facts-text">
                  <h3
                    className="text-2xl font-bold mb-2"
                    data-toggle="counter-up"
                    ref={inViewRef}
                  >
                    {countersDisplayed ? (
                      <CounterUp
                        start={0}
                        end={parseInt(fact.count)}
                        delay={10}
                        duration={2000}
                      
                   /> ) : (
                      fact.count
                    )}
                  </h3>
                  <p className="text-white text-xl">{fact.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Facts;
