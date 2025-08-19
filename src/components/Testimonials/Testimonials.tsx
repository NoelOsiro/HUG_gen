"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../UI';
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonialsData = [
  {
    name: 'Alice Wanjiru',
    profession: 'Community Educator',
    text: "Being a part of Humble Generation has allowed me to make a real impact in addressing the challenges faced by vulnerable children in our community. We're creating a brighter future for these kids by providing education, health resources, and empowerment opportunities.",
    image: '/img/testimonial-6.jpg',
    rating: 5,
    location: 'Malindi, Kenya'
  },
  {
    name: 'Grace Mwende',
    profession: 'Youth Mentor',
    text: "I've witnessed the transformation in our youth as they gain confidence, skills, and employment opportunities through our programs. Humble Generation is not just an organization; it's a family that's creating lasting change and breaking the cycle of unemployment and limited opportunities.",
    image: '/img/testimonial-2.jpg',
    rating: 5,
    location: 'Kilifi, Kenya'
  },
  {
    name: 'Esther Akinyi',
    profession: 'Women Empowerment Advocate',
    text: "Humble Generation is dedicated to ensuring that women's rights are respected and upheld. We're working tirelessly to provide access to reproductive health and create a safe space for women to thrive, both socially and economically.",
    image: '/img/testimonial-3.jpg',
    rating: 5,
    location: 'Lamu, Kenya'
  },
  {
    name: 'John Mungai',
    profession: 'Parent and Supporter',
    text: "As a parent, I'm grateful for the positive impact that Humble Generation has on my children and our community. Their commitment to addressing child abuse, dropout rates, and limited access to resources is making our community stronger and healthier.",
    image: '/img/testimonial-4.jpg',
    rating: 5,
    location: 'Garsen, Kenya'
  },
  {
    name: 'Sarah Kadzo',
    profession: 'Local Business Owner',
    text: "The business skills training program transformed my small shop into a thriving enterprise. Humble Generation doesn't just provide aid—they empower us to become self-sufficient and create opportunities for others in our community.",
    image: '/img/testimonial-5.jpg',
    rating: 5,
    location: 'Watamu, Kenya'
  },
  {
    name: 'Peter Mbaya',
    profession: 'Youth Leader',
    text: "Through the leadership development programs, I've gained the confidence and skills to advocate for change in my community. We're not just beneficiaries—we're partners in creating a better future for everyone.",
    image: '/img/team-3.jpg',
    rating: 5,
    location: 'Malindi, Kenya'
  }
];

const Testimonials = () => {
  return (
    <Section className="bg-gray-50 dark:bg-blackho transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-meta/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <SectionHeader
          subtitle="Testimonials"
          title="Stories from Our Community"
          description="Hear from the amazing people whose lives have been transformed through our community programs and initiatives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group bg-white dark:bg-blacksection border border-gray-200 dark:border-strokedark rounded-2xl overflow-hidden hover:shadow-solid-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-primary/10 to-meta/10 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <FaQuoteLeft className="text-primary text-lg" />
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-6">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                  <span className="text-sm text-gray-500 dark:text-waterloo ml-2">
                    {testimonial.rating}.0
                  </span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 dark:text-waterloo leading-relaxed text-base italic relative">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Author Section */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-strokedark">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-blacksection"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.profession}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-waterloo flex items-center gap-1 mt-1">
                      <i className="fas fa-map-marker-alt"></i>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-meta to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200 dark:border-strokedark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: "500+", label: "Lives Transformed", icon: "fas fa-heart" },
            { number: "95%", label: "Satisfaction Rate", icon: "fas fa-star" },
            { number: "15+", label: "Communities Served", icon: "fas fa-users" },
            { number: "10+", label: "Years of Impact", icon: "fas fa-calendar-check" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-meta/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/20 group-hover:to-meta/20 transition-all duration-300">
                <i className={`${stat.icon} text-primary text-2xl group-hover:scale-110 transition-transform duration-300`}></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-waterloo font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Share Your Story
          </h3>
          <p className="text-gray-700 dark:text-waterloo mb-8 max-w-2xl mx-auto">
            Have you been impacted by our programs? We&apos;d love to hear your story and share it with our community to inspire others.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primaryho text-white font-semibold rounded-full hover:shadow-solid-5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-comment-alt"></i>
            <span>Share Your Story</span>
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Testimonials;
