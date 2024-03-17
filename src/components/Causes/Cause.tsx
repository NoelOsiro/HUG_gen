import React from "react";
import Image from "next/image";
import { Carousel, Progress } from "flowbite-react";
import Cause1 from "@/assets/img/causes-1.jpg";
import Cause2 from "@/assets/img/causes-2.jpg";
import Cause3 from "@/assets/img/causes-3.jpg";
import Cause4 from "@/assets/img/causes-4.jpg";
import Cause5 from "@/assets/img/causes-5.jpg";
import Cause6 from "@/assets/img/causes-6.jpg";
import Cause7 from "@/assets/img/causes-7.jpg";
import SectionHeader from "../Section/SectionHeader";

const causesData = [
  {
    image: Cause1.src,
    progress: 15,
    raised: 4000,
    goal: 60000,
    title: "Feeding Program",
    description:
      "Support our mission to provide nutritious meals to those in need, ensuring a healthier community.",
  },
  {
    image: Cause5.src,
    progress: 0,
    raised: 0,
    goal: 150000,
    title: "Sustainable Living",
    description:
      "Promote sustainable practices for a greener future through conscious choices in daily life.",
  },
  {
    image: Cause6.src,
    progress: 5,
    raised: 5000,
    goal: 100000,
    title: "Quality Education",
    description:
      "Empower underprivileged kids with quality primary education through partnerships with local libraries.",
  },
  {
    image: Cause4.src,
    progress: 4,
    raised: 4000,
    goal: 100000,
    title: "Accessible Healthcare",
    description:
      "Provide essential healthcare services to those without proper medical care, improving overall well-being.",
  },
  {
    image: Cause3.src,
    progress: 10,
    raised: 10000,
    goal: 100000,
    title: "Reproductive Health",
    description:
      "Empower individuals with knowledge about sexual and reproductive health for informed decisions.",
  },
  {
    image: Cause7.src,
    progress: 0,
    raised: 0,
    goal: 100000,
    title: "Jigger Eradication",
    description:
      "Join our campaign against jiggers, providing care, education, and prevention to impacted communities.",
  },
  // Add more items...
];

const Cause = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-white w-full">
      <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <SectionHeader
          title="Popular Causes"
          text="Let us know about charity causes around the world"
        />
        <div className="relative flex items-center overflow-x-scroll lg:overflow-x-hidden">
          <div className="w-full grid grid-cols-2 gap-4 h-screen">
            <Carousel
              slideInterval={5000}
              indicators={false}
              leftControl=" "
              rightControl=" "
            >
              {causesData.slice(0, 3).map((cause, index) => (
                <div key={index} className="p-4">
                  <div className="rounded-lg">
                    <Image
                      src={cause.image}
                      alt={`pic${index + 1}`}
                      className="rounded-lg"
                      width={800}
                      height={800}
                    />
                  </div>
                  <div className="p-2">
                    <p className="mb-4">
                      <strong>Progress:</strong>
                    </p>
                    <Progress progress={cause.progress} color="blue" />
                    <div className=" flex items-center justify-between">
                      <p>
                        <strong>Raised:</strong> Ksh {cause.raised}
                      </p>
                      <p>
                        <strong>Goal:</strong> Ksh {cause.goal}
                      </p>
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="font-bold">{cause.title}</h3>
                    <p>{cause.description}</p>
                  </div>
                  <div className="flex justify-center gap-4 items-center mt-4">
                    <a
                      className="flex justify-center items-center w-full sm:w-max px-5 py-3  outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]"
                      href="/donate"
                    >
                      <span className="relative z-10 text-white font-bold">
                        Donate
                      </span>
                    </a>
                    <a
                      className="flex justify-center items-center w-full sm:w-max px-5 py-3  outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]"
                      href="/donate"
                    >
                      <span className="relative z-10 text-white font-bold">
                        Volunteer
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
            <Carousel
              slideInterval={5000}
              indicators={false}
              leftControl=" "
              rightControl=" "
            >
              {causesData.slice(3).map((cause, index) => (
                <div key={index} className="p-4">
                  <div className="rounded-lg">
                    <Image
                      src={cause.image}
                      alt={`pic${index + 1}`}
                      className="rounded-lg"
                      width={800}
                      height={800}
                    />
                  </div>
                  <div className="p-2">
                    <p className="mb-4">
                      <strong>Progress:</strong>
                    </p>
                    <Progress progress={cause.progress} color="blue" />
                    <div className=" flex items-center justify-between">
                      <p>
                        <strong>Raised:</strong> Ksh {cause.raised}
                      </p>
                      <p>
                        <strong>Goal:</strong> Ksh {cause.goal}
                      </p>
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="font-bold">{cause.title}</h3>
                    <p>{cause.description}</p>
                  </div>
                  <div className="flex justify-center gap-4 items-center mt-4">
                    <a
                      className="flex justify-center items-center w-full sm:w-max px-5 py-3  outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]"
                      href="/donate"
                    >
                      <span className="relative z-10 text-white font-bold">
                        Donate
                      </span>
                    </a>
                    <a
                      className="flex justify-center items-center w-full sm:w-max px-5 py-3  outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]"
                      href="/donate"
                    >
                      <span className="relative z-10 text-white font-bold">
                        Volunteer
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cause;
