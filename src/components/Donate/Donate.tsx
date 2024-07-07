"use client";
import React from "react";
import { Parallax } from "react-parallax";
import DonateImg from "@/assets/img/donate.jpg";
// Import the Parallax component

const Donate = () => {
  return (
    <Parallax
      bgImage={'/img/coins.jpg'}
      bgImageAlt="Donate Background"
      strength={-200}
      className="w-full md:h-[50rem] h-[60rem] h-96" // Adjust the parallax effect strength
    >
      <div className="container mx-auto sm:mt-[20%]">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-7/12">
            <div className="donate-content">
              <div className="p-4">
                <p className="text-3xl lg:text-4xl text-blue-600">Donate Now</p>
                <h2 className="text-xl lg:text-2xl font-bold">
                  Let us donate to needy people for better lives
                </h2>
              </div>
              <div className="text-lg text-white font-semibold p-4">
                <p>
                  Let us join hands and make a difference in the lives of those
                  less fortunate. By contributing to our cause, you can bring
                  positive change to underserved communities. Your donations
                  support vital initiatives, such as providing nutritious meals,
                  quality education, accessible healthcare, and more. Together,
                  we can create better lives and build a brighter future for
                  all.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 mt-8 lg:mt-0">
            <div className="p-4">
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-input w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-input w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <label className="btn text-white">
                      <input type="radio" name="options"/> Kes 200
                    </label>
                    <label className="btn text-white">
                      <input type="radio" name="options" /> Kes 500
                    </label>
                    <label className="btn text-white">
                      <input type="radio" name="options" /> Kes 1000
                    </label>
                  </div>
                </div>
                <a className = "flex justify-center items-center w-full sm:w-max px-5 py-3  outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]" href="/donate">
            <span className="relative z-10 text-white font-bold">
                        Donate Now
                    </span>
                  </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Donate;
