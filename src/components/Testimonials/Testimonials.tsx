import React from 'react';
import SectionHeader from '../Section/SectionHeader';
import Image from 'next/image';

const testimonialsData = [
  {
    name: 'Alice Wanjiru',
    profession: 'Community Educator',
    text: "Being a part of Humble Generation has allowed me to make a real impact in addressing the challenges faced by vulnerable children in our community. We're creating a brighter future for these kids by providing education, health resources, and empowerment opportunities.",
    image: '/img/testimonial-6.jpg'
  },
  {
    name: 'Grace Mwende',
    profession: 'Youth Mentor',
    text: "I've witnessed the transformation in our youth as they gain confidence, skills, and employment opportunities through our programs. Humble Generation is not just an organization; it's a family that's creating lasting change and breaking the cycle of unemployment and limited opportunities.",
    image: '/img/testimonial-2.jpg'
  },
  {
    name: 'Esther Akinyi',
    profession: 'Women Empowerment Advocate',
    text: "Humble Generation is dedicated to ensuring that women's rights are respected and upheld. We're working tirelessly to provide access to reproductive health and create a safe space for women to thrive, both socially and economically.",
    image: '/img/testimonial-3.jpg'
  },
  {
    name: 'John Mungai',
    profession: 'Parent and Supporter',
    text: "As a parent, I'm grateful for the positive impact that Humble Generation has on my children and our community. Their commitment to addressing child abuse, dropout rates, and limited access to resources is making our community stronger and healthier.",
    image: '/img/testimonial-4.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-18 lg:py-16 bg-white">
      <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <SectionHeader
          title="Testimonials"
          text="What people are talking about our charity activities"
        />
        <div className="grid grid-cols-1 md:grid-cols-4  gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="p-4 mb-4 bg-white shadow-lg rounded-lg">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  layout="responsive"
                  className="object-cover w-full h-60"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600 mb-4">{testimonial.profession}</p>
                  <p className="text-gray-700">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
