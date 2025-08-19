"use client";

import React from "react";
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = () => {
  return (
    <motion.div 
      className="bg-gray-50 dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-xl p-6 hover:shadow-solid-5 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <i className="fas fa-newspaper text-primary"></i>
        Related Stories
      </h4>

      <div className="space-y-4">
        {BlogData.slice(0, 4).map((post, index) => (
          <motion.div
            key={index}
            className="group flex gap-4 p-3 bg-white dark:bg-blacksection rounded-lg border border-gray-100 dark:border-strokedark hover:border-primary/50 transition-all duration-300"
            whileHover={{ x: 4 }}
          >
            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              {post.mainImage ? (
                <Image 
                  fill 
                  src={post.mainImage} 
                  alt={post.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-meta/10 flex items-center justify-center">
                  <i className="fas fa-image text-gray-400 text-lg"></i>
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h5 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                <Link href={`/blog/blog-details`}>
                  {post.title}
                </Link>
              </h5>
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 dark:text-waterloo">
                <i className="fas fa-clock text-primary"></i>
                <span>2 min read</span>
              </div>
            </div>
            
            <div className="flex items-center text-gray-400 group-hover:text-primary transition-colors duration-300">
              <i className="fas fa-arrow-right text-sm"></i>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Posts Link */}
      <motion.div className="mt-6 text-center">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
        >
          <span>View All Stories</span>
          <i className="fas fa-arrow-right text-sm"></i>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default RelatedPost;
