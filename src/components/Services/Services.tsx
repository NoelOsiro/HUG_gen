"use client";
import React from "react";
import {
  GiAppleCore,
  GiBrain,
  GiHealthNormal,
  GiSchoolBag,
  GiHomeGarage,
  GiHeartBattery,
} from "react-icons/gi";
import { Section, SectionHeader } from "@/components/UI";

const servicesData = [
  {
    icon: <GiAppleCore />,
    title: "Nutrition Program",
    text: "Providing nutritious meals and food security initiatives to ensure healthy growth and development in our communities.",
  },
  {
    icon: <GiBrain />,
    title: "Health Education",
    text: "Comprehensive health and sexual education programs empowering youth with knowledge for informed decision-making.",
  },
  {
    icon: <GiHealthNormal />,
    title: "Community Healthcare",
    text: "Accessible healthcare services and medical support for underserved communities, promoting overall wellness.",
  },
  {
    icon: <GiSchoolBag />,
    title: "Education Support",
    text: "Quality education initiatives and scholarships for underprivileged children, building brighter futures through learning.",
  },
  {
    icon: <GiHomeGarage />,
    title: "Safe Housing",
    text: "Temporary shelter and housing assistance for vulnerable individuals, providing stability and security.",
  },
  {
    icon: <GiHeartBattery />,
    title: "Community Care",
    text: "Emotional support, counseling, and community outreach programs that strengthen social bonds and resilience.",
  },
];

const Service = () => {
  return (
    <Section className="bg-white dark:bg-blacksection transition-colors duration-300">
      <SectionHeader
        subtitle="Our Services"
        title="What We Do?"
        description="We believe that we can save more lives with you. Our comprehensive programs address the most critical needs in our communities."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="group relative bg-gray-50 dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-xl p-6 hover:border-primary/50 hover:shadow-solid-5 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icon Section */}
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-meta/10 rounded-xl mb-6 group-hover:from-primary/20 group-hover:to-meta/20 transition-all duration-300">
              <div className="text-primary text-3xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
            </div>
            
            {/* Content Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-waterloo leading-relaxed">
                {service.text}
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-meta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Service;
