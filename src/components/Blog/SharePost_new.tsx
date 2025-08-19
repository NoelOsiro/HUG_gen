"use client";

import { motion } from 'framer-motion';

const SharePost = () => {
  const shareLinks = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      color: 'hover:text-blue-600',
      href: '#'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      color: 'hover:text-blue-400',
      href: '#'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      color: 'hover:text-blue-700',
      href: '#'
    },
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      color: 'hover:text-green-500',
      href: '#'
    },
    {
      name: 'Copy Link',
      icon: 'fas fa-link',
      color: 'hover:text-primary',
      href: '#'
    }
  ];

  const tags = ['Community', 'Impact', 'Stories', 'Change'];

  return (
    <div className="space-y-8">
      {/* Share Section */}
      <motion.div 
        className="bg-gray-50 dark:bg-blacksection rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <i className="fas fa-share-alt text-primary"></i>
          Share This Story
        </h4>
        
        <div className="flex flex-wrap gap-3">
          {shareLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 bg-white dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-lg text-gray-600 dark:text-waterloo ${link.color} transition-all duration-300 hover:shadow-solid-3 hover:border-primary/50`}
              title={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${link.icon} text-sm`}></i>
              <span className="text-sm font-medium">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Tags Section */}
      <motion.div 
        className="bg-gray-50 dark:bg-blacksection rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <i className="fas fa-tags text-primary"></i>
          Related Topics
        </h4>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.a
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              #{tag}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="bg-gradient-to-r from-primary/10 to-meta/10 rounded-xl p-6 text-center border border-primary/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Inspired by this story?
        </h4>
        <p className="text-gray-700 dark:text-waterloo mb-4">
          Join us in making a difference in our communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.a
            href="/volunteer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primaryho text-white font-semibold rounded-full hover:shadow-solid-5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-hands-helping"></i>
            <span>Get Involved</span>
          </motion.a>
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-envelope"></i>
            <span>Contact Us</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default SharePost;
