import React from "react";
import SectionHeader from "@/components/Section/SectionHeader";
import { Carousel } from "flowbite-react";
import { FcCalendar, FcClock, FcEditImage } from "react-icons/fc";
import Image from "next/image";
import Event1 from "@/assets/img/event-1.jpg";
import Event2 from "@/assets/img/event-2.jpg";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { EVENTS_QUERYResult } from "../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";

const eventData = [
  {
    image: Event2,
    date: "11-Apr-23",
    time: "10:00 - 18:00",
    location: "Fisherman Village, Malindi",
    title: "Tree Plantation Drive",
    description:
      "Join us in making our planet greener by participating in our tree plantation drive. Your efforts will contribute to a sustainable and healthy environment.",
    link: "/volunteer",
  },
  // Add more events...
];

const Event = async () => {
  const events = await sanityFetch<EVENTS_QUERYResult>({
    query: EVENTS_QUERY,
  });
  return (
    <section className="relative py-18 lg:py-24 bg-white w-full">
      <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <SectionHeader
          title={"Upcoming Events"}
          text={"Be ready for our upcoming charity events"}
        />
        <div className="relative flex items-center overflow-x-scroll lg:overflow-x-hidden">
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 sm:gap-4 gap-24 h-screen">
            <Carousel
              slideInterval={5000}
              indicators={false}
              leftControl=" "
              rightControl=" "
            >
              {events.slice(0,2).map((event, index) => (
                <div className="p-4 mb-4" key={index}>
                  <div className="rounded-lg overflow-hidden">
                  {event.image && event.image.asset && (
                    <Image
                      src={urlFor(event.image).url()}
                      alt={`Event ${index + 1}`}
                      width={500}
                      height={500}
                      className="object-cover w-full h-96 relative"
                    />)
                    }
                    <div className="p-4">
                      <div className="flex items-center justify-center mb-4">
                        <FcCalendar className="text-blue-600 mr-2" size={32} />
                        <p className="text-gray-600 text-lg font-medium">
                          {event.date} <br/> {event.time}
                        </p>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <FcEditImage className="text-blue-600 mr-2" size={32}/>
                        <p className="text-gray-600 text-sm font-medium">
                          {event.location}
                        </p>
                      </div>
                      <div className="event-text">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-700">{event.description}</p>
                        {event.link && (
                          <a
                          href={event.link}
                          className="btn btn-custom inline-block mt-4"
                        >
                          Join Now
                        </a>)}
                        
                      </div>
                    </div>
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
              {events.slice(2).map((event, index) => (
                <div className="p-4 mb-4" key={index}>
                  <div className="rounded-lg overflow-hidden">
                  {event.image && event.image.asset && (
                    <Image
                      src={urlFor(event.image).url()}
                      alt={`Event ${index + 1}`}
                      className="object-cover w-full h-96 relative"
                    />)
                    }
                    <div className="p-4">
                      <div className="flex items-center justify-center mb-4">
                        <FcCalendar className="text-blue-600 mr-2" size={32} />
                        <p className="text-gray-600 text-lg font-medium">
                          {event.date} <br/> {event.time}
                        </p>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <FcEditImage className="text-blue-600 mr-2" size={32}/>
                        <p className="text-gray-600 text-sm font-medium">
                          {event.location}
                        </p>
                      </div>
                      <div className="event-text">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-700">{event.description}</p>
                        {event.link && (
                          <a
                          href={event.link}
                          className="btn btn-custom inline-block mt-4"
                        >
                          Join Now
                        </a>)}
                      </div>
                    </div>
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

export default Event;
