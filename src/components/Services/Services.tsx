import React from "react";
import {
  GiAppleCore,
  GiBrain,
  GiHealthNormal,
  GiSchoolBag,
  GiHomeGarage,
  GiHeartBattery,
} from "react-icons/gi";
import SectionHeader from "@/components/Section/SectionHeader";

const servicesData = [
  {
    icon: <GiAppleCore />,
    title: "Feeding Program",
    text: "We provide nutritious meals to those in need, ensuring a healthier community.",
  },
  {
    icon: <GiBrain />,
    title: "Sex Education",
    text: "A comprehensive sex education program to empower with knowledge about their sexual and reproductive health.",
  },
  {
    icon: <GiHealthNormal />,
    title: "Healthcare",
    text: "Our healthcare services offer medical support for those who cannot afford it.",
  },
  {
    icon: <GiSchoolBag />,
    title: "Primary Education",
    text: "Quality education for underprivileged kids is our goal, fostering brighter futures.",
  },
  {
    icon: <GiHomeGarage />,
    title: "Residence Facilities",
    text: "Temporary shelter for the homeless, providing a stepping stone to stability.",
  },
  {
    icon: <GiHeartBattery />,
    title: "Social Care",
    text: "We offer emotional support and outreach, building a strong community network.",
  },
];

const Service = () => {
  return (
    <div className="service py-20">
      <div className="container mx-auto">
        <SectionHeader
          title={"What We Do?"}
          text={"We believe that we can save more lives with you"}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative w-full flex justify-between items-center mb-45px transition duration-300 bg-white shadow-md p-8 xl:p-6 lg:p-4 rounded-lg"
            >
              <div className="relative w-[60px] text-blue-600 pr-8">
                <div className=" text-blue-600 text-3xl md:text-4xl leading-60px mt-5">
                  {service.icon}
                </div>
              </div>
              <div className="relative pl-8">
                <h3 className="font-bold mb-2 text-xl md:text-2xl">{service.title}</h3>
                <p className="">{service.text}</p>
                <div className="absolute left-0 top-0 h-full border-l border-yellow-300"></div>
                <div className="absolute left-0 top-1/2 h-8 w-1 bg-blue-500 transform -translate-y-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
