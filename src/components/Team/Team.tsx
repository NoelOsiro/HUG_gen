"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { Section, SectionHeader } from '@/components/UI';

const teamMembers = [
  {
    image: '/img/team-1.jpg',
    name: 'Isaiah Nyandwaro',
    role: 'Executive Director',
    bio: 'Leading our mission with passion and dedication to community transformation.',
    social: {
      twitter: '/twitt',
      facebook: '/fb',
      linkedin: '/linkedin',
      instagram: '/insta'
    }
  },
  {
    image: '/img/team-6.jpg',
    name: 'Mike Dimo',
    role: 'Operations & Finance',
    bio: 'Ensuring sustainable operations and transparent financial management.',
    social: {
      twitter: '/twitt',
      facebook: '/fb',
      linkedin: '/linkedin',
      instagram: '/insta'
    }
  },
  {
    image: '/img/team-5.jpg',
    name: 'Daniel Mogaka',
    role: 'Programmes Coordinator',
    bio: 'Coordinating impactful programs that create lasting change in communities.',
    social: {
      twitter: '/twitt',
      facebook: '/fb',
      linkedin: '/linkedin',
      instagram: '/insta'
    }
  },
  {
    image: '/img/team-2.jpg',
    name: 'Linet Awuor',
    role: 'Administrator',
    bio: 'Managing operations with excellence and ensuring smooth organizational flow.',
    social: {
      twitter: '/twitt',
      facebook: '/fb',
      linkedin: '/linkedin',
      instagram: '/insta'
    }
  },
  {
    image: '/img/team-4.jpg',
    name: 'Noel Osiro',
    role: 'ICT Engineer',
    bio: 'Leveraging technology to amplify our impact and reach more communities.',
    social: {
      twitter: '/twitt',
      facebook: '/fb',
      linkedin: '/linkedin',
      instagram: '/insta'
    }
  },
];

const Team = () => {
  return (
    <Section className="bg-white dark:bg-blacksection transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-meta/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <SectionHeader
          subtitle="Our Team"
          title="Meet Our Dedicated Team"
          description="The passionate individuals behind our community transformation initiatives, working together to create lasting positive change."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group bg-gray-50 dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-xl overflow-hidden hover:shadow-solid-7 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <Image 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <motion.a 
                    href={member.social.twitter} 
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BsTwitterX className="text-sm" />
                  </motion.a>
                  <motion.a 
                    href={member.social.facebook} 
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaFacebookF className="text-sm" />
                  </motion.a>
                  <motion.a 
                    href={member.social.linkedin} 
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin className="text-sm" />
                  </motion.a>
                  <motion.a 
                    href={member.social.instagram} 
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaInstagramSquare className="text-sm" />
                  </motion.a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 text-center space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mt-1">
                    {member.role}
                  </p>
                </div>
                
                <p className="text-gray-700 dark:text-waterloo text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Desktop Social Links */}
                <div className="flex justify-center space-x-4 lg:opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={member.social.twitter} 
                    className="text-gray-400 dark:text-waterloo hover:text-primary transition-colors duration-300"
                    title="Twitter"
                  >
                    <BsTwitterX className="text-lg" />
                  </a>
                  <a 
                    href={member.social.facebook} 
                    className="text-gray-400 dark:text-waterloo hover:text-primary transition-colors duration-300"
                    title="Facebook"
                  >
                    <FaFacebookF className="text-lg" />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="text-gray-400 dark:text-waterloo hover:text-primary transition-colors duration-300"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a 
                    href={member.social.instagram} 
                    className="text-gray-400 dark:text-waterloo hover:text-primary transition-colors duration-300"
                    title="Instagram"
                  >
                    <FaInstagramSquare className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to Join Our Mission?
          </h3>
          <p className="text-gray-700 dark:text-waterloo mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals who want to make a difference in their communities. 
            Join us in creating positive change!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primaryho text-white font-semibold rounded-full hover:shadow-solid-5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-hands-helping"></i>
              <span>Become a Volunteer</span>
            </motion.a>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-briefcase"></i>
              <span>View Careers</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Team;
