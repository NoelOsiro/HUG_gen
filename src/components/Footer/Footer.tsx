"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', href: '/twiit', icon: 'fab fa-twitter', color: 'hover:text-blue-400' },
    { name: 'Facebook', href: '/fb', icon: 'fab fa-facebook-f', color: 'hover:text-blue-600' },
    { name: 'YouTube', href: '/yt', icon: 'fab fa-youtube', color: 'hover:text-red-500' },
    { name: 'Instagram', href: '/insta', icon: 'fab fa-instagram', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', href: '/linked', icon: 'fab fa-linkedin-in', color: 'hover:text-blue-700' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Causes', href: '/causes' },
    { name: 'Upcoming Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const supportLinks = [
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Donate', href: '/donate' },
    { name: 'Partnership', href: '/partnership' },
    { name: 'Sponsorship', href: '/sponsorship' },
    { name: 'Community', href: '/community' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-blacksection border-t border-gray-200 dark:border-strokedark transition-colors duration-300">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 overflow-hidden flex rounded-xl bg-gradient-to-br from-primary to-meta shadow-solid-5">
                  <span className="absolute w-6 h-6 -top-1 -right-1 bg-gradient-to-br from-green-400 to-green-500 rounded-md rotate-45 opacity-80"></span>
                  <span className="absolute w-6 h-6 -bottom-1 -right-1 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-md rotate-45 opacity-80"></span>
                  <span className="absolute w-6 h-6 -bottom-1 -left-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md rotate-45 opacity-80"></span>
                  <span className="absolute w-3 h-3 rounded-full bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md"></span>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-meta bg-clip-text text-transparent">
                  Humble Generation
                </h2>
              </div>
              
              <p className="text-gray-700 dark:text-waterloo leading-relaxed mb-6 max-w-md">
                Cultivating compassion, inspiring change, and serving our generation with unwavering dedication. 
                Join us in building stronger, more compassionate communities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-700 dark:text-waterloo hover:text-primary transition-colors duration-300">
                  <i className="fas fa-map-marker-alt mr-3 text-primary"></i>
                  <span>Malindi Complex Lamu Road, Malindi, Kenya</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-waterloo hover:text-primary transition-colors duration-300">
                  <i className="fas fa-phone-alt mr-3 text-primary"></i>
                  <span>+254 714 956 717</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-waterloo hover:text-primary transition-colors duration-300">
                  <i className="fas fa-envelope mr-3 text-primary"></i>
                  <span>humblegenerationke@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-100 dark:bg-blackho rounded-full flex items-center justify-center text-gray-600 dark:text-waterloo transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-solid-5 ${social.color}`}
                  title={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 dark:text-waterloo hover:text-primary transition-colors duration-300 hover:translate-x-1"
                  whileHover={{ x: 4 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Get Involved</h3>
            <div className="space-y-3 mb-8">
              {supportLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 dark:text-waterloo hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 4 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Stay Connected</h4>
              <form className="space-y-3">
                <input 
                  className="w-full py-3 px-4 bg-white dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-waterloo focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300" 
                  type="email" 
                  placeholder="Your email address" 
                />
                <motion.button 
                  className="w-full py-3 px-4 bg-gradient-to-r from-primary to-primaryho text-white font-semibold rounded-lg hover:shadow-solid-5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                >
                  Subscribe
                </motion.button>
                <p className="text-sm text-gray-600 dark:text-waterloo">Join our community for updates and impact stories!</p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-gray-200 dark:border-strokedark pt-8 mt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-waterloo text-center md:text-left">
            © 2024 <span className="text-primary font-semibold">Humble Generation</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-gray-600 dark:text-waterloo hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-600 dark:text-waterloo hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="https://github.com/NoelOsiro" className="text-gray-600 dark:text-waterloo hover:text-primary transition-colors duration-300">
              Q3M Wanda Solutions
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
