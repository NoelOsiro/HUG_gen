'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/UI';
import AboutImage from '@/assets/img/about.jpg';

const tabData = [
  {
    id: 'tab-content-1',
    title: 'About',
    icon: 'fas fa-heart',
    content: 'We are a community-based organization dedicated to addressing critical social challenges affecting our youth and communities. Our focus areas include combating child abuse, reducing school dropout rates particularly among girls, improving access to sexual and reproductive health services, supporting orphans and vulnerable children, tackling youth unemployment, and protecting women\'s rights.',
  },
  {
    id: 'tab-content-2',
    title: 'Mission',
    icon: 'fas fa-bullseye',
    content: 'Creating an equitable society where everyone has equal opportunities in education, employment, and gender equality. We focus on holistic well-being, rights protection, and sustainable growth through comprehensive community programs and youth empowerment initiatives.',
  },
  {
    id: 'tab-content-3',
    title: 'Vision',
    icon: 'fas fa-eye',
    content: 'To be a leading catalyst for positive community transformation, where every young person has access to quality education, healthcare, and economic opportunities, while living in safe, supportive environments free from discrimination and violence.',
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <Section className="bg-white dark:bg-blacksection relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-meta/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <SectionHeader
          subtitle="Learn About Us"
          title="Community Protection, Education & Empowerment"
          description="Building stronger communities through youth leadership, education, and comprehensive support systems."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-meta/20 rounded-2xl"></div>
              <Image
                src={AboutImage}
                alt="About Humble Generation"
                width={600}
                height={700}
                className="rounded-2xl object-cover w-full h-[500px] lg:h-[600px] group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating stats */}
              <motion.div 
                className="absolute top-8 left-8 bg-white/90 dark:bg-blackho/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-primary text-2xl font-bold">500+</div>
                <div className="text-gray-600 dark:text-waterloo text-sm">Youth Empowered</div>
              </motion.div>

              <motion.div 
                className="absolute bottom-8 right-8 bg-white/90 dark:bg-blackho/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-meta/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-meta text-2xl font-bold">15+</div>
                <div className="text-gray-600 dark:text-waterloo text-sm">Communities Served</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {tabData.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    tab.id === activeTab 
                      ? 'bg-gradient-to-r from-primary to-primaryho text-white shadow-solid-5' 
                      : 'bg-gray-100 dark:bg-blackho text-gray-700 dark:text-waterloo hover:text-primary hover:bg-primary/10 border border-gray-200 dark:border-strokedark hover:border-primary/50'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <i className={`${tab.icon} text-sm`}></i>
                  {tab.title}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                {tabData.map(tab => (
                  tab.id === activeTab && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="bg-gray-50 dark:bg-blackho rounded-xl p-8 border border-gray-200 dark:border-strokedark"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                        <i className={`${tab.icon} text-primary`}></i>
                        {tab.title}
                      </h3>
                      <p className="text-gray-700 dark:text-waterloo text-lg leading-relaxed">
                        {tab.content}
                      </p>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>

            {/* Call to Action */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/about"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primaryho text-white font-semibold rounded-full hover:shadow-solid-5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <i className="fas fa-arrow-right text-sm"></i>
              </motion.a>
              <motion.a
                href="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-phone text-sm"></i>
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
