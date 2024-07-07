'use client'
import React from 'react';
import { Parallax } from 'react-parallax';

const Volun = () => {
  return (
    <Parallax
      bgImage="/img/volunteer.jpg"
      bgImageAlt="Volunteer Background"
      strength={200}
      className="w-full md:h-[50rem] h-[60rem] h-96"
    >
      <div className="bg-opacity-50 bg-black py-12">
        <div className="container mx-auto sm:mt-[20%]">
          <div className="text-white">
            <div className="mb-6">
              <p className="text-xl font-semibold">Become A Volunteer</p>
              <h2 className="text-3xl lg:text-4xl font-bold">Let’s make a difference in the lives of others</h2>
            </div>
            <p>
              Join us in our mission to make a meaningful difference in the lives of individuals within the underserved community.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Volun;
