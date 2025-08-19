"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Cause1 from "@/assets/img/causes-1.jpg";
import Cause3 from "@/assets/img/causes-3.jpg";
import Cause4 from "@/assets/img/causes-4.jpg";
import Cause5 from "@/assets/img/causes-5.jpg";
import Cause6 from "@/assets/img/causes-6.jpg";
import Cause7 from "@/assets/img/causes-7.jpg";
import { Section, SectionHeader } from "@/components/UI";

const causesData = [
  {
    image: Cause1,
    progress: 65,
    raised: 39000,
    goal: 60000,
    title: "Community Nutrition Program",
    description: "Supporting families with nutritious meals and food security initiatives to ensure healthy growth and development in our communities.",
    category: "Health & Nutrition",
    urgency: "high"
  },
  {
    image: Cause5,
    progress: 25,
    raised: 37500,
    goal: 150000,
    title: "Sustainable Living Initiative",
    description: "Promoting environmental consciousness and sustainable practices for a greener future through education and community action.",
    category: "Environment",
    urgency: "medium"
  },
  {
    image: Cause6,
    progress: 45,
    raised: 45000,
    goal: 100000,
    title: "Education Empowerment",
    description: "Providing quality education access, scholarships, and learning resources for underprivileged children and youth.",
    category: "Education",
    urgency: "high"
  },
  {
    image: Cause4,
    progress: 30,
    raised: 30000,
    goal: 100000,
    title: "Healthcare Access Program",
    description: "Ensuring essential healthcare services reach underserved communities, promoting overall wellness and preventive care.",
    category: "Healthcare",
    urgency: "high"
  },
  {
    image: Cause3,
    progress: 55,
    raised: 55000,
    goal: 100000,
    title: "Youth Health Education",
    description: "Comprehensive sexual and reproductive health education empowering young people with knowledge for informed life decisions.",
    category: "Youth Development",
    urgency: "medium"
  },
  {
    image: Cause7,
    progress: 20,
    raised: 20000,
    goal: 100000,
    title: "Community Health & Hygiene",
    description: "Combating health challenges like jigger infestation through education, prevention, treatment, and community empowerment.",
    category: "Public Health",
    urgency: "high"
  },
];

// Custom Progress Bar Component
const ProgressBar = ({ progress, className = "" }: { progress: number; className?: string }) => {
  return (
    <div className={`w-full bg-gray-200 dark:bg-strokedark rounded-full h-2 ${className}`}>
      <motion.div
        className="bg-gradient-to-r from-primary to-meta h-2 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  );
};

// Urgency Badge Component
const UrgencyBadge = ({ urgency }: { urgency: string }) => {
  const urgencyColors = {
    high: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800",
    medium: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
    low: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${urgencyColors[urgency as keyof typeof urgencyColors]}`}>
      {urgency.charAt(0).toUpperCase() + urgency.slice(1)} Priority
    </span>
  );
};

const Cause = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCauses, setVisibleCauses] = useState(6);

  const categories = ["all", "Health & Nutrition", "Education", "Healthcare", "Environment"];
  
  const filteredCauses = activeTab === "all" 
    ? causesData 
    : causesData.filter(cause => cause.category === activeTab);

  return (
    <Section className="bg-white dark:bg-blacksection transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-meta/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <SectionHeader
          subtitle="Make a Difference"
          title="Popular Causes"
          description="Join us in creating positive change in our communities. Every contribution, big or small, makes a meaningful impact."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category
                  ? 'bg-gradient-to-r from-primary to-primaryho text-white shadow-solid-5'
                  : 'bg-gray-100 dark:bg-blackho text-gray-700 dark:text-waterloo hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "all" ? "All Causes" : category}
            </motion.button>
          ))}
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCauses.slice(0, visibleCauses).map((cause, index) => (
              <motion.div
                key={cause.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-xl overflow-hidden hover:shadow-solid-7 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cause.image}
                    alt={cause.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <UrgencyBadge urgency={cause.urgency} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Category */}
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {cause.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {cause.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-waterloo leading-relaxed">
                    {cause.description}
                  </p>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-waterloo">Progress</span>
                      <span className="font-semibold text-primary">{cause.progress}%</span>
                    </div>
                    <ProgressBar progress={cause.progress} />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-waterloo">
                        Raised: <span className="font-semibold text-gray-900 dark:text-white">KSh {cause.raised.toLocaleString()}</span>
                      </span>
                      <span className="text-gray-600 dark:text-waterloo">
                        Goal: <span className="font-semibold text-gray-900 dark:text-white">KSh {cause.goal.toLocaleString()}</span>
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <motion.a
                      href="/donate"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-primaryho text-white font-semibold rounded-lg hover:shadow-solid-5 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <i className="fas fa-heart text-sm"></i>
                      Donate
                    </motion.a>
                    <motion.a
                      href="/volunteer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <i className="fas fa-hands-helping text-sm"></i>
                      Volunteer
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleCauses < filteredCauses.length && (
          <div className="text-center mt-12">
            <motion.button
              onClick={() => setVisibleCauses(prev => prev + 3)}
              className="px-8 py-4 bg-gray-100 dark:bg-blackho text-gray-900 dark:text-white font-semibold rounded-full hover:bg-primary hover:text-white border border-gray-200 dark:border-strokedark hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Causes
            </motion.button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Cause;
