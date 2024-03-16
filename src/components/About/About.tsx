'use client'
import React, { useState } from "react";
import { Parallax } from "react-parallax";
import AboutImage from "@/assets/img/about.jpg";

const tabData = [
  {
    id: "tab-content-1",
    title: "About",
    content:
      "We are an organization that aims to address the rising cases of child abuse, high rates of school dropout especially among girls at the primary level of education, limited access to sexual and reproductive health and rights for adolescents, orphans and vulnerable children in the community and tackle high rates of unemployment among youth, and violations of women's rights.",
  },
  {
    id: "tab-content-2",
    title: "Mission",
    content:
      "Aiming for an equitable society: equal opportunities in education, jobs, and gender. Our focus is holistic well-being, rights protection, and growth through programs.",
  },
  {
    id: "tab-content-3",
    title: "Vision",
    content:
      "We are an organization that aims to address the rising cases of child abuse, high rates of school dropout, especially among girls at the primary level of education, limited access to sexual and reproductive health and rights for adolescents, limited access to orphans and vulnerable children in the community, high rates of unemployment among youth, and violations of women rights.",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <div className="mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <Parallax
              bgImage={AboutImage.src}
              bgImageAlt="About Image"
              className="rounded-lg"
              strength={200}
            >
              <div className="w-full h-[450px]"></div>
            </Parallax>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="mb-5 section-header">
              <p className="relative mb-5 text-xl lg:text-3xl font-semibold text-blue-600">
                Learn About Us
              </p>
              <h2 className="relative text-2xl lg:text-4xl font-semibold text-gray-600">
                Community Protection, Education and Empowerment
              </h2>
            </div>
            <div className="w-full mt-6 lg:mt-0">
              <ul className="flex flex-wrap justify-between mb-2">
                {tabData.map((tab) => (
                  <li className="m-auto" key={tab.id}>
                    <button
                      className={`text-gray-800 font-semibold px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none relative ${
                        tab.id === activeTab ? "text-yellow-400" : ""
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.title}
                      {tab.id === activeTab && (
                        <span className="absolute mt-2 bottom-0 left-1/2 transform -translate-x-1/2 w-[200%] h-1 bg-yellow-400"></span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="py-15 bg-transparent mt-4">
                {tabData.map((tab) => (
                  <div
                    key={tab.id}
                    id={tab.id}
                    className={`${
                      tab.id === activeTab ? "active" : "hidden"
                    }`}
                  >
                    {tab.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
